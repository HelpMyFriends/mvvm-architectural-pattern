import Vue from 'vue';
import AppComponent from './components/app.component';
import store from './store';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');


let vm = new Vue({
  el: '#app',
  components: {
    'app': AppComponent
  },
  store
});
