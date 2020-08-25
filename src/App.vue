<template>
  <div id="app">
    <v-app>
      <public-layout>
        <router-view />
      </public-layout>
    </v-app>
  </div>
</template>

<script lang="ts">
import { VApp } from "vuetify/lib";
import { Component, Vue } from "vue-property-decorator";
import PublicLayout from "./layouts/PublicLayout.vue";

@Component({
  components: {
    PublicLayout,
    VApp,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~material-design-icons/iconfont/material-icons.css";
</style>
