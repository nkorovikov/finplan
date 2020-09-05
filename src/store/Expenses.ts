import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import Expense from "@/models/Expense";
import LocalStorage from "@/storages/LocalStorage";

const storage: LocalStorage = new LocalStorage();

@Module({ namespaced: true })
export default class Expenses extends VuexModule {
  public expenses: Array<Expense> = storage.getExpenses();

  get descSortedByCreatedAt(): Array<Expense> {
    return [...this.expenses].sort(
      (a: Expense, b: Expense): number => b.getCreatedAt() - a.getCreatedAt()
    );
  }

  get sortedById(): Array<Expense> {
    return [...this.expenses].sort(
      (a: Expense, b: Expense): number => a.getId() - b.getId()
    );
  }

  @Mutation
  public push(expense: Expense): void {
    this.expenses.push(expense);
  }

  @Mutation
  public saveAll(expenses: Array<Expense>): void {
    this.expenses = expenses;
  }

  @Mutation
  public clearAll(): void {
    this.expenses = [];
  }

  @Mutation
  public delete(id: number): void {
    const index: number = this.expenses.findIndex(
      (expense: Expense) => expense.getId() === id
    );
    this.expenses.splice(index, 1);
  }

  @Action
  public saveExpense(expense: Expense): void {
    this.context.commit("push", expense);
    storage.syncExpenses(this.expenses);
  }

  @Action
  public deleteExpense(id: number): void {
    this.context.commit("delete", id);
    storage.syncExpenses(this.expenses);
  }

  @Action
  getByCategoryId(id: number): Array<Expense> {
    return this.expenses.filter(
      (expense: Expense) => expense.getCategoryId() === id
    );
  }

  @Action
  public replaceAllExpenses(expenses: Array<Expense>): void {
    this.context.commit("clearAll", expenses);
    this.context.commit("saveAll", expenses);
    storage.syncExpenses(this.expenses);
  }
}
