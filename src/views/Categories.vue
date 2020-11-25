<template>
  <div>
    <nav-bar
      :back-button="{
        show: true,
        to: 'Home',
      }"
    />
    <category-listing />
    <v-btn block outlined :to="{ name: 'CategoriesCreate' }">
      <i class="material-icons">add</i>
      {{ $t("categories.create") }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import { VBtn } from "vuetify/lib";
import ListingDirector from "@/library/builders/ListingDirector";
import ListingBuilder from "@/library/builders/ListingBuilder";

@Component({
  components: {
    NavBar,
    VBtn,
    CategoryListing: new ListingDirector(
      new ListingBuilder()
    ).makeCategoryListing(),
  },
})
export default class Categories extends Vue {}
</script>
