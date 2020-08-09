<template>
  <v-card color="#00E5FF" dark class="pl-2 pt-3 pr-2" v-if="barData.labels.length">
      <h3>{{ $t('report.by-categories') }}</h3>
      <v-container>
        <by-categories-donut :chartdata="barData" :options="barOptions" />
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

  @expenses.Getter
  public sortedByCreatedAt!: Array<Expense>;

  @categories.Getter
  public sortedById!: Array<Category>;

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