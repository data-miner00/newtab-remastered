import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCoffee,
  faChevronDown,
  faCaretDown,
  faCloud,
  faCloudMeatball,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faMapMarkerAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment as farComment,
  faEnvelope as farEnvelope,
  faNewspaper as farNewspaper,
  faObjectUngroup as farObjectUngroup,
  faMap as farMap,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faCoffee,
  farComment,
  farNewspaper,
  farEnvelope,
  faChevronDown,
  faCaretDown,
  farObjectUngroup,
  farMap,
  faCloud,
  faCloudMeatball,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faMapMarkerAlt,
  faArrowLeft
);

Vue.component("Fa", FontAwesomeIcon);
