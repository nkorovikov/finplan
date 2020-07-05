import IStorage from './IStorage';
import Expense from '@/models/Expense';

export default class LocalStorage implements IStorage {
    public getData(): Array<Expense> {
        if (!localStorage.expenses) {
            return [];
        }
        return JSON.parse(localStorage.expenses)
            .map((expense: any) => new Expense(
                expense.id,
                expense.sum,
                expense.category,
                expense.createdAt,
            ));
    }

    public syncData(expenses: Array<Expense>): void {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }
}