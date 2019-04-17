<template>
  <div>
    <img :src="speaker.avatarURL" style="width:50%;height:50%;">
    <p>{{speaker.lastName}} {{speaker.firstName}}</p>
  </div>
</template>

<script>
export default {
  name: "Speaker",
  props: {
    speaker: Object
  }
};
</script>
