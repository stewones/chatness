<template>
  <div>
    <img
      class="rounded-xl cursor-pointer"
      src="/images/mkt/video-reel-play.png"
      :style="hover ? imgStyleHovered : imgStyleNonHovered"
      v-on:click="show()"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    />
    <div
      v-if="open"
      v-on:click="hide()"
      class="fixed inset-0 overflow-y-auto ease-out duration-300 opacity-100"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style="z-index: 999"
    >
      <div
        class="flex items-center justify-center min-h-screen text-center block p-0"
      >
        <div
          class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden inline-block align-middle h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="relative inline-block align-middle bg-gray-900 rounded-lg text-center overflow-hidden shadow-xl transform transition-all align-middle sm:max-w-2xl sm:w-full"
        >
          <div>
            <video
              autoplay="false"
              name="media"
              v-on:click="playing ? pause() : play()"
            >
              <source
                src="/videos/chatness.mp4"
                type="video/mp4"
                autoplay="false"
                controls="false"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.prose video {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
<script>
export default {
  data() {
    return {
      playing: false,
      open: false,
      hover: false,
      imgStyleNonHovered: { filter: "grayscale(1)" },
      imgStyleHovered: { filter: "grayscale(0)" },
    };
  },
  methods: {
    play() {
      const video = document.querySelector("video");
      video.play();
      this.playing = true;
    },
    pause() {
      const video = document.querySelector("video");
      video.pause();
      this.playing = false;
    },
    show() {
      this.open = true;
    },
    hide() {
      this.open = false;
    },
  },
  // mounted() {
  //   if (process.client) {
  //     const video = document.querySelector("video");
  //     function removeControls(video) {
  //       video.removeAttribute("controls");
  //     }
  //     window.onload = removeControls(video);
  //   }
  // },
};
</script>
