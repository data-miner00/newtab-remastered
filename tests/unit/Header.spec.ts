import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import Vuex from "vuex";
import Header from "@/components/Header.vue";
import Vue from "vue";
import "./helpers/loadFontAwesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.component("Fa", FontAwesomeIcon);

describe("Header", (): void => {
  let store: any;
  let wrapper: Wrapper<Vue>;

  beforeAll((): void => {
    store = new Vuex.Store({
      state: {
        username: "See Yee Choong",
        avatarUrl: "/myprofle.jpg",
        mapUrl: null,
        newsUrl: null,
        mailUrl: null,
      },
    });

    wrapper = mount(Header, { store, localVue });
  });

  it("should be a Vue instance", (): void => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe("Rendered output of Header", (): void => {
    let avatarImgWrapper: Wrapper<Vue>;
    let nameWrapper: Wrapper<Vue>;
    let mapIconWrapper: Wrapper<Vue>;
    let newsIconWrapper: Wrapper<Vue>;
    let mailIconWrapper: Wrapper<Vue>;

    beforeAll((): void => {
      avatarImgWrapper = wrapper
        .find(".header__panel__user__avatar")
        .find("img");
      nameWrapper = wrapper.find(".header__panel__user__username");
      mapIconWrapper = wrapper.find(".header__panel__icon.map");
      mailIconWrapper = wrapper.find(".header__panel__icon.mail");
      newsIconWrapper = wrapper.find(".header__panel__icon.news");
    });

    it("should exist within the dom node", (): void => {
      expect(avatarImgWrapper.exists()).toBe(true);
      expect(nameWrapper.exists()).toBe(true);
      expect(mapIconWrapper.exists()).toBe(true);
      expect(newsIconWrapper.exists()).toBe(true);
      expect(mailIconWrapper.exists()).toBe(true);
    });

    it("should render the image src attribute with given vuex value", (): void => {
      expect(avatarImgWrapper.attributes().src).toBe("/myprofle.jpg");
    });

    it("should render the name in the username div with vuex value", (): void => {
      expect(nameWrapper.text()).toBe("See Yee Choong");
    });

    it("should render the default urls when vuex is null", (): void => {
      expect(mapIconWrapper.attributes().href).toBe(
        "https://www.google.com.my/maps"
      );
      expect(newsIconWrapper.attributes().href).toBe(
        "https://news.microsoft.com/en-my/"
      );
      expect(mailIconWrapper.attributes().href).toBe("https://www.hotmail.com");
    });
  });
});
