<template>
  <div>
    <router-link :to="{name: 'Categories'}" tag="button">
      <i class="material-icons">arrow_back</i>
      Back
    </router-link>
    <div>
      <div>
        <input v-model.trim="name" />
      </div>
      <div>
        <select v-model.number="type">
          <option value="1">Income</option>
          <option value="2">Outcome</option>
        </select>
      </div>
      <div>
        <select v-model="cssClass">
          <option value="shopping_cart">shopping_cart</option>
          <option value="account_balance">account_balance</option>
        </select>
      </div>
      <div>
        <button @click.prevent="saveCategoryHandler">Save</button>
      </div>
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