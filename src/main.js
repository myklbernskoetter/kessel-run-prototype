import Vue from 'vue';

import VueSlideBar from 'vue-slide-bar'
Vue.use(VueSlideBar);

import VueCircleSlider from 'vue-circle-slider';
Vue.use(VueCircleSlider);

import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
