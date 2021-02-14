<template>
  <div>
    <nav-bar
      :back-button="{
        show: true,
        to: 'CategoriesShow',
        params: { id: $route.params.id },
      }"
    />

    <sub-category-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import FormBuilder from "../library/builders/FormBuilder";
import FormDirector from "../library/builders/FormDirector";

@Component({
  components: {
    NavBar,
    SubCategoryForm: new FormDirector(new FormBuilder()).makeSubCategoryForm(),
  },
})
export default class SubCategoriesCreate extends Vue {}
</script>
