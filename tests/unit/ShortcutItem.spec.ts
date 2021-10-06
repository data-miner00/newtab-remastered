import ShortcutItem from "@/components/ShortcutItem.vue";
import { mount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

describe("ShortcutItem", (): void => {
  it("should render with the correct props provided", (): void => {
    const name: string = "Google";
    const tags: string[] = ["search", "technology"];
    const url: string = "https://www.google.com";
    const icon: string = "google";

    let wrapper: Wrapper<Vue> = mount(ShortcutItem, {
      propsData: {
        name,
        tags,
        url,
        icon,
      },
    });

    expect(wrapper.attributes().href).toBe(url);
    expect(wrapper.find(".favicon div img").attributes().src).toBe(
      `./favicons/${icon}.png`
    );
    expect(wrapper.find(".name").text()).toBe(name);
  });

  it("should abbreviate long names", (): void => {
    let wrapper: Wrapper<Vue> = mount(ShortcutItem, {
      propsData: {
        name: "This is a very long name very long",
      },
    });

    expect(wrapper.find(".name").text()).toBe("This is a ver...");
  });
});
