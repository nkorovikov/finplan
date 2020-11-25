<script lang="ts">
import { Component, Provide } from "vue-property-decorator";
import BaseProvider from "./BaseProvider.vue";
import { namespace } from "vuex-class";
import Category from "../models/Category";
import ICategory from "@/models/ICategory";
import ICategoryFilter from "@/domain/category/filters/ICategoryFilter";

const categories = namespace("Categories");

@Component({})
export default class CategoryProvider extends BaseProvider {
  @categories.Getter
  public sortedCategoriesById!: Array<Category>;

  @categories.Action
  createCategory!: (category: Category) => void;

  @categories.Action
  updateCategory!: (id: number, category: Category) => void;

  @categories.Action
  findById!: (id: number) => Category;

  @Provide("fetchOrDefault")
  private async fetchOrDefault(id?: number) {
    if (id) {
      return await this.findById(Number(this.$route.params.id));
    }
    return {
      name: "",
      type: 2, // TODO magic number remove
      icon: "shopping_cart",
    };
  }

  @Provide("post")
  private post(category: ICategory) {
    // @TODO validation
    const lastId: number = this.sortedCategoriesById.length
      ? this.sortedCategoriesById[this.sortedCategoriesById.length - 1].getId()
      : 0;

    this.createCategory(
      new Category(lastId + 1, category.name, category.type, category.icon)
    );
    this.$router.push({ name: "Categories" });
  }

  @Provide("put")
  private put(id: number, category: Category) {
    this.updateCategory(category.getId(), category);
    this.$router.push({ name: "Categories" });
  }

  @Provide("fetch")
  private fetch(filters: ICategoryFilter) {
    let categories: Array<Category> = this.sortedCategoriesById;

    if (filters.type) {
      categories = categories.filter(
        (category: Category) => category.getType() === filters.type
      );
    }

    if (filters.name) {
      categories = categories.filter((category: Category) =>
        category
          .getName()
          .toUpperCase()
          .includes(filters.name.toUpperCase())
      );
    }

    return Promise.resolve(categories);
  }
}
</script>
