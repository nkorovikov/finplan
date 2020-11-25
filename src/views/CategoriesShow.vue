<template>
  <div>
    <nav-bar
      :back-button="{
        show: true,
        to: 'Categories',
      }"
    />
    <i class="material-icons mr-1">{{ category.icon }}</i>
    <span style="vertical-align: super;">
      {{ category.name }}
    </span>
    <v-btn
      :to="{ name: 'CategoriesUpdate', params: { id: $route.params.id } }"
      outlined
      block
      class="mb-1"
    >
      <i class="material-icons mr-1">create</i>Update
    </v-btn>
    <v-btn
      v-if="!sortedById.find((e) => e.categoryId === $route.params.id)"
      @click.prevent="deleteHandler($route.params.id)"
      outlined
      block
    >
      <i class="material-icons mr-1">delete</i>Delete
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import { VBtn } from "vuetify/lib";
import { namespace } from "vuex-class";
import Category from "../models/Category";
import Expense from "@/models/Expense";

const categories = namespace("Categories");
const expenses = namespace("Expenses");

@Component({
  components: {
    NavBar,
    VBtn,
  },
})
export default class CategoriesShow extends Vue {
  private category: Category = new Category(0, "", 1, "");

  @expenses.Getter
  public sortedById!: Array<Expense>;

  @categories.Action
  findById!: (id: number) => Category;

  public async mounted() {
    this.category = await this.findById(Number(this.$route.params.id));
  }

  @categories.Action
  deleteCategory!: (id: number) => void;

  public deleteHandler(id: number): void {
    this.deleteCategory(id);
    this.$router.push({ name: "Categories" });
  }
}
</script>
