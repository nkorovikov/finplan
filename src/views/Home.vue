<template>
  <div>
    <div>
      <input type="number" v-model.number="sum" />
      <input v-model.trim="category" />
      <button @click.prevent="saveExpenseHandler">Save</button>
    </div>
    <div>
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
    <button @click.prevent="refreshPage">Update</button>
    <a href="#">Categories</a>
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
export default class Home extends Vue {
  private sum = 0;
  private category = "";
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

  @expenses.Getter
  public sortedById!: Array<Expense>;

  @expenses.Action
  saveExpense!: (expense: Expense) => void;

  @expenses.Action
  deleteExpense!: (id: number) => void;

  get expencesSum(): number {
    let sum = 0;
    this.sortedByCreatedAt.forEach((expence: Expense) => {
      sum = sum + expence.getSum();
    });

    return sum;
  }

  public saveExpenseHandler(): void {
    // @TODO validation

    const lastId: number = this.sortedById.length
      ? this.sortedById[this.sortedById.length - 1].getId()
      : 0;

    this.saveExpense(
      new Expense(lastId + 1, this.sum, this.category, new Date().getTime())
    );

    this.sum = 0;
    this.category = "";
  }

  public deleteHandler(id: number): void {
    this.deleteExpense(id);
  }

  public refreshPage(): void {
    window.location.reload(true);
  }
}
</script>

<style lang="scss" scoped>
</style>