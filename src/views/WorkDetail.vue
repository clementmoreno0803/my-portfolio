<template>
  <div class="container">
<h3>{{ currentProject[0].title }}</h3>
<h4>{{ currentProject[0].description }}</h4>
  </div>
</template>

<script lang="ts">
import { useDataStore } from "@/store/main";
import { defineComponent,
//  PropType,
 computed,
 onMounted,
  } from "vue";
import { useRoute } from "vue-router";
// import Project from "../types/project";

export default defineComponent({
  props: {
    // project: {
    //   required: true,
    //   type: Object as PropType<Project>,
    // },
    // index: {
    //   required: true,
    //   type: Number,
    // }
  },
  setup() {
    const store = useDataStore();
    const route = useRoute();
// Convertissez route.params.id en un entier en utilisant parseInt
  onMounted( () => {
      store.getDataFromFirebase();

  })
const projectId = computed(() => {
 return  Array.isArray(route.params.id)
  ? parseInt(route.params.id[0])
  : parseInt(route.params.id);
})
const currentProject = computed(() => {
      return  store.projects.filter(project => project.id === projectId.value)
})

    return { store, route,
    currentProject,
      };
  },
});
</script>

<style lang="scss">
</style>