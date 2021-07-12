import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";

library.add(faCoffee, farComment);

Vue.component("Fa", FontAwesomeIcon);
