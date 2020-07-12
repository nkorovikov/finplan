<template>
  <div class="container">
    <v-text-field label="Name" outlined v-model.trim="name" />
    <v-select v-model.number="type" :items="types" label="Type" outlined></v-select>
    <v-select v-model="cssClass" :items="cssClasses" label="Icon" outlined>
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
export default class CategoriesCreate extends Vue {
  private name = "";
  private type = 1;
  private cssClass = "shopping_cart";
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
      new Category(lastId + 1, this.name, this.type, this.cssClass)
    );

    this.name = "";
    this.type = 1;
    this.cssClass = "shopping_cart";

    this.$router.push({ name: "Categories" });
  }
}
</script>