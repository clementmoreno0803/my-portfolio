<template>
  <div class="main">
    <section class="section-1">
        <h1>Ceci est un GROS Titre ..</h1>
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"
        alt=""
      />
      
    </section>
  </div>
</template>

// <script lang="ts">
import { defineComponent, onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default defineComponent({
  setup() {
    gsap.registerPlugin(ScrollTrigger);
    onMounted(() => {
      const sectionOneTitle = document.querySelector(".section-1-title");
      // gsap.set(targetElement1, {scale:0.7})
      const tl = gsap.timeline();
      tl.to(".section-1", {
        opacity: 1,
        duration: 0.2,
        width: "100%",
        top: 0,
        transform: "translateY(0)",
        scrollTrigger: {
          // trigger: '.section-1 img',
          // markers: true,
          start: "center center",
          end: "+=400",
          scrub: true,
          pin: ".section-1",
          pinSpacing: false,
        },
      });
      tl.to(".section-2", {
        opacity: 0.4,
        duration: 4,
        width: "50%",
        height: "",
        // transform: 'translateY(0)',
        scrollTrigger: {
          // trigger: '.section-1 img',
          // markers: true,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: ".section-2 img",
        },
      });
      tl.to(sectionOneTitle, {
        opacity: 1,
        scale: 1,
        duration: 3,
        scrollTrigger: {
          // markers: true,
          start: "center center",
          toggleActions: "restart pause restart restart",
          scrub: true,
          end: "+=3000",
        },
      });
      return { tl };
    });
  },
});
</script>


<style>
.section-1 {
  position: relative;
  background: red;
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
  opacity: 0.6;
  transform: translateY(75vh);
}
.section-1-title {
  opacity: 0;
}
.section-1 img {
  opacity: 0.2;
  width: 60%;
  position: relative;
}
.section-2 {
    background: green;
  position: relative;
  transform: translateY(50%);
}
.section-2 img {
  opacity: 1;
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
