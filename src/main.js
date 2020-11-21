import Vue from "vue";
import App from "./App.vue";

import UIkit from "uikit";
import "uikit/dist/css/uikit.css";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
