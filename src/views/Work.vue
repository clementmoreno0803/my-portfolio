<template>
  <main class="container">
    <Cursor />
    <h2
      @mouseover="store.isHoveringContent = true"
      @mouseout="store.isHoveringContent = false"
      class="project-title"
    >
      Projets <span class="project-union"></span>
      <span class="selected"> Selectionnés</span>
    </h2>
    <section class="projects">
      <div class="project-container">
        <div
          v-for="(project, index) in store.projects"
          :key="index"
          class="project-container-card"
        >
          <AllProject :project="project" :index='index' class="cards" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import AllProject from "@/components/ProjectCards.vue";
import { useDataStore } from "@/store/main";
import Cursor from "../components/CustomCursor.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  components: {
    AllProject,
    Cursor,
  },
  setup() {
    const store = useDataStore();
    const projects = ref<string[]>([]);

    const tl = gsap.timeline();
    onMounted(async () => {
      await store.getDataFromFirebase();

      gsap.registerPlugin(ScrollTrigger); // Appel
      projects.value = gsap.utils.toArray(".project-container-card");
      projects.value.forEach((el) => {
        tl.to(el, {
          opacity: 1,
          duration: 4,
          transform: "translateX(0)",
          scrollTrigger: {
            trigger: el,
            start: "bottom bottom",
            end: "top top",
            // markers: true,
            scrub: true,
          },
        });
      });
    });

    return { store };
  },
});
</script>


<style lang="scss" scoped>
@import "../scss/main.scss";
.projects {
  margin-bottom: 10vh;
  .project-container-card {
    opacity: 0;
    transform: translateX(150px);
    height: 80vh;
    width: 100%;

    &:nth-child(even) {
      transform: translateX(-250px);
    }
    .cards {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
.project-title {
  font-size: 6rem;
  font-weight: 600;
  color: $primary-color;
  position: relative;
  left: -8vw;
  .selected {
    font-size: 6rem;
    font-weight: 600;
    color: $primary-color;
    opacity: 0.6;
    position: absolute;
    top: 60px;
    right: 60px;
  }
  .project-union {
    content: "";
    display: inline-block;
    transform: translateY(-30px);
    width: 100px;
    height: 2px;
    background: $primary-color;
  }
}
</style>