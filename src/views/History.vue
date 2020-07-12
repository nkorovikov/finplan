<template>
  <div class="container">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Date</th>
            <th class="text-left">Category</th>
            <th class="text-right text-no-wrap">Sum</th>
            <th class="text-right"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(expence, index) in sortedByCreatedAt" :key="index">
            <td
              class="text-left"
            >{{ new Date(expence.createdAt).toLocaleString('ru-RU', dateFormatOptions) }}</td>
            <td class="text-left">{{ sortedById.find(c => expence.categoryId === c.id).name }}</td>
            <td class="text-right text-no-wrap">
              {{sortedById.find(c => expence.categoryId === c.id).type === 1 ? '+' : '-'}}
              {{ expence.sum }}
            </td>
            <td class="text-right">
              <i @click.prevent="deleteHandler(expence.id)" class="material-icons">delete</i>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
export default class History extends Vue {
  private dateFormatOptions: object = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  };

  @expenses.Getter
  public sortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedById!: Array<Category>;

  @expenses.Action
  deleteExpense!: (id: number) => void;

  get expencesSum(): number {
    let sum = 0;
    this.sortedByCreatedAt.forEach((expence: Expense) => {
      sum = sum + expence.getSum();
    });

    return sum;
  }

  public deleteHandler(id: number): void {
    this.deleteExpense(id);
  }
}
</script>