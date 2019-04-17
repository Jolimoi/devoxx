<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Speaker v-for="speaker in speakers" :key="speaker.uuid" :speaker="speaker" />
  </div>
</template>

<script>
import axios from "axios";
import Speaker from "@/components/Speaker"

export default {
  name: "app",
  components: {
    Speaker
  },
  data() {
    return {
      speakers: null
    };
  },
  mounted() {
    axios
      .get("https://cfp.devoxx.fr/api/conferences/DevoxxFR2019/speakers")
      .then(response => (this.speakers = response.data));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
