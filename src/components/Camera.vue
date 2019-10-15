<template>
  <main id="camera">
    <!-- Camera sensor -->
    <canvas ref="sensor" id="camera--sensor"></canvas>
    <!-- Camera view -->
    <video id="camera--view" ref="view" autoplay playsinline></video>
    <!-- Camera output -->
    <img src="//:0" alt id="camera--output" ref="output">
    <!-- Camera trigger -->
    <button id="camera--trigger" @click='takePicture'>Prendre une photo</button>
  </main>
</template>

<script>
export default {
  name: "Camera",
  data() {
    return {
      constraints: { video: { facingMode: "user" }, audio: false }
    };
  },
  mounted() {
    let view = this.$refs.view
    navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then(function(stream) {
        let track = stream.getTracks()[0];
        view.srcObject = stream;
      })
      .catch(function(error) {
        console.error("Oops. Something is broken.", error);
      });
  },
  methods: {
    takePicture() {

      let cameraSensor = this.$refs.sensor;
      let cameraOutput = this.$refs.output;
      let cameraView = this.$refs.view;

      cameraSensor.width = cameraView.videoWidth;
      cameraSensor.height = cameraView.videoHeight;
      cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
      cameraOutput.src = cameraSensor.toDataURL("image/webp");
      cameraOutput.classList.add("taken");
    }
  }
};
</script>

<style scoped>
#camera, #camera--view, #camera--sensor, #camera--output{
    position: fixed;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
#camera--view, #camera--sensor, #camera--output{
    transform: scaleX(-1);
    filter: FlipH;
}
#camera--trigger{
    width: 200px;
    background-color: black;
    color: white;
    font-size: 16px;
    border-radius: 30px;
    border: none;
    padding: 15px 20px;
    text-align: center;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
    position: fixed;
    bottom: 30px;
    left: calc(50% - 100px);
}
.taken{
    height: 100px!important;
    width: 100px!important;
    transition: all 0.5s ease-in;
    border: solid 3px white;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
    top: 20px;
    right: 20px;
    z-index: 2;
}
</style>

