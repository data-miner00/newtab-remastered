import store from "@/store";
import { StorageType } from "@/models/StorageType";

export const loadLS = (type: StorageType): void => {
  const value: string | null = localStorage.getItem(type);

  if (value) {
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
      default:
        console.log("u wot m8");
    }
  } else console.log(`The value for ${type} does not exist`);
};

export const setLS = (type: StorageType, value: string): void => {
  localStorage.setItem(type, value);

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
    default:
      console.log("u wot m8");
  }
};
