import Expense from "@/models/Expense";
import IExpense from "@/models/IExpense";
import Category from "@/models/Category";
import ICategory from "@/models/ICategory";
import Profile from "@/models/Profile";
import Cloud from "@/models/Cloud";

export default class LocalStorage {
  public getExpenses(): Array<Expense> {
    if (!localStorage.expenses) {
      return [];
    }
    return JSON.parse(localStorage.expenses).map(
      (expense: IExpense) =>
        new Expense(
          expense.id,
          expense.sum,
          expense.categoryId,
          expense.createdAt
        )
    );
  }

  public syncExpenses(expenses: Array<Expense>): void {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  public getCategories(): Array<Category> {
    if (!localStorage.categories) {
      return [];
    }
    return JSON.parse(localStorage.categories).map(
      (category: ICategory) =>
        new Category(category.id, category.name, category.type, category.icon)
    );
  }

  public syncCategories(categories: Array<Category>): void {
    localStorage.setItem("categories", JSON.stringify(categories));
  }

  getProfile(): Profile {
    if (!localStorage.profile) {
      return new Profile("", 0, 0, 0, "ru");
    }
    const profile = JSON.parse(localStorage.profile);
    return new Profile(
      profile.name,
      profile.dailyBudget,
      profile.weeklyBudget,
      profile.monthlyBudget,
      profile.locale
    );
  }

  syncProfile(profile: Profile): void {
    localStorage.setItem("profile", JSON.stringify(profile));
  }

  getCloud(): Cloud {
    if (!localStorage.cloud) {
      return new Cloud("", "");
    }
    const cloud = JSON.parse(localStorage.cloud);
    return new Cloud(cloud.email, cloud.token);
  }

  syncCloud(cloud: Cloud): void {
    localStorage.setItem("cloud", JSON.stringify(cloud));
  }
}
