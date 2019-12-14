import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ToDo from "@/components/ToDo.vue";

describe("ToDo.vue", () => {
  it("renders props.title when passed", () => {
    const title = "To title";
    const wrapper = shallowMount(ToDo, {
      propsData: { title }
    });

    expect(wrapper.text()).to.include(title);

  });
});
