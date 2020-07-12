import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Category from '@/models/Category'
import LocalStorage from '@/storages/LocalStorage'

const storage: LocalStorage = new LocalStorage()

@Module({ namespaced: true })
export default class CategoriesCategories extends VuexModule {
    public categories: Array<Category> = storage.getCategories()

    get sortedById(): Array<Category> {
        return [...this.categories].sort((a: Category, b: Category): number => {
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
    public push(category: Category): void {
        this.categories.push(category)
    }

    @Mutation
    public update(id: number, category: Category): void {
        const index: number = this.categories.findIndex((category: Category) => category.getId() === id)
        this.categories[index] = category
    }

    @Mutation
    public delete(id: number): void {
        const index: number = this.categories.findIndex((category: Category) => category.getId() === id)
        this.categories.splice(index, 1);
    }

    @Action
    public createCategory(category: Category): void {
        this.context.commit('push', category)
        storage.syncCategories(this.categories)
    }

    @Action
    public updateCategory(id: number, category: Category): void {
        this.context.commit('update', { id, category })
        storage.syncCategories(this.categories)
    }

    @Action
    public deleteCategory(id: number): void {
        this.context.commit('delete', id)
        storage.syncCategories(this.categories)
    }

    @Action
    findById(id: number): Category|undefined {
        return this.categories.find((category: Category) => category.getId() === id);
    }
}