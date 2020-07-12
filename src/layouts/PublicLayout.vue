<template>
  <main>
    <nav-bar />
    <section class="content">
      <slot></slot>
    </section>
    <v-bottom-navigation absolute>
      <v-btn :to="{ name: 'History'}">
        <span>History</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn exact :to="{ name: 'Home'}">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Categories'}">
        <span>Categories</span>
        <v-icon>mdi-table-of-contents</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Settings'}">
        <span>Setings</span>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-bottom-navigation>
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