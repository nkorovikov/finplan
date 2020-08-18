<template>
  <v-card color="#00E5FF" dark class="pl-2 pt-3 pr-2">
    <h3>{{ $t('report.by-categories') }}</h3>
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
        <v-btn text color="primary" @click="$refs.menu.save(byCategoriesDateFilter)">OK</v-btn>
      </v-date-picker>
    </v-menu>
    <v-container>
      <by-categories-donut :chart-data="barData" :options="barOptions" />
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ByCategoriesDonut from "./ByCategoriesDonut.vue";
import Expense from "@/models/Expense";
import Category from "@/models/Category";

const expenses = namespace("Expenses");
const categories = namespace("Categories");

@Component({
  components: { ByCategoriesDonut }
})
export default class ByCategories extends Vue {
  private barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 14,
        fontStyle: "bold"
      }
    }
  };

  private byCategoriesDateFilter: Array<string> = [];
  private menu = false;

  @expenses.Getter
  public sortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedById!: Array<Category>;

  get barData(): any {
    // @TODO interfaces
    const labels: any = [];
    const data: any = [];
    const dateRange = this.byCategoriesDateFilter;
    [...this.sortedById].forEach((c: Category) => {
      const expenses = [...this.sortedByCreatedAt].filter(
        (expense: Expense) => {
          if (expense.getCategoryId() !== c.getId()) {
            return false;
          }

          if (dateRange.length === 0 || dateRange.length === 1) {
            return true;
          }

          const from = new Date(
            new Date(dateRange[0]).toLocaleString("en-EN", {
              timeZone: "UTC"
            })
          ).getTime();

          const to = new Date(
            new Date(dateRange[1]).toLocaleString("en-EN", {
              timeZone: "UTC"
            })
          ).getTime();

          if (
            expense.getCreatedAt() >= from &&
            expense.getCreatedAt() <= to
          ) {
            return true;
          }

          return false;
        }
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
          borderColor: "#00E5FF",
          backgroundColor: [
            "#FFD0B0",
            "#FFC0A0",
            "#FFB090",
            "#FFA080",
            "#FF9070",
            "#FF8060",
            "#FF7050",
            "#FF6040"
          ],
          data: data
        }
      ]
    };
  }
}
</script>