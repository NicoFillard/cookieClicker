import { shallowMount, createLocalVue } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import Vuex from "vuex";
import store from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Counter.vue", () => {
  const wrapper = shallowMount(Counter, { store, localVue });

  xit("button click should increment the count", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
