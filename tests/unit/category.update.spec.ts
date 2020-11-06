import { mount } from "@vue/test-utils";
import CategoriesUpdate from "@/views/CategoriesUpdate.vue";
import FormInput from "@/components/form/FormInput.vue";
import IconsSelect from "@/components/form/IconsSelect.vue";
import RowRadioType from "@/components/form/RowRadioType.vue";
import FormFactory from "@/components/form/FormFactory.vue";
import { VBtn, VRadioGroup, VSelect } from "vuetify/lib";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import Category from "@/models/Category";

const $route = {
  params: {
    id: 1,
  },
};

/**
 * @hack
 * @see https://github.com/vuejs/vue-test-utils/issues/1087
 */
Vue.use(Vuetify);
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Categories: {
      namespaced: true,
      actions: {
        findById: (id) => new Category(1, "test", 1, "test"),
      },
    },
  },
});

describe("CategoriesUpdate", () => {
  let vuetify: any;
  let wrapper: any;

  beforeEach(() => {
    vuetify = new Vuetify();

    wrapper = mount(CategoriesUpdate, {
      vuetify,
      store,
      stubs: {
        routerLink: true,
        NavBar: '<div class="navbar"></div>',
      },
      mocks: {
        $route,
        $t: (key: string) => key,
      },
    });
  });

  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("contains a form", () => {
    expect(wrapper.contains(FormInput)).toBe(true);
    expect(wrapper.contains(IconsSelect)).toBe(true);
    expect(wrapper.contains(RowRadioType)).toBe(true);
    expect(wrapper.contains(VBtn)).toBe(true);
  });

  it("fills name", () => {
    const name = "Shop";
    const formFactory = wrapper.find(FormFactory);

    expect(formFactory.vm.$data.data.name).toBe("test");

    const nameInput = wrapper.find(FormInput).find('input[type="text"]');
    nameInput.setValue(name);

    expect(formFactory.vm.$data.data.name).toBe(name);
  });

  it("fills icon", () => {
    const icon = "shopping_cart";
    const formFactory = wrapper.find(FormFactory);

    expect(formFactory.vm.$data.data.icon).toBe("test");

    const iconSelect = wrapper.find(IconsSelect).find(VSelect);
    iconSelect.vm.$emit("input", icon);

    expect(formFactory.vm.$data.data.icon).toBe(icon);
  });

  it("fills type", () => {
    const type = 2;
    const formFactory = wrapper.find(FormFactory);

    expect(formFactory.vm.$data.data.type).toBe(1);

    const typeRadio = wrapper.find(RowRadioType).find(VRadioGroup);
    typeRadio.vm.$emit("change", type);

    expect(formFactory.vm.$data.data.type).toBe(type);
  });

  it("creates a category", () => {
    const formFactory = wrapper.find(FormFactory);

    const submitStub = jest.fn();
    formFactory.setMethods({ submit: submitStub });
    const submitButton = formFactory.find(VBtn);
    submitButton.trigger("click");

    expect(submitStub).toHaveBeenCalled();
  });
});
