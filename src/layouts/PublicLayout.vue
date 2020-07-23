<template>
  <main>
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
    <v-bottom-navigation app ansolute grow>
      <v-btn :to="{ name: 'History'}" height="56px">
        <span>{{ $t('menu.history') }}</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn exact :to="{ name: 'Home'}" height="56px">
        <span>{{ $t('menu.home') }}</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class PublicLayout extends Vue {}
</script>