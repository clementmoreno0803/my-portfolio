<template>
  <div class="container">
    <section class="footer">
      <div
        class="work-together"
        @mouseover="store.isHoveringFooter = true"
        @mouseout="store.isHoveringFooter = false"
      >
        <div class="work-together-title">
          <h2
            @mouseover="store.isHoveringFooterContent = true"
            @mouseout="store.isHoveringFooterContent = false"
          >
            Prêt à travailler ensemble ?
          </h2>
          <a href="mailto:clementmoreno0803@gmail.com" target="blank"
            >Laissez moi un petit Message</a
          >
        </div>
        <div class="work-together-objectifs">
          <p>Objectifs de carrière:</p>
          <p>Apprendre WebGL / ThreeJS</p>
          <p>Devenir Developpeur Créatif</p>
          <p>
            Gagner un Awwwards
            <i class="fa-solid fa-trophy" style="color: #ffffff"></i>
          </p>
        </div>
      </div>
    </section>
    <section class="network">
      <div class="network-icons">
        <ul>
          <li>
            <a href="https://github.com/clementmoreno0803"
              ><i class="fa-brands fa-github" style="color: #ffffff"></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-moreno/"
              ><i class="fa-brands fa-linkedin" style="color: #ffffff"></i
            ></a>
          </li>
        </ul>
        <img src="@/assets/footerPP.svg" alt="" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { useDataStore } from "@/store/main";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useDataStore();

    return { store };
  },
});
</script>


<style lang="scss" >
@import "../scss/main.scss";
.work-together {
  width: calc(100% - 300px);
  padding: 150px;
  background: $primary-color;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .work-together-title {
    display: flex;
    flex-direction: column;
    text-align: left;
    h2 {
      font-size: 3rem;
      color: $white;
      max-width: 30vw;
      text-align: left;
    }
    a {
      font-size: 1rem;
      color: $white;
      text-decoration: none;
      padding-bottom: 5px;
      border-bottom: 1px solid $white;
      width: fit-content;
    }
  }
  p {
    font-size: 0.7rem;
    color: $white;
    text-transform: uppercase;
    text-align: left;
    font-weight: 600;
  }
}
.network {
  display: flex;
  background: $primary-color;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 5px 0;
  .network-icons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;

    ul {
      display: flex;
      gap: 30px;
      align-items: center;
      margin: 0;
      padding: 0;
      li {
        font-size: 2rem;
        list-style: none;
        &::marker {
          display: none;
        }
      }
    }
  }
}
</style>