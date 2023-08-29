<template>
  <nav class="container">
    <Cursor
    /> 
    <img src="../assets/PP.svg" alt="" class="pp-logo">
    <router-link
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
      @mousedown="handleMouseDown(index, route)"
      @mouseup="handleMouseUp(index)"
      @mouseover="store.isHoverNavigation = true"
      @mouseout="store.isHoverNavigation = false"
      class="router-link"
      :style="routeStyle(index)"
    >
      {{ route.name }}
    </router-link>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "@/components/CustomCursor.vue";
import {useDataStore} from '../store/main'

export default defineComponent({
  components: {
    Cursor,
  },
  setup() {
    const store = useDataStore();
    // gsap.registerPlugin(ScrollTrigger)
    const routes = computed(() => [
      { id: 0, path: "/", name: "Home" },
      { id: 1, path: "/about", name: "About" },
      { path: "/test", name: "Projects" },
      { path: "/test", name: "Contact" },
    ]);
    const setIndexValue = ref<number | null>(null);
    const handleMouseDown = (index: number) => {
      setIndexValue.value = index;
    };
    const handleMouseUp = () => {
      setIndexValue.value = null;
    };
    const routeStyle = (index: number) => {
      if (index === setIndexValue.value) {
        return {
          backgroundColor: "#063DCC",
          color: "white",
          borderRadius: "25px",
          border: "1px solid #063DCC",
        };
      }
    };


    onMounted(() => {
      gsap.to(".router-link", {
        y: 20,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
      });
     gsap.to(".pp-logo", {
        duration: 1,
        opacity: 1,
        top: 20,
      });
    });

    return {
      routeStyle,
      handleMouseDown,
      handleMouseUp,
      routes,
      store
    };
  },
});
</script>

<style lang="scss">
@import "../scss/main.scss";

nav {
  gap: 20px;
  display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  .pp-logo{
    width: 50px;
    height: 50px;
    position: fixed;
    right: 40px;
    top: -20px;
    z-index: 1;
    opacity: 0,
  }
  a {
    opacity: 0;
    font-weight: bold;
    color: $primary-color;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 5px 10px;
    margin-top: 50px;
    &.router-link-exact-active {
      border: 1px solid $primary-color;
      border-radius: 25px;
    }
  }
}
</style>
