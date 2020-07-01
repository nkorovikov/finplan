<template>
  <main>
    <nav-bar />
    <section class="content">
      <slot></slot>
    </section>
    <footer></footer>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";

@Component({
  components: {
    NavBar
  }
})
export default class PublicLayout extends Vue {}
</script>

<style lang="sass" scoped>
@import "./public-layout.scss"
</style>