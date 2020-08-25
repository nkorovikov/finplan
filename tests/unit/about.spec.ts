import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About", () => {
  const wrapper = shallowMount(About, {
    mocks: {
      $t: () => {},
    },
  });

  it("is vue and contains Finplan word", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.html()).toContain("Finplan");
  });
});
