<template>
  <div>
    <router-link :to="{name: 'Categories'}" tag="button">
      <i class="material-icons">arrow_back</i>
      Back
    </router-link>
    <div>
      <div>
        <input v-model.trim="category.name" />
      </div>
      <div>
        <select v-model.number="category.type">
          <option value="1">Income</option>
          <option value="2">Outcome</option>
        </select>
      </div>
      <div>
        <select v-model="category.cssClass">
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
export default class CategoriesUpdate extends Vue {
  private category: Category = new Category(0, "", 1, "");

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