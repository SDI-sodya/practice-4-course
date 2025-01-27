import { router } from './router.js';

document.addEventListener('DOMContentLoaded', function() {
  const main = {
    data() {
      return {
        url:"",
        user: {name:"", phone:"", email:"", date:"", auth:""},
        formData: {},
        title: "",
        date: "",
        time: "",
      }
    },
    watch: {
      $route:function(){}
    },
    mounter:function() {},
    methods: {}
  };

  var app = Vue.createApp(main)
  .use(router)
  .mount('#content');
});