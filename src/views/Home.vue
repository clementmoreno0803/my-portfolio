<template>
  <main class="container">
    <Cursor />
    <section class="presentation">
      <h1
        @mouseover="store.isHoveringContent = true"
        @mouseout="store.isHoveringContent = false"
      >
        <span>Bonjour, Je suis </span><span>Clément</span><br />
        <span>Développeur Front-End</span> <br />
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
      <p class="video-presentation" @mouseover="store.isHoveringContent = true"
        @mouseout="store.isHoveringContent = false">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora molestiae omnis nesciunt? Labore optio nemo amet. Numquam consequuntur mollitia nemo dicta veniam? Voluptas facilis, veritatis porro quos odit iusto accusantium ratione pariatur vitae architecto recusandae accusamus quod veniam labore.
      </p>
      </section>
          <section class="projects">
      <!-- <img
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
        alt=""
        class="video-skills"
      /> -->
      <h2 @mouseover="store.isHoveringContent = true"
        @mouseout="store.isHoveringContent = false">Projets <span class="project-union"></span> Selectionnés</h2>
      </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "@/components/CustomCursor.vue";
import { useDataStore } from "../store/main";

export default defineComponent({
  components: {
    Cursor,
  },
  setup() {
    const homeElements = ref<HTMLElement[]>([]);
    gsap.registerPlugin(ScrollTrigger);
    const store = useDataStore();

    onMounted(() => {
      homeElements.value = gsap.utils.toArray(".presentation span");
      homeElements.value.forEach((span: HTMLElement, index:number) => {
        gsap.to(span, {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: index * 0.3,
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
          end: "+=300",
          scrub: true,
        },
      });
      tl.to(".video-skills", {
        borderRadius: 20,
        marginLeft: "5vw",
        width: '15vw',
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
        transform: 'translateY(0)',
        scrollTrigger: {
          trigger: ".presentation-other-skills",
          start: "bottom bottom",
          end: "+=400",
          scrub: true,
        },
      });
      tl.to(".projects h2", {
        duration: 6,
        transform: 'translateX(0)',
        scrollTrigger: {
          trigger: ".video-skills",
          start: "center center",
          end: "+=200",
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
    padding: 10vh 0 15vh;
    h1 {
      position: relative;
      font-size: 3.5rem;
      text-align: left;
      color: $primary-color;
      font-weight: 400;
      span {
        position: relative;
        opacity: 0;
        transform: translateY(80px);
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
    p{
      position: relative;
      opacity: 0;
      transform: translateY(150px);
      width: 45vw;
      display: inline-block;
      margin-left: 5vw;
    }
  }
  .projects{
    h2{
      width: 100vw;
      font-size: 6rem;
      font-weight: 600;
      color: $primary-color;
      transform: translateX(10%);

      .project-union{
        content: '';
        display: inline-block;
        transform: translateY(-30px);
        width: 100px;
        height: 2px;
        background: $primary-color;
      }
    }
  }
}
</style>