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
      <img src="@/assets/moi.png" alt="" class="video-skills" />
      <p
        class="video-presentation"
        @mouseover="store.isHoveringContent = true"
        @mouseout="store.isHoveringContent = false"
      >
        <b>Mon projet à 5 ans ? Devenir Creative Developer</b
        ><br /><br /><br /><br />

        A la suite d’une année dans le E-commerce, au sein de
        <b> SUTUNAM France**</b>, j’ai pu renforcer mes compétences sur
        plusieurs stacks, principalement <b>Magento</b>qui m’a également amené à
        explorer<b>AlpineJs</b>,<b>Tailwind</b>,<b>Jquery</b>,<b>PHP</b> et le
        <b>XML.</b> Je suis également familier avec
        <b>Docker</b>,<b>Composer</b>et <b>GitLab</b> qui faisait partie
        intégrante de notre écosystème. <br /><br />

        Passionné par la créativité des sites
        <a href="https://www.awwwards.com/"> Awwwards</a>, leurs beautés et
        leurs complexités, je souhaite devenir <b>Créative dev.</b> à moyen
        terme. <br />
        Je développe donc ma palette de compétences dans cette direction, en
        autonomie depuis 3 mois, avec l’apprentissage de <b>Vuejs</b>, et d’une
        <b>centaine d’autres points</b> englobant<b
          >Accessibilité, SEO, HTML, CSS, SCSS, Vanilla Js, VueJs, Pinia,
          CompositionApi, Typescript.</b
        ><br /><br />
        Et par la suite,<b>GSAP</b>,<b>WebGL</b> et
        <b>ThreeJs**</b>.<br /><br />

        C’est pourquoi je veux mettre ma passion, mon sérieux et ma résilience
        au profit de l’équipe et des projets que vous pourrez me confier, le
        tout avec implication et créativité.<br /><br />

        <u
          >Très curieux et autonome, j’aime apprendre, essayer, trouver des
          solutions, réessayer, le tout dans un environnement capable d’assurer
          mon développement professionnel tout en me permettant d’exprimer ma
          vision en tant que développeur, mais également en tant que créatif, et
          entrepreneur.</u
        >
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
      <router-link to="/work" class="projects-all"
        >VOIR TOUS LES PROJETS</router-link
      >
    </section>
    <the-footer></the-footer>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useDataStore } from "../store/main.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Cursor from "@/components/CustomCursor.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import TheFooter from "@/layout/TheFooter.vue";

export default defineComponent({
  components: {
    Cursor,
    ProjectCard,
    TheFooter,
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
        duration: 1,
        scrollTrigger: {
          trigger: ".presentation-other-skills",
          start: "top top",
          end: "+=200",
          scrub: true,
        },
      });
      tl.to(".project-title", {
        duration: 3,
        transform: "translateX(0)",
        scrollTrigger: {
          trigger: ".video-skills",
          start: "center center",
          end: "+=500",
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
      // transform: translateY(150px);
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
    transform: translateX(30vw);

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
    justify-items: center;
    .project-card {
      &:nth-child(1) {
        grid-row: span 2;
        height: 100%;
        width: 100%;
      }
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
    .projects-all {
      font-size: 1.2rem;
      color: $primary-color;
      padding-bottom: 5px;
      border-bottom: 2px solid $primary-color;
      text-decoration: none;
      display: inline;
      transform: translateY(-10vh);
      font-weight: 400;
      width: fit-content;
      background: $background-color;
      // overflow: hidden;
      &:hover::after {
        font-family: "Font Awesome 5 Free";
        content: "\f178";
        display: inline-block;
        vertical-align: middle;
        padding-left: 10px;
        font-weight: 900;
        font-size: 1rem;
        position: absolute;
        right: -25px;
        top: 5px;
        color: $primary-color;
        transition: all 0.4s ease-out;
        animation: moving-arrow 0.4s ease-out;
        z-index: -1;
      }
    }
  }
}
</style>