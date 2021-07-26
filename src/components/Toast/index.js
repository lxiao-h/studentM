import Vue from 'vue';
import toast from './index.vue';

const Toast = Vue.extend(toast);
export default function createE(type, msg, duration = 2000) {
  let dua = duration;
  const app = new Toast({
    el: document.createElement('div'),
    data() {
      return {
        type,
        msg,
      };
    },
  });
  if (dua < 2000) {
    dua = 2000;
  }
  document.body.appendChild(app.$el);
  setTimeout(() => {
    app.flag = false;
  }, dua - 500);
  setTimeout(() => {
    document.body.removeChild(app.$el);
  }, dua);
}
