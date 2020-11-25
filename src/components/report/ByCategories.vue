<template>
  <v-card color="#00E5FF" dark class="pl-2 pt-3 pr-2">
    <h3>{{ $t("report.by-categories") }}</h3>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="byCategoriesDateFilter"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="byCategoriesDateFilter"
          prepend-icon="event"
          append-icon="mdi-delete"
          readonly
          v-bind="attrs"
          v-on="on"
          @click:append="byCategoriesDateFilter = []"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="byCategoriesDateFilter"
        first-day-of-week="1"
        range
        no-title
        scrollable
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.menu.save(byCategoriesDateFilter)"
          >OK</v-btn
        >
      </v-date-picker>
    </v-menu>
    <v-container>
      <by-categories-donut :chart-data="barData" :options="barOptions" />
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ByCategoriesDonut from "./ByCategoriesDonut.vue";
import Expense from "@/models/Expense";
import Category from "@/models/Category";
import IChartOption from "@/library/interfaces/IChartOption";
import IChartData from "@/library/interfaces/IChartData";
import ReportService from "@/services/ReportService";
import {
  VCard,
  VMenu,
  VTextField,
  VDatePicker,
  VSpacer,
  VBtn,
  VContainer,
} from "vuetify/lib";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: {
    ByCategoriesDonut,
    VCard,
    VMenu,
    VTextField,
    VDatePicker,
    VSpacer,
    VBtn,
    VContainer,
  },
})
export default class ByCategories extends Vue {
  private reportService = new ReportService();

  private barOptions: IChartOption = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 14,
        fontStyle: "bold",
      },
    },
  };

  private byCategoriesDateFilter: Array<string> = [];
  private menu = false;

  @expenses.Getter
  public descSortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedCategoriesById!: Array<Category>;

  get barData(): IChartData {
    return this.reportService.getByCategoriesChartData(
      this.sortedCategoriesById,
      this.descSortedByCreatedAt,
      this.byCategoriesDateFilter
    );
  }
}
</script>
