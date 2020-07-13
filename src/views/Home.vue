<template>
  <div>
    <v-text-field :append-icon="icon" outlined @click:append="changeType" v-model.number="sum" />
    <v-container v-if="thereAreNoCategories">
      There are no categories.
      <router-link tag="a" :to="{name: 'CategoriesCreate'}">Create</router-link>
    </v-container>
    <v-container v-else class="overflower-categories">
      <v-row v-for="(i) in Math.ceil(categories.length / 2)" :key="i" no-gutters>
        <v-col
          v-for="(category) in categories.slice((i - 1) * 2, (i - 1) * 2 + 2)"
          :key="category.id"
          @click.prevent="saveExpenseHandler(category.id)"
        >
          <v-card class="pa-4" tile outlined>
            <div>
              <i class="material-icons">{{ category.icon }}</i>
            </div>
            <div>
              <span style="vertical-align: super;">{{ category.name }}</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Expense from "../models/Expense";
import Category from "../models/Category";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: {}
})
export default class Home extends Vue {
  private sum = 0;
  private icon = "mdi-minus";

  @expenses.Getter
  public sortedById!: Array<Expense>;

  @categories.Getter
  public incomes!: Array<Category>;

  @categories.Getter
  public outcomes!: Array<Category>;

  @expenses.Action
  saveExpense!: (expense: Expense) => void;

  get categories(): Array<Category> {
    if (this.icon === "mdi-plus") {
      return this.incomes;
    }
    return this.outcomes;
  }

  get thereAreNoCategories(): boolean {
    return this.categories.length === 0;
  }

  public changeType(): void {
    if (this.icon === "mdi-plus") {
      this.icon = "mdi-minus";
      return;
    }
    this.icon = "mdi-plus";
  }

  public saveExpenseHandler(categoryId: number): void {
    this.sum = Number(this.sum);

    if (this.sum < 0 || this.sum === 0) {
      return;
    }

    const lastId: number = this.sortedById.length
      ? this.sortedById[this.sortedById.length - 1].getId()
      : 0;

    this.saveExpense(
      new Expense(lastId + 1, this.sum, categoryId, new Date().getTime())
    );

    this.sum = 0;
  }
}
</script>

<style lang="scss" scoped>
.overflower-categories {
  height: 400px;
  overflow-y: scroll;
}
</style>