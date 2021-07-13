import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCoffee,
  faChevronDown,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment as farComment,
  faEnvelope as farEnvelope,
  faNewspaper as farNewspaper,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faCoffee,
  farComment,
  farNewspaper,
  farEnvelope,
  faChevronDown,
  faCaretDown
);

Vue.component("Fa", FontAwesomeIcon);
