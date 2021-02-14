<template>
  <main>
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
    <v-bottom-navigation app ansolute grow>
      <v-btn :to="{ name: 'Report' }" height="56px">
        <span>{{ $t("menu.report") }}</span>
        <v-icon>mdi-chart-donut</v-icon>
      </v-btn>

      <v-btn exact :to="{ name: 'Home' }" height="56px">
        <span>{{ $t("menu.home") }}</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn exact :to="{ name: 'Categories' }" height="56px">
        <span>{{ $t("home.categories") }}</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { VMain, VContainer, VBottomNavigation, VBtn, VIcon } from "vuetify/lib";

@Component({
  components: {
    VMain,
    VContainer,
    VBottomNavigation,
    VBtn,
    VIcon,
  },
})
export default class PublicLayout extends Vue {}
</script>
