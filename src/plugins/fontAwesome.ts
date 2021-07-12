import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCoffee,
  faDungeon,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment as farComment,
  faEnvelope as farEnvelope,
} from "@fortawesome/free-regular-svg-icons";

library.add(faCoffee, farComment, faDungeon, farEnvelope, faChevronDown);

Vue.component("Fa", FontAwesomeIcon);
