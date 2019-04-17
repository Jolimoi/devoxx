<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{info}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get("https://cfp.devoxx.fr/api/conferences/DevoxxFR2019/speakers")
      .then(response => (this.info = response));
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
