<template>
  <div>
    <nav-bar
      :back-button="{
        show: true,
        to: 'Settings',
      }"
    />
    <v-card class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey">
          <v-img :src="'/finplan/img/icons/android-chrome-192x192.png'"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">Finplan</v-list-item-title>
          <v-list-item-subtitle>by nkorovikov</v-list-item-subtitle>
          <v-list-item-subtitle>optimized</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>{{ $t("about.control-finances") }}</v-card-text>

      <v-card-actions>
        <v-btn
          icon
          href="https://github.com/nkorovikov/finplan"
          target="_blank"
        >
          <v-icon to>mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          href="https://www.instagram.com/inattentive_prog/"
          target="_blank"
        >
          <v-icon to>mdi-instagram</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <br />
    <v-card class="mx-auto">
      <v-card-text>{{ $t("about.add-to-homescreen-hint") }}</v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import {
  VCard,
  VCardText,
  VCardActions,
  VListItem,
  VListItemAvatar,
  VListItemIcon,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VIcon,
  VImg,
  VBtn,
} from "vuetify/lib";

@Component({
  components: {
    NavBar,
    VCard,
    VCardText,
    VCardActions,
    VListItem,
    VListItemAvatar,
    VListItemIcon,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VIcon,
    VImg,
    VBtn,
  },
})
export default class About extends Vue {}
</script>
