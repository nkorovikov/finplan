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
        <v-btn-wrapped icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn-wrapped>
      </v-card-actions>
    </v-card>
    <br />
    <v-card class="mx-auto">
      <v-card-text>{{ $t("about.add-to-homescreen-hint") }}</v-card-text>
    </v-card>
    <v-bottom-sheet hide-overlay v-model="sheet">
      <v-sheet class="text-center pa-4">
        <v-icon x-large>mdi-alien</v-icon>
        <div class="my-3">
          {{ $t("about.inst-subscribe") }}
        </div>
      </v-sheet>
    </v-bottom-sheet>
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
import Emitter from "@/components/wrappers/Emitter";
import { eventBus } from "@/main";

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
    VBtnWrapped: Emitter(VBtn, { name: "instagram", data: {} }),
  },
})
export default class About extends Vue {
  private sheet = false;
  created() {
    eventBus.$on("instagram", async () => {
      this.sheet = true;
      await this.timeout(2000);
      this.sheet = false;
      location.href = "https://www.instagram.com/inattentive_prog/";
    });
  }

  private timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
</script>
