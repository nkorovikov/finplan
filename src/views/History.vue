<template>
  <div>
    <last-week-graph v-if="graphEnabled" :data="lastFiveDays" />
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
import LastWeekGraph from "../components/history/LastWeekGraph.vue";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: { LastWeekGraph }
})
export default class History extends Vue {
  private dateFormatOptions: object = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  @expenses.Getter
  public sortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedById!: Array<Category>;

  @expenses.Action
  deleteExpense!: (id: number) => void;

  get lastFiveDays(): Array<number> {
    let startOfNow = new Date().setHours(0, 0, 0, 0);
    let endOfNow = new Date().setHours(23, 59, 59, 59);

    const categories = this.sortedById;

    const result: Array<number> = [];

    [...Array(5).keys()].forEach(() => {
      let sum = 0;
      this.sortedByCreatedAt
        .filter(a => {
          const isOutcome = categories.find(
            c => a.getCategoryId() === c.getId()
          );
          const isUnderInterval =
            a.getCreatedAt() < endOfNow && a.getCreatedAt() > startOfNow;

          return isOutcome && isOutcome.getType() && isUnderInterval;
        })
        .forEach(a => {
          sum += a.getSum();
        });
      result.push(sum);
      startOfNow = new Date(startOfNow).setDate(
        new Date(startOfNow).getDate() - 1
      );
      endOfNow = new Date(endOfNow).setDate(new Date(endOfNow).getDate() - 1);
    });

    return result.filter(a => a > 0).reverse();
  }

  get graphEnabled(): boolean {
    return this.lastFiveDays.length === 5;
  }

  public deleteHandler(id: number): void {
    this.deleteExpense(id);
  }
}
</script>