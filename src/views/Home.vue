<template>
  <div class="container">
    <v-text-field :append-icon="icon" outlined @click:append="changeType" v-model.number="sum" />
    <v-container>
      <v-row v-for="(i) in Math.ceil(categories.length / 3)" :key="i" no-gutters>
        <v-col
          v-for="(category) in categories.slice((i - 1) * 3, (i - 1) * 3 + 3)"
          :key="category.id"
          @click.prevent="saveExpenseHandler(category.id)"
          
        >
          <v-card class="pa-4" tile outlined>
            <i class="material-icons">{{ category.cssClass }}</i>
            <span style="vertical-align: super;">{{ category.name }}</span>
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
  private icon = "mdi-plus";

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

  public changeType(): void {
    if (this.icon === "mdi-plus") {
      this.icon = "mdi-minus";
      return;
    }
    this.icon = "mdi-plus";
  }

  public saveExpenseHandler(categoryId: number): void {
    // @TODO validation

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