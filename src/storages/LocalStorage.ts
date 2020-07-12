import Expense from '@/models/Expense';
import Category from '@/models/Category';

export default class LocalStorage {
    public getExpenses(): Array<Expense> {
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

    public syncExpenses(expenses: Array<Expense>): void {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    public getCategories(): Array<Category> {
        if (!localStorage.categories) {
            return [];
        }
        return JSON.parse(localStorage.categories)
            .map((category: any) => new Category(
                category.id,
                category.name,
                category.type,
                category.cssClass,
            ));
    }

    public syncCategories(categories: Array<Category>): void {
        localStorage.setItem("categories", JSON.stringify(categories));
    }
}