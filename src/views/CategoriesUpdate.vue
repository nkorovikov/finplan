<template>
  <div class="container">
    <v-text-field label="Name" outlined v-model.trim="category.name" />
    <v-select v-model.number="category.type" :items="types" label="Type" outlined></v-select>
    <v-select v-model="category.cssClass" :items="cssClasses" label="Icon" outlined>
      <template v-slot:item="{item}">
        <div v-html="item.text" />
      </template>
      <template v-slot:selection="{item}">
        <div v-html="item.text" />
      </template>
    </v-select>
    <div>
      <v-btn @click.prevent="saveCategoryHandler">Save</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Category from "../models/Category";

const categories = namespace("Categories");

@Component({
  components: {}
})
export default class CategoriesUpdate extends Vue {
  private category: Category = new Category(0, "", 1, "");
  private types = [
    {
      text: "Income",
      value: 1
    },
    {
      text: "Outcome",
      value: 2
    }
  ];
  private cssClasses = [
    {
      text: "<i class='material-icons'>shopping_cart</i>",
      value: "shopping_cart"
    },
    {
      text: "<i class='material-icons'>account_balance</i>",
      value: "account_balance"
    }
  ];

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