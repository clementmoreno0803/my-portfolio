<template>
  <main class="container">
    <Cursor />
    <section class="presentation">
      <h1
        @mouseover="store.isHoveringContent = true"
        @mouseout="store.isHoveringContent = false"
      >
        <span>Bonjour, Je suis Clément</span>
        <span>Développeur Front-End</span>
        <span>- Entrepreneur & Créatif</span>
        {{ store.count }}
      </h1>
      <div
        class="presentation-other-skills"
        @mouseover="store.isHoveringContent = true"
        @mouseout="store.isHoveringContent = false"
      >
        <img
          src="../assets/skills.svg"
          alt=""
          class="presentation-other-skills-round"
        />
        <p>
          COUTURE, PHOTOGRAPHIE, SOUDURE, MENUISERIE, PEINTURE, SERIERGRAPHIE,
          MECANIQUE, UPCYCLING
        </p>
      </div>
    </section>
    <section class="video">
      <img
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
        alt=""
        class="video-skills"
      />
      <p
        class="video-presentation"
        @mouseover="store.isHoveringContent = true"
        @mouseout="store.isHoveringContent = false"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora
        molestiae omnis nesciunt? Labore optio nemo amet. Numquam consequuntur
        mollitia nemo dicta veniam? Voluptas facilis, veritatis porro quos odit
        iusto accusantium ratione pariatur vitae architecto recusandae accusamus
        quod veniam labore.
      </p>
    </section>
    <h2
      @mouseover="store.isHoveringContent = true"
      @mouseout="store.isHoveringContent = false"
      class="project-title"
    >
      Projets <span class="project-union"></span> Selectionnés
    </h2>
    <section class="projects">
      <div
        v-for="project in store.projectsPreview"
        :key="project.id"
        class="project-card"
      >
        <ProjectCard :project="project" />
      </div>
      <p>To the next level</p>
    </section>
    <section class="contact"></section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useDataStore } from "../store/main.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Cursor from "@/components/CustomCursor.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default defineComponent({
  components: {
    Cursor,
    ProjectCard,
  },
  setup() {
    const homeElements = ref<HTMLElement[]>([]);
    gsap.registerPlugin(ScrollTrigger);
    const store = useDataStore();

    onMounted(() => {
      store.getDataFromFirebase();

      homeElements.value = gsap.utils.toArray(".presentation span");
      homeElements.value.forEach((span: HTMLElement, index: number) => {
        gsap.to(span, {
          opacity: 1,
          duration: 1.5,
          delay: index * 0.3,
          transform: "translateY(0)",
        });
        gsap.to(".presentation-other-skills", {
          opacity: 1,
          duration: 4,
        });
      });

      const tl = gsap.timeline();
      // -- GSAP Animations -- //
      tl.to(".presentation-other-skills-round", {
        rotate: "720deg",
        duration: 2,
        scrollTrigger: {
          trigger: ".presentation",
          start: "top top",
          end: "+=600",
          scrub: true,
        },
      });
      tl.to(".video-skills", {
        borderRadius: 20,
        marginLeft: "5vw",
        width: "15vw",
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".presentation",
          start: "top top",
          end: "+=600",
          scrub: true,
        },
      });
      tl.to(".video-presentation", {
        opacity: 1,
        duration: 3,
        delay: 2,
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: ".presentation-other-skills",
          start: "bottom bottom",
          end: "+=400",
          scrub: true,
        },
      });
      tl.to(".project-title", {
        duration: 6,
        transform: "translateX(0)",
        scrollTrigger: {
          trigger: ".video-skills",
          start: "center center",
          end: "+=200",
          // markers: true,
          scrub: true,
        },
      });
      tl.to(".projects", {
        duration: 2,
        transform: "translateY(-80px)",
        scrollTrigger: {
          trigger: ".project-title",
          start: "bottom bottom",
          end: "+=1000",
          markers: true,
          scrub: true,
        },
      });
    });

    return {
      store,
    };
  },
});
</script>


<style lang="scss" scoped>
@import "../scss/main.scss";
main {
  width: 400vw;
  .presentation {
    display: flex;
    padding: 20vh 0 15vh;
    h1 {
      position: relative;
      font-size: 3.5rem;
      text-align: left;
      color: $primary-color;
      font-weight: 400;
      span {
        position: relative;
        opacity: 0;
        display: block;
        transform: translateY(50px);
      }
    }
    .presentation-other-skills {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 30vh;
      margin-left: 15vw;
      opacity: 0;
      .presentation-other-skills-round {
        transform-origin: center center;
        transform: rotate(0deg);
      }
      p {
        color: $primary-color;
        font-size: 0.7rem;
        max-width: 15vw;
        text-align: left;
      }
    }
  }
  .video {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .video-skills {
      position: relative;
      width: auto;
      height: 600px;
      object-fit: cover;
      opacity: 0;
      z-index: 99;
      margin-left: 0;
    }
    p {
      position: relative;
      opacity: 0;
      transform: translateY(150px);
      width: 45vw;
      display: inline-block;
      margin-left: 5vw;
    }
  }

  // Big title to announce the projects
  .project-title {
    width: 100vw;
    font-size: 6rem;
    font-weight: 600;
    color: $primary-color;
    transform: translateX(30%);

    .project-union {
      content: "";
      display: inline-block;
      transform: translateY(-30px);
      width: 100px;
      height: 2px;
      background: $primary-color;
    }
  }
  .projects {
    grid-column-gap: 14vw;
    grid-row-gap: 6vw;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 1fr auto;
    padding: 0 14vw;
    transform: translateY(50px);
    align-items: center;
    .project-card {
      &:nth-child(1) {
        grid-row: span 2;
        height: 100%;
        width: 100%;
      }
      // &:nth-child(2) {
      //   background: purple;
      // }
      &:nth-child(3) {
        grid-row: span 2;
        height: 100%;
        width: 100%;
      }
      &:nth-child(4) {
        grid-row: span 2;
        height: 100%;
        width: 100%;
      }
    }
  }

  .contact {
    width: 100%;
    height: 20vh;
    background: $primary-color;
  }
}
</style>