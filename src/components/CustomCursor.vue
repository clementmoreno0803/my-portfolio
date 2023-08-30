<template>
  <div
    class="custom-cursor"
    :class="{
      'hover-content': store.isHoveringContent,
      'hover-navigation': store.isHoverNavigation,
      'hover-project': store.isHoverProject,
    }"
    :style="{ left: `${xPos}px`, top: `${yPos}px` }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";
import { useDataStore } from "../store/main.js";

export default defineComponent({
  setup() {
    const store = useDataStore();
    const xPos = ref<number>(0);
    const yPos = ref<number>(0);

    const updateCursor = (e: MouseEvent) => {
      xPos.value = e.clientX;
      yPos.value = e.clientY;
    };

    onMounted(() => {
      window.addEventListener("mousemove", updateCursor);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("mousemove", updateCursor);
    });

    return { updateCursor, xPos, yPos, store };
  },
});
</script>
<style lang="scss">
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "../scss/main.scss";

.custom-cursor {
  position: fixed;
  width: 15px;
  height: 15px;
  background-color: $primary-color;
  border-radius: 50%;
  pointer-events: none;
  padding: 0;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: background-color 0.4s ease-out, padding 0.4s ease-out,
    scale 0.4s ease-out;
  &.hover-navigation {
    background-color: transparent;
    border: 1px solid $primary-color;
    padding: 5px;
    transition: background-color 0.4s ease-in, padding 0.4s ease-in;
  }
  &.hover-content {
    mix-blend-mode: exclusion;
  }
  &.hover-project {
    scale: 6;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: scale 0.4s ease-in;
    overflow: hidden;
    &::after {
      font-family: "Font Awesome 5 Free";
      content: "\f178";
      display: inline-block;
      vertical-align: middle;
      font-weight: 900;
      font-size: 0.4rem;
      color: $white;
      transition: all 0.4s ease-out;
      animation: moving-arrow 0.4s ease-out;
    }
  }
}
@keyframes moving-arrow{
  from{
    transform: translateX(-50px);
  }
  to{
    transform: translateX(0);
  }
}
</style>