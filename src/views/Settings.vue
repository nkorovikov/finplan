<template>
  <div>
    <nav-bar
      :back-button="{
        show: true,
        to: 'Home',
      }"
    />
    <v-card>
      <v-list dense nav>
        <v-list-item @click.prevent="reload">
          <v-list-item-icon>
            <v-icon>mdi-update</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t("settings.update") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="setting in settings"
          :to="{ name: setting.to }"
          :key="setting.to"
        >
          <v-list-item-icon>
            <v-icon>{{ setting.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t(setting.titleSlug) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import {
  VCard,
  VList,
  VListItem,
  VListItemIcon,
  VListItemContent,
  VListItemTitle,
  VIcon,
} from "vuetify/lib";

@Component({
  components: {
    NavBar,
    VCard,
    VList,
    VListItem,
    VListItemIcon,
    VListItemContent,
    VListItemTitle,
    VIcon,
  },
})
export default class Settings extends Vue {
  private settings = [
    {
      to: "About",
      icon: "mdi-information-outline",
      titleSlug: "settings.about",
    },
    {
      to: "Profile",
      icon: "mdi-account",
      titleSlug: "settings.profile",
    },
    {
      to: "FinplanCloud",
      icon: "mdi-image-filter-drama",
      titleSlug: "settings.cloud",
    },
  ];

  public reload() {
    this.$router.push({ name: "Home" });
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  }
}
</script>
