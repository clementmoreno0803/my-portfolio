<template>
  <main class="container">
    <Cursor />
    <section class="detail">
      <h2 @mouseover="store.isHoveringContent = true" @mouseout="store.isHoveringContent = false" class="detail-title">
        {{ currentProject.title }}
        <span class="project-union"></span>
      </h2>
      <h3 @mouseover="store.isHoveringContent = true" @mouseout="store.isHoveringContent = false"
        class="detail-description">
        {{ currentProject.description }}
      </h3>
    </section>
    <section class="presentation">
      <img :src="require(`@/assets/${currentProject.presentation}.jpg`)" alt="" srcset="" class="presentation-img">
      <div class="presentation-description">
        <div class="project-techno-tag" v-for="techno in currentProject.languages" :key="techno.name">
          <h4>{{ techno.name }}</h4>
        </div>
        <h3>{{ currentProject.presTitle }} <span class="project-union"></span></h3>
        <h4>{{ currentProject.presDesc }}</h4>
      </div>
    </section>
    <section class="gallery">
      <div class="gallery-container" v-for="picture in currentProject.gallery" :key="picture.img">
        <img :src="require(`@/assets/${picture.img}.jpg`)" alt="" class="gallery-container-img">
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { useDataStore } from "@/store/main";
import {
  defineComponent,
  computed,
  onBeforeMount,
  ref,
  onMounted
} from "vue";
import { useRoute } from "vue-router";
import Cursor from "@/components/CustomCursor.vue";
import Project from "@/types/project";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  components: {
    Cursor
  },
  setup() {
    const store = useDataStore();
    const route = useRoute();
    const gallery = ref<string[]>([])

    onBeforeMount(() => {
      store.getDataFromFirebase();
    })


    const projectId = computed(() => {
      return Array.isArray(route.params.id)
        ? parseInt(route.params.id[0])
        : parseInt(route.params.id);
    })
    const currentProject = computed(() => {
      return store.projects.find(project => project.id === projectId.value) as Project
    })



    // Gsap animations 
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger); // Appel
      const tl = gsap.timeline();
      gallery.value = gsap.utils.toArray(".gallery-container-img");
      gallery.value.forEach((el) => {
        tl.to(el, {
          opacity: 1,
          duration: 5,
          transform: "translateX(0)",
          scrollTrigger: {
            trigger: el,
            start: "60% 60%",
            end: "+=300",
            markers: true,
            scrub: true,
          },
        });
      });
    })
    return {
      store, route,
      currentProject,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.detail {
  .detail-title {
    font-size: 4.5rem;
    font-weight: 600;
    color: $primary-color;
    position: relative;
    text-align: left;
    margin: 80px 0 10px;
  }

  .detail-description {
    font-size: 1rem;
    font-weight: 400;
    color: $primary-color;
    position: relative;
    text-align: left;
    margin-bottom: 80px;
  }
}

.presentation {
  margin: 50px 0;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 800px;
  }

  h3 {
    color: $primary-color;
    font-size: 2.3rem;
    margin-bottom: 15px;
  }

  h4 {
    color: $primary-color;
    font-size: 0.9rem;
    max-width: 60vw;
    text-align: justify;
  }

  .presentation-description {
    margin: 60px;
    text-align: left;

    .project-techno-tag {
      display: inline-flex;
      margin: 15px 15px 25px 0;

      h4 {
        color: $primary-color;
        font-size: 0.7rem;
        padding: 10px 15px;
        border: 1px solid $primary-color;
        width: fit-content;
        border-radius: 25px;
        gap: 20px
      }
    }
  }
}

.gallery {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 100px;
  margin-bottom: 120px;

  .gallery-container {

    &:nth-child(1) {
      width: 55%;
      height: 500px;
    }

    &:nth-child(2) {
      width: 35%;
      height: 300px;
    }

    &:nth-child(3) {
      width: 100%;
      height: 500px;
    }

    img {
      opacity: 0;
    transform: translateY(100px);
      width: 100%;
      height: -webkit-fill-available;
      object-fit: cover;
      border-radius: 10px;
    }
  }
}

.project-union {
  content: "";
  display: inline-block;
  transform: translateY(0px);
  width: 150px;
  height: 2px;
  background: $primary-color;
}</style>