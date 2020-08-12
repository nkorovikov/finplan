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
    
    <by-categories />
    <br />

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
import ReportService from "@/services/ReportService";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: { LastWeekGraph, Budget, ByCategories }
})
export default class Report extends Vue {
  private reportService = new ReportService();

  @expenses.Getter
  public sortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedById!: Array<Category>;

  @expenses.Action
  getByCategoryId!: (id: number) => Array<Expense>;

  get lastWeek(): Array<number> {
    return this.reportService.calculateLastWeek(
      this.sortedById,
      this.sortedByCreatedAt
    );
  }

  get dailyBudget(): number {
    return this.reportService.calculateSumByDayCount(
      this.sortedById,
      this.sortedByCreatedAt,
      1
    );
  }

  get weeklyBudget(): number {
    return this.reportService.calculateSumByDayCount(
      this.sortedById,
      this.sortedByCreatedAt,
      7
    );
  }

  get monthlyBudget(): number {
    return this.reportService.calculateSumByDayCount(
      this.sortedById,
      this.sortedByCreatedAt,
      31
    );
  }
}
</script>