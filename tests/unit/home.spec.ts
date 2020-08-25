import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const getters = {
  incomes: () => [],
  outcomes: () => [],
};

const store = new Vuex.Store({
  modules: {
    Categories: {
      namespaced: true,
      getters,
    },
    Expenses: {
      namespaced: true,
      getters: {
        sortedById: () => [],
      },
    },
  },
});

describe("Home", () => {
  it("is vue", () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue,
      stubs: {
        routerLink: true,
      },
      mocks: {
        $t: () => {},
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
