import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Expense from '@/models/Expense'
import LocalStorage from '@/storages/LocalStorage'

const storage: LocalStorage = new LocalStorage()

@Module({ namespaced: true })
export default class Expenses extends VuexModule {
    public expenses: Array<Expense> = storage.getData()

    get sortedByCreatedAt(): Array<Expense> {
        return [...this.expenses].sort((a: Expense, b: Expense): number => {
            if (a.getCreatedAt === b.getCreatedAt) {
                return 0
            }

            if (a.getCreatedAt > b.getCreatedAt) {
                return -1
            }

            return 1
        })
    }

    get sortedById(): Array<Expense> {
        return [...this.expenses].sort((a: Expense, b: Expense): number => {
            if (a.getId === b.getId) {
                return 0
            }

            if (a.getId > b.getId) {
                return -1
            }

            return 1
        })
    }

    @Mutation
    public push(expense: Expense): void {
        this.expenses.push(expense)
    }

    @Mutation
    public delete(id: number): void {
        const index: number = this.expenses.findIndex((expense: Expense) => expense.getId() === id)
        this.expenses.splice(index, 1);
    }

    @Action
    public saveExpense(expense: Expense): void {
        this.context.commit('push', expense)
        storage.syncData(this.expenses)
    }

    @Action
    public deleteExpense(id: number): void {
        this.context.commit('delete', id)
        storage.syncData(this.expenses)
    }
}