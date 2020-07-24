<template>
  <div>
    <v-tabs centered grow>
      <v-tab>{{ $t('report.outcomes') }}</v-tab>
      <v-tab disabled>{{ $t('report.incomes') }}</v-tab>
    </v-tabs>
    <br />
    <last-week-graph :data="lastWeek" />
    <br />
    <budget
      :daily-budget="dailyBudget"
      :weekly-budget="weeklyBudget"
      :monthly-budget="monthlyBudget"
    />
    <h3>{{ $t('report.by-categories') }}</h3>
    <v-container>
      <by-categories :chartdata="barData" :options="barOptions" />
    </v-container>
    <v-btn outlined block :to="{ name: 'History'}">
      <v-icon>mdi-history</v-icon>
      <v-spacer />
      {{ $t('menu.history') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Expense from "../models/Expense";
import Category from "../models/Category";
import LastWeekGraph from "../components/report/LastWeekGraph.vue";
import Budget from "../components/report/Budget.vue";
import ByCategories from "../components/report/ByCategories.vue";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: { LastWeekGraph, Budget, ByCategories }
})
export default class Report extends Vue {
  private barOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  @expenses.Getter
  public sortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedById!: Array<Category>;

  @expenses.Action
  getByCategoryId!: (id: number) => Array<Expense>;

  get barData(): any {
    // @TODO interfaces
    const labels: any = [];
    const data: any = [];
    [...this.sortedById].forEach((c: Category) => {
      const expenses = [...this.sortedByCreatedAt].filter(
        (expense: Expense) => expense.getCategoryId() === c.getId()
      );
      let sum = 0;
      expenses.forEach((e: Expense) => {
        sum += e.getSum();
      });

      if (sum === 0) {
        return;
      }

      labels.push(c.getName());
      data.push(sum);
    });
    return {
      labels: labels,
      datasets: [
        {
          backgroundColor: [
            "#3D5AFE",
            "#EEFF41",
            "#004D40",
            "#4DB6AC",
            "#40C4FF",
            "#7C4DFF"
          ],
          data: data
        }
      ]
    };
  }

  get lastWeek(): Array<number> {
    let startOfNow = new Date().setHours(0, 0, 0, 0);
    let endOfNow = new Date().setHours(23, 59, 59, 59);

    const categories = this.sortedById;

    const result: Array<number> = [];

    [...Array(7).keys()].forEach(() => {
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

    return result.reverse();
  }

  get dailyBudget(): number {
    return this.calculateSumByDayCount(1);
  }

  get weeklyBudget(): number {
    return this.calculateSumByDayCount(7);
  }

  get monthlyBudget(): number {
    return this.calculateSumByDayCount(31);
  }

  private calculateSumByDayCount(daysCount: number): number {
    let startOfNow = new Date().setHours(0, 0, 0, 0);
    let endOfNow = new Date().setHours(23, 59, 59, 59);

    const categories = this.sortedById;

    let result = 0;

    [...Array(daysCount).keys()].forEach(() => {
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
          result += a.getSum();
        });
      startOfNow = new Date(startOfNow).setDate(
        new Date(startOfNow).getDate() - 1
      );
      endOfNow = new Date(endOfNow).setDate(new Date(endOfNow).getDate() - 1);
    });

    return result;
  }
}
</script>