import Vue from 'vue'
import Vuex from 'vuex'
import Expenses from '@/store/Expenses'
import Categories from '@/store/Categories'
import Profile from '@/store/Profile'
import Cloud from '@/store/Cloud'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Expenses,
    Categories,
    Profile,
    Cloud,
  }
})
