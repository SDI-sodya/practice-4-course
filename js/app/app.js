import {router} from './router.js';

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

    },
    mounter:function() {

    },
    methods: {
      init() {

      }
    }
  };

  var app = Vue.createApp(main)
  .use(router)
  .mount('#content');
});