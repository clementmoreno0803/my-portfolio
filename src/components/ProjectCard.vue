<template>
  <div class="card">
    <div
      class="card-image"
      v-if="project.title"
      @mouseover="store.isHoverProject = true"
      @mouseout="store.isHoverProject = false"
    >
      <img :src="require(`@/assets/${project.image}.png`)" alt="" srcset="" />
    </div>
    <div
      v-else
      @mouseover="store.isHoveringContent = true"
      @mouseout="store.isHoveringContent = false"
      class="project-techno"
    >
      <img :src="require(`@/assets/${project.image}.svg`)" alt="" srcset="" />
    </div>
    <h2>{{ project.title }}</h2>
    <div
      class="project-techno-tag"
      v-for="techno in project.languages"
      :key="techno"
    >
      <h3>
        {{ techno.name }}
      </h3>
    </div>
    <p>{{projet.description}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Project from "../types/project";
import { useDataStore } from "../store/main.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  props: {
    project: {
      required: true,
      type: Object as PropType<Project>,
    },
  },
  setup() {
    const store = useDataStore();
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to(".project-techno", {
      rotate: "720deg",
      duration: 2,
      scrollTrigger: {
        trigger: ".project-title",
        start: "center center",
        end: "+=600",
        scrub: true,
      },
    });
    return { store };
  },
});
</script>
<style lang="scss">
@import "../scss/main.scss";
.card {
  max-width: 25vw;
  h2 {
    font-size: 3rem;
    color: $primary-color;
    text-transform: capitalize;
    margin : 10px 0;
  }
  .project-techno-tag {
    display: inline-flex;
    margin-right: 5px;
    h3 {
      color: $primary-color;
      font-size: 0.6rem;
      padding: 5px;
      border: 1px solid $primary-color;
      width: fit-content;
      border-radius: 5px;
    }
  }

  .project-techno {
    transform-origin: center center;
  }

  .card-image {
    border-radius: 20px;
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
}
</style>