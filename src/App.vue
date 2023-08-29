<template>
  <!-- <div class="container"> -->
    <Navigation />
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@/layout/TheHeader.vue'

export default defineComponent({
  components: {
    Navigation
  },
})
</script>


<style lang="scss">
@import "./scss/main.scss";

* {
  font-family: $principal-font;
}
body {
  margin: 0;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $background-color;
  cursor: none;
}

.container {
width: calc(100% - 160px);
max-width: 1280px;
margin: 0 auto;
}

</style>