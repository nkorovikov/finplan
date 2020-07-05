<template>
  <main>
    <nav-bar />
    <section class="content">
      <slot></slot>
    </section>
    <footer>
      <a @click.prevent="refreshPage">Update app</a>
    </footer>
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
export default class PublicLayout extends Vue {
  public refreshPage(): void {
    window.location.reload(true);
  }
}
</script>

<style lang="scss" scoped>
@import "./public-layout.scss";
</style>