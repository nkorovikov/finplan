<template>
  <div class="container">
    <v-btn @click.prevent="changeType" outlined>{{ types[type] }}</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>
              <i class="material-icons">{{ category.cssClass }}</i>
              <span style="vertical-align: super;">{{ category.name }}</span>
            </td>
            <td class="text-right">
              <router-link
                :to="{name: 'CategoriesUpdate', params: { id: category.id }}"
                tag="i"
                class="material-icons"
              >create</router-link>
              <i
                v-if="! sortedById.find(e => e.categoryId === category.id)"
                @click.prevent="deleteHandler(category.id)"
                class="material-icons"
              >delete</i>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn outlined :to="{name: 'CategoriesCreate'}">
      <i class="material-icons">add</i>
      Create
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Category from "../models/Category";

const categories = namespace("Categories");
const expenses = namespace("Expenses");

@Component({
  components: {}
})
export default class Categories extends Vue {
  private type = 1;
  private types = {
    1: "Income",
    2: "Outcome"
  };

  @expenses.Getter
  public sortedById!: Array<Category>;

  @categories.Getter
  public incomes!: Array<Category>;

  @categories.Getter
  public outcomes!: Array<Category>;

  @categories.Action
  deleteCategory!: (id: number) => void;

  get categories(): Array<Category> {
    if (this.type === 1) {
      return this.incomes;
    }
    return this.outcomes;
  }

  public changeType(): void {
    if (this.type === 1) {
      this.type = 2;
      return;
    }
    this.type = 1;
  }

  public deleteHandler(id: number): void {
    this.deleteCategory(id);
  }
}
</script>