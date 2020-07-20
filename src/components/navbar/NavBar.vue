<template>
  <v-app-bar dark dense flat app>
    <v-btn icon v-if="backButton.show" :to="{ name: backButton.to}">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon v-if="$route.name === 'Home'" :to="{ name: 'Settings'}">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IBackButton from "@/props/IBackButton.ts";

@Component
export default class NavBar extends Vue {
  @Prop({
    default: (): IBackButton => {
      return {
        show: false,
        to: ""
      };
    }
  })
  readonly backButton!: IBackButton;
  mounted() {
    console.log(this.$route);
  }
}
</script>