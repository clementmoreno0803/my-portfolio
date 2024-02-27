<template>
  <div
    class="card"
    :class="route.path === '/' ? 'home' : 'all-project'"

  >
  <router-link :to="'work/'+ project.id">
    <div
      class="card-image"
      @mouseover="store.isHoverProject = true"
      @mouseout="store.isHoverProject = false"
      @click="store.isHoverProject = false"
    >  
      <img :src="require(`@/assets/${project.image}.png`)" alt="" srcset="" />
    </div>
  </router-link>
    <div class="description">
      <h2>{{ project.title }}</h2>
      <div
        class="project-techno-tag"
        v-for="techno in project.languages"
        :key="techno.name" 
      >
        <h3>
          {{ techno.name }}
        </h3>
      </div>
      <h4>{{ project.description }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Project from '../types/project'
import { useDataStore } from "../store/main.js";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";


export default defineComponent({
  props: {
    project: {
      required: true,
      type: Object as PropType<Project>,
    },
  },
  components: {
    RouterLink
  },
  setup() {
    const store = useDataStore();
    const route = useRoute();

const id: number = Array.isArray(route.params.id)
  ? parseInt(route.params.id[0])
  : parseInt(route.params.id);
    return { store, route, id };
  },
});
</script>
<style lang="scss">
@import "../scss/main.scss";
.card {
  &.home {
    max-width: 25vw;
  }
  &.all-project {
    height: 100vh;
    justify-content: space-around;

    .card-image {
      border-radius: 20px;
      img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        border-radius: 25px;
      }
    }
  }
  h2 {
    font-size: 3rem;
    color: $primary-color;
    text-transform: capitalize;
    margin: 10px 0;
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

  h4 {
    color: $primary-color;
    font-size: 0.8rem;
    max-width: 80%;
    margin: 0 auto;
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