import { mount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import Category from "@/models/Category";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Categories: {
      namespaced: true,
      getters: {
        finalIncomes: () => [],
        finalOutcomes: () => [new Category(1, "test", 1, "test")],
      },
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
  let vuetify: any;
  let wrapper: any;

  beforeEach(() => {
    vuetify = new Vuetify();

    wrapper = mount(Home, {
      store,
      localVue,
      vuetify,
      stubs: {
        routerLink: true,
        NavBar: '<div class="navbar"></div>',
        VSnackbar: '<div class="snack"></div>',
      },
      mocks: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        $t: () => {},
      },
    });
  });

  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("correctly set sum", () => {
    expect(wrapper.vm.$data.sum).toBe("");

    const sumInput = wrapper.find('[data-test="sumText"]');
    sumInput.setValue("100");

    expect(wrapper.vm.$data.sum).toBe("100");
  });

  it("correctly set date", () => {
    const dateInput = wrapper.find('[data-test="date"]');
    dateInput.setValue("2020-09-06");

    expect(wrapper.vm.$data.createdAt).toBe("2020-09-06");
  });

  it("category click", () => {
    const saveExpenseHandlerStub = jest.fn();
    wrapper.setMethods({ saveExpenseHandler: saveExpenseHandlerStub });
    const categoryButton = wrapper.find('[data-test="categoryButton"]');
    categoryButton.trigger("click");

    expect(saveExpenseHandlerStub).toHaveBeenCalled();
  });
});
