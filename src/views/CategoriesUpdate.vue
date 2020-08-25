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
      v-model.trim="category.name"
    />
    <v-select
      v-model="category.icon"
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
    <v-radio-group v-model.number="category.type" row>
      <v-radio :label="$t('categories.income')" :value="1"></v-radio>
      <v-radio :label="$t('categories.outcome')" :value="2"></v-radio>
    </v-radio-group>
    <div>
      <v-btn outlined @click.prevent="saveCategoryHandler">{{
        $t("categories.save")
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
