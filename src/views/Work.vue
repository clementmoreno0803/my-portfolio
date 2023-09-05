<template>
  <main class="container" id="work">
    <Cursor />
    <h2
      @mouseover="store.isHoveringContent = true"
      @mouseout="store.isHoveringContent = false"
      class="project-title"
    >
      Projets <span class="project-union"></span> Selectionnés
    </h2>
    <section class="projects">
      <div class="project-container">
        <div
          v-for="(project, index) in store.projects"
          :key="index"
          class="project-container-card"
        >
          <AllProject :project="project" class="cards" />
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
            start: "center center",
            end: "top top",
            markers: true,
            scrub: true,
          },
        });
      });

      // });
    });

    return { store };
  },
});
</script>


<style lang="scss" scoped>
@import "../scss/main.scss";
.projects {
  margin-bottom: 30vh;
  .project-container-card {
    opacity: 0;
    transform: translateX(50%);
    height: 80vh;
    width: 100%;
    
    &:nth-child(even) {
      transform: translateX(-50%);
    }
    .cards {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>