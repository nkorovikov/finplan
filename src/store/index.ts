import Vue from 'vue'
import Vuex from 'vuex'
import Expenses from '@/store/Expenses'
import Categories from '@/store/Categories'

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
  }
})
