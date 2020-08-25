<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-btn outlined block :to="{ name: 'History' }">
          <v-icon>mdi-history</v-icon>
          <v-spacer />
          {{ $t("menu.history") }}
        </v-btn>
        <br />
        <last-week-graph :data="lastWeek" />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <budget
          :daily-budget="dailyBudget"
          :weekly-budget="weeklyBudget"
          :monthly-budget="monthlyBudget"
        />
      </v-col>
      <v-col cols="12" md="12" lg="4">
        <by-categories />
      </v-col>
    </v-row>
  </v-container>
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
import { VContainer, VRow, VCol, VBtn, VIcon, VSpacer } from "vuetify/lib";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: {
    LastWeekGraph,
    Budget,
    ByCategories,
    VContainer,
    VRow,
    VCol,
    VBtn,
    VIcon,
    VSpacer,
  },
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
    return this.reportService.calculateSumByCurrentWeek(
      this.sortedById,
      this.sortedByCreatedAt
    );
  }

  get monthlyBudget(): number {
    return this.reportService.calculateSumByCurrentMonth(
      this.sortedById,
      this.sortedByCreatedAt
    );
  }
}
</script>
