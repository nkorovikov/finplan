import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Cloud from '@/models/Cloud'
import LocalStorage from '@/storages/LocalStorage'

const storage: LocalStorage = new LocalStorage()

@Module({ namespaced: true })
export default class CloudStorage extends VuexModule {
    public cloud: Cloud = storage.getCloud()

    get getCloud(): Cloud {
        return this.cloud;
    }

    @Mutation
    public save(cloud: Cloud): void {
        this.cloud = cloud;
    }

    @Action
    public saveCloud(cloud: Cloud): void {
        this.context.commit('save', cloud)
        storage.syncCloud(this.cloud)
    }

    @Action
    get(): Cloud {
        return this.cloud;
    }
}