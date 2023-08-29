<template>
  <div class="about">
    <section class="home home-1">
      <h1>A WEBSITE ..</h1>
    </section>
    <section class="home home-2">
      <h2>THAT IT IS ..</h2>
      <div class="progress-bar" :style="{ width: progressBar }"></div>
    </section>
    <section class="home home-4">
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ex
        temporibus natus, reiciendis adipisci quia amet! Minima non quos
        suscipit.
      </h2>
    </section>
    <section class="home home-3">
      <h2>ALL</h2>
    </section>
    <section class="section red"></section>
    <section id="mainContainer">
      <div class="horizontal-wrapper">
        <div class="horizontal-container">
          <div class="panel purple"></div>
          <div class="panel gray"></div>
          <div class="panel green"></div>
        </div>
      </div>
    </section>
    <section class="section green"></section>
  </div>
</template>

// <script lang="ts">
// import { defineComponent, ref, onMounted } from "vue";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default defineComponent({
//   name: "Home",
//   setup() {
//     gsap.registerPlugin(ScrollTrigger);
//     const homeElements = ref<HTMLElement[]>([]);
//     const container = ref<HTMLElement[]>([]);
//     let sliderContainer = ref("sliderContainerRef");
//     let progressWidth = ref(0)

//     onMounted(() => {
//       homeElements.value = gsap.utils.toArray(".home");
//       homeElements.value.forEach((element) => {
//         ScrollTrigger.create({
//           trigger: element,
//           start: "top top",
//           // end: '+=300',
//           pin: true,
//           pinSpacing: false,
//           end: "+=" + 100 * homeElements.value.length + '%',
//           markers: true,
//           scrub: true,
//         });
//       });

//       container.value = gsap.utils.toArray(".panel");
//       gsap.to(".horizontal-container", {
//         xPercent: -(100 * (container.value.length - 1)),
//         scrollTrigger: {
//           trigger: ".horizontal-wrapper",
//           start: "center center",
//           end: "+=" + 100 * container.value.length + "%",
//           pin: "#mainContainer",
//           scrub: 0.5,
//           snap: 1 / (container.value.length - 1),
//           markers: true,
//         },
//       });
//       ScrollTrigger.create({
//         trigger: ".progress-bar",
//         start: "top center",
//         end: "home-4",
//         onUpdate: (self) =>  {progressWidth.value = self.progress; let progressBar = Math.floor(progressWidth.value *100); return progressBar}
//       });
//     });
//     return { sliderContainer };
//   },
// });
// </script>

<style lang="scss" scoped>
h1 {
  font-size: 5rem;
}
section {
  width: 100%;
  height: 100vh;
}
.cards {
  position: relative;
  display: flex;
  justify-content: center;
}
.progress-bar {
  width: 0;
  height: 10px;
  background-color: blue;
  transition: width 0.3s;
}
.home {
  height: 100vh;
}
.home-1 {
  background: red;
}
.home-2 {
  background: rgb(77, 165, 140);
}
.home-3 {
  background: rgb(188, 90, 147);
}
.home-4 {
  height: 50vh;
  background: rgb(211, 133, 82);
}
h1,
h2 {
  margin: 0;
}
.horizontal-wrapper {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.horizontal-container {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.panel {
  width: 100%;
  height: 300px;
  flex: 1 0 100%;
}
.purple {
  background: rgb(211, 133, 82);
}
.gray {
  background: rgb(54, 117, 131);
}
.green {
  background: rgb(36, 109, 28);
}
.blue{
    background: rgb(58, 129, 227);

}
</style>