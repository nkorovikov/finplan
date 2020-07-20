<template>
  <div>
    <nav-bar :back-button="{
      show: true,
      to: 'Categories'
    }" />
    <v-text-field label="Name" outlined v-model.trim="category.name" />
    <v-select v-model.number="category.type" :items="types" label="Type" outlined></v-select>
    <v-select v-model="category.icon" :items="icons" label="Icon" outlined>
      <template v-slot:item="{item}">
        <div v-html="item.text" />
      </template>
      <template v-slot:selection="{item}">
        <div v-html="item.text" />
      </template>
    </v-select>
    <div>
      <v-btn outlined @click.prevent="saveCategoryHandler">Save</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Category from "../models/Category";
import CategoryIcons from "../sets/CategoryIcons";
import CategorySelectTypes from "../sets/CategorySelectTypes";
import NavBar from "@/components/navbar/NavBar.vue";

const categories = namespace("Categories");

@Component({
  components: {
    NavBar
  }
})
export default class CategoriesUpdate extends Vue {
  private category: Category = new Category(0, "", 1, "");
  private types = CategorySelectTypes;
  private icons = CategoryIcons;

  public async mounted() {
    this.category = await this.findById(Number(this.$route.params.id));
  }

  @categories.Action
  updateCategory!: (id: number, category: Category) => void;

  @categories.Action
  findById!: (id: number) => Category;

  public saveCategoryHandler(): void {
    // @TODO validation
    this.updateCategory(this.category.getId(), this.category);
    this.$router.push({ name: "Categories" });
  }
}
</script>