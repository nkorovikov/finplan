<template>
  <main>
    <nav-bar />
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
    <v-bottom-navigation app ansolute grow>
      <v-btn :to="{ name: 'History'}" height="56px">
        <span>History</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn exact :to="{ name: 'Home'}" height="56px">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Categories'}" height="56px">
        <span>Categories</span>
        <v-icon>mdi-table-of-contents</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Settings'}" height="56px">
        <span>Setings</span>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";

@Component({
  components: {
    NavBar
  }
})
export default class PublicLayout extends Vue {}
</script>