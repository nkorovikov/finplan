import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Profile from '@/models/Profile'
import LocalStorage from '@/storages/LocalStorage'

const storage: LocalStorage = new LocalStorage()

@Module({ namespaced: true })
export default class Expenses extends VuexModule {
    public profile: Profile = storage.getProfile()

    @Mutation
    public save(profile: Profile): void {
        this.profile = profile;
    }

    @Action
    public saveProfile(profile: Profile): void {
        this.context.commit('save', profile)
        storage.syncProfile(this.profile)
    }

    @Action
    get(): Profile {
        return this.profile;
    }
}