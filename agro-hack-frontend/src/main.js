import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Axios setup
import Axios from "axios";
Axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("user-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)


import * as VueGoogleMaps from 'gmap-vue'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCDy6naA6hOaVCQVfVA6b06z8jye9DC5_w',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'gmap-vue/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})


import "tailwindcss/tailwind.css"
import './assets/fonts/stylesheet.css'
// import Unicon from 'vue-unicons'

import {InlineSvgPlugin} from 'vue-inline-svg';
Vue.use(InlineSvgPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
