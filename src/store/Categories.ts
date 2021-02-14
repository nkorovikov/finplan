import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import Category from "@/models/Category";
import LocalStorage from "@/storages/LocalStorage";

const storage: LocalStorage = new LocalStorage();

@Module({ namespaced: true })
export default class CategoriesCategories extends VuexModule {
  public categories: Array<Category> = storage.getCategories();

  get sortedCategoriesById(): Array<Category> {
    return [...this.categories].sort(
      (a: Category, b: Category): number => a.getId() - b.getId()
    );
  }

  get rootCategories(): Array<Category> {
    return [...this.categories].filter(
        (a: Category): boolean => a.getCategoryId() === undefined
    );
  }

  get incomes(): Array<Category> {
    return [...this.categories].filter(
      (a: Category): boolean => a.getType() === 1
    );
  }

  get finalIncomes(): Array<Category> {
    const incomes = [...this.categories].filter(
      (a: Category): boolean => a.getType() === 1
    );

    return incomes.filter((a: Category): boolean => incomes.filter((b: Category): boolean => b.getCategoryId() === a.getId()).length === 0)
  }

  get outcomes(): Array<Category> {
    return [...this.categories].filter(
      (a: Category): boolean => a.getType() === 2
    );
  }

  get finalOutcomes(): Array<Category> {
    const outcomes = [...this.categories].filter(
      (a: Category): boolean => a.getType() === 2
    );

    return outcomes.filter((a: Category): boolean => outcomes.filter((b: Category): boolean => b.getCategoryId() === a.getId()).length === 0)
  }

  @Mutation
  public push(category: Category): void {
    this.categories.push(category);
  }

  @Mutation
  public update(id: number, category: Category): void {
    const index: number = this.categories.findIndex(
      (category: Category) => category.getId() === id
    );
    this.categories[index] = category;
  }

  @Mutation
  public delete(id: number): void {
    const index: number = this.categories.findIndex(
      (category: Category) => category.getId() === id
    );
    this.categories.splice(index, 1);
  }

  @Mutation
  public saveAll(expenses: Array<Category>): void {
    this.categories = expenses;
  }

  @Mutation
  public clearAll(): void {
    this.categories = [];
  }

  @Action
  public createCategory(category: Category): void {
    this.context.commit("push", category);
    storage.syncCategories(this.categories);
  }

  @Action
  public updateCategory(id: number, category: Category): void {
    this.context.commit("update", { id, category });
    storage.syncCategories(this.categories);
  }

  @Action
  public deleteCategory(id: number): void {
    this.context.commit("delete", id);
    storage.syncCategories(this.categories);
  }

  @Action
  findById(id: number): Category | undefined {
    return this.categories.find(
      (category: Category) => category.getId() === id
    );
  }

  @Action
  public replaceAllCategories(categories: Array<Category>): void {
    this.context.commit("clearAll", categories);
    this.context.commit("saveAll", categories);
    storage.syncCategories(this.categories);
  }
}
