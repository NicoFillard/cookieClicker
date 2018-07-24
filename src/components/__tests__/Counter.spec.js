import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  const wrapper = shallowMount(Counter);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<div><span class=\"count\">0</span> <button>Increment</button></div>');
  });

  it("button click should increment the count", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("button");
    button.trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });
});
