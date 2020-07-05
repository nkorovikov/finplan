<template>
  <div id="app">
    <public-layout>
      <router-view />
    </public-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PublicLayout from "./layouts/PublicLayout.vue";

@Component({
  components: {
    PublicLayout
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
