import store from "@/store";
import { StorageType } from "@/models/StorageType";

const storageWorker = (type: StorageType, value: string) => {
  switch (type) {
    case StorageType.USERNAME:
      store.commit("setUsername", value);
      break;
    case StorageType.AVATARURL:
      store.commit("setAvatarUrl", value);
      break;
    case StorageType.MAILURL:
      store.commit("setMailUrl", value);
      break;
    case StorageType.NEWSURL:
      store.commit("setNewsUrl", value);
      break;
    case StorageType.MAPURL:
      store.commit("setMapUrl", value);
      break;
    case StorageType.BGURL:
      store.commit("setBgUrl", value);
      break;
    case StorageType.CLOCKMODE:
      store.commit("setClockMode", JSON.parse(value));
      break;
    case StorageType.COLONMODE:
      store.commit("setColonMode", JSON.parse(value));
      break;
    case StorageType.PLACE:
      store.commit("setPlace", value);
      break;
    case StorageType.SEARCHENGINE:
      store.commit("setSearchEngine", JSON.parse(value));
      break;
    default:
      console.log("u wot m8");
  }
};

export const loadLS = (type: StorageType): void => {
  const value: string | null = localStorage.getItem(type);

  if (value) {
    storageWorker(type, value);
  } else
    console.log(
      `%c Notice: %c The value for ${type} does not exist`,
      "color: white; background: #00d1b2; font-weight: bold; border-radius: 2px; ",
      "color: #00947e; background: #ebfffc;"
    );
};

export const setLS = (type: StorageType, value: string): void => {
  localStorage.setItem(type, value);

  storageWorker(type, value);
};

export const removeAllLS = (): void => {
  localStorage.removeItem(StorageType.USERNAME);
  localStorage.removeItem(StorageType.AVATARURL);
  localStorage.removeItem(StorageType.PLACE);
  localStorage.removeItem(StorageType.MAILURL);
  localStorage.removeItem(StorageType.MAPURL);
  localStorage.removeItem(StorageType.NEWSURL);
  localStorage.removeItem(StorageType.BGURL);
  localStorage.removeItem(StorageType.CLOCKMODE);
  localStorage.removeItem(StorageType.COLONMODE);
  localStorage.removeItem(StorageType.SEARCHENGINE);
};
