<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
       <p v-for="info in infos" :key="info.uuid">
     {{info.lastName}} {{info.firstName}}
     <img :src="info.avatarURL" style="width:50%;height:50%;">
   </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      infos: null
    };
  },
  mounted() {
    axios
      .get("https://cfp.devoxx.fr/api/conferences/DevoxxFR2019/speakers")
      .then(response => (this.infos = response.data));
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
