<template>
  <div>
    <nav-bar
      :back-button="{
        show: true,
        to: 'Categories',
      }"
    />
    <v-text-field
      :label="$t('categories.title')"
      outlined
      v-model.trim="name"
    />
    <v-select
      v-model="icon"
      :items="icons"
      :label="$t('categories.icon')"
      outlined
    >
      <template v-slot:item="{ item }">
        <div v-html="item.text" />
      </template>
      <template v-slot:selection="{ item }">
        <div v-html="item.text" />
      </template>
    </v-select>
    <v-radio-group v-model.number="type" row>
      <v-radio :label="$t('categories.income')" :value="1"></v-radio>
      <v-radio :label="$t('categories.outcome')" :value="2"></v-radio>
    </v-radio-group>
    <div>
      <v-btn outlined @click.prevent="saveCategoryHandler">{{
        $t("categories.create")
      }}</v-btn>
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
import { VTextField, VSelect, VRadioGroup, VRadio, VBtn } from "vuetify/lib";

const categories = namespace("Categories");

@Component({
  components: {
    NavBar,
    VTextField,
    VSelect,
    VRadioGroup,
    VRadio,
    VBtn,
  },
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
