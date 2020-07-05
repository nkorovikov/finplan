<template>
  <div>
      <router-link :to="{name: 'Home'}" tag="button">
          <i class="material-icons">arrow_back</i>
          Back
      </router-link>
    <table class="table">
      <thead>
        <tr>
          <th class>Date</th>
          <th class>Category</th>
          <th class>Sum</th>
        </tr>
      </thead>

      <tbody class="overflow-scroll">
        <tr v-for="(expence, index) in sortedByCreatedAt" :key="index">
          <td class>{{ new Date(expence.createdAt).toLocaleString('ru-RU', dateFormatOptions) }}</td>
          <td class>{{ expence.category }}</td>
          <td class>{{ expence.sum }}</td>
          <td class>
            <button @click.prevent="deleteHandler(expence.id)">x</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <td class></td>
        <td class></td>
        <td class>{{ expencesSum }}</td>
        <td class></td>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Expense from "../models/Expense";

const expenses = namespace("Expenses");

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