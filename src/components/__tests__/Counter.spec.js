import { shallowMount, createLocalVue } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import Vuex from 'vuex'
import store from "@/store";

const localVue = createLocalVue()

localVue.use(Vuex)

describe("Counter.vue", () => {
  it("renders the correct markup", () => {
    const wrapper = shallowMount(Counter, { store, localVue });
    expect(wrapper.html()).toContain(
      "<div><span class=\"count\">0</span> <div class=\"content\"><div class=\"cookie-wrapper\"><img src=\"../assets/cookie.png\" alt=\"\" class=\"cookie\"></div></div></div>"
    );
  });

  xit("button click should increment the count", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
