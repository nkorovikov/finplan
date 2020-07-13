<template>
  <div>
    <v-text-field label="Name" outlined v-model.trim="name" />
    <v-select v-model.number="type" :items="types" label="Type" outlined></v-select>
    <v-select v-model="icon" :items="icons" label="Icon" outlined>
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

const categories = namespace("Categories");

@Component({
  components: {}
})
export default class CategoriesCreate extends Vue {
  private name = "";
  private type = 2;
  private icon = "shopping_cart";
  private types = CategorySelectTypes;
  private icons = CategoryIcons;

  @categories.Getter
  public sortedById!: Array<Category>;

  @categories.Action
  createCategory!: (category: Category) => void;

  public saveCategoryHandler(): void {
    // @TODO validation
    const lastId: number = this.sortedById.length
      ? this.sortedById[this.sortedById.length - 1].getId()
      : 0;

    this.createCategory(
      new Category(lastId + 1, this.name, this.type, this.icon)
    );
    this.name = "";
    this.type = 2;
    this.icon = "shopping_cart";
    this.$router.push({ name: "Categories" });
  }
}
</script>