<template>
  <div>
    <div>
      <input type="number" v-model.number="sum" />
      <input v-model.trim="category" />
      <button @click.prevent="saveExpence">Save</button>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th class="">Date</th>
            <th class="">Category</th>
            <th class="">Sum</th>
          </tr>
        </thead>

        <tbody class="overflow-scroll">
          <tr v-for="(expence, index) in sortedExpences" :key="index">
            <td
              class=""
            >{{ new Date(expence.date).toLocaleString('ru-RU', dateFormatOptions) }}</td>
            <td class="">{{ expence.category }}</td>
            <td class="">{{ expence.sum }}</td>
            <td class=""><button @click.prevent="remove(index)">x</button></td>
          </tr>
        </tbody>
        <tfoot>
          <td class=""></td>
          <td class=""></td>
          <td class="">{{ expencesSum }}</td>
          <td class=""></td>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  private expenses: Array<any> = [];
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

  mounted() {
    this.getFromLocalStorage()
  }

  @Watch("expenses")
  expensesChanged(newVal: Array<object>) {
    this.saveToLocalStorage();
  }

  get sortedExpences(): Array<object> {
    return this.expenses.sort((a: any, b: any): number => {
      if (a.date === b.date) {
        return 0;
      }

      if (a.date > b.date) {
        return -1;
      }

      return 1;
    });
  }

  get expencesSum(): number {
    let sum = 0;
    this.expenses.forEach((expence: any) => {
      sum = sum + expence.sum;
    });

    return sum;
  }

  public saveExpence(): void {
    this.expenses.push({
      sum: this.sum,
      category: this.category,
      date: new Date().getTime()
    });

    this.sum = 0;
    this.category = "";
  }

  public remove(index: number): void {
    this.expenses.splice(index, 1);
  }

  public saveToLocalStorage(): void {
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

  public getFromLocalStorage(): void {
    if (!localStorage.expenses) {
      return;
    }
    this.expenses = JSON.parse(localStorage.expenses);
  }
}
</script>

<style lang="scss" scoped>

</style>