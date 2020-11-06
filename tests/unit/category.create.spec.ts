import { mount } from "@vue/test-utils";
import CategoriesCreate from "@/views/CategoriesCreate.vue";
import FormInput from "@/components/form/FormInput.vue";
import IconsSelect from "@/components/form/IconsSelect.vue";
import RowRadioType from "@/components/form/RowRadioType.vue";
import FormFactory from "@/components/form/FormFactory.vue";
import { VBtn, VRadioGroup, VSelect } from "vuetify/lib";
import Vue from "vue";
import Vuetify from "vuetify";

/**
 * @hack
 * @see https://github.com/vuejs/vue-test-utils/issues/1087
 */
Vue.use(Vuetify);

describe("CategoriesCreate", () => {
  let vuetify: any;
  let wrapper: any;

  beforeEach(() => {
    vuetify = new Vuetify();

    wrapper = mount(CategoriesCreate, {
      vuetify,
      stubs: {
        routerLink: true,
        NavBar: '<div class="navbar"></div>',
      },
      mocks: {
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
    const name = "Test";
    const formFactory = wrapper.find(FormFactory);

    expect(formFactory.vm.$data.data.name).toBe("");

    const nameInput = wrapper.find(FormInput).find('input[type="text"]');
    nameInput.setValue(name);

    expect(formFactory.vm.$data.data.name).toBe(name);
  });

  it("fills icon", () => {
    const icon = "test";
    const formFactory = wrapper.find(FormFactory);

    expect(formFactory.vm.$data.data.icon).toBe("shopping_cart");

    const iconSelect = wrapper.find(IconsSelect).find(VSelect);
    iconSelect.vm.$emit("input", icon);

    expect(formFactory.vm.$data.data.icon).toBe(icon);
  });

  it("fills type", () => {
    const type = 1;
    const formFactory = wrapper.find(FormFactory);

    expect(formFactory.vm.$data.data.type).toBe(2);

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
