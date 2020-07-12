<template>
  <div>
    <div>
      <input type="tel" v-model.number="sum" />
      <router-link :to="{ name: 'History'}" tag="i" class="material-icons">donut_small</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'Categories'}" tag="i" class="material-icons">view_list</router-link>
      <input v-model.trim="category" />
      <button @click.prevent="saveExpenseHandler">Save</button>
    </div>
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

  @expenses.Getter
  public sortedById!: Array<Expense>;

  @expenses.Action
  saveExpense!: (expense: Expense) => void;

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
}
</script>

<style lang="scss" scoped>
</style>