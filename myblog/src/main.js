// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueQuillEditor from 'vue-quill-editor'

import state from './store/state'
import mutations from './store/mutations'
import actions from './store/actions'

import Funcs from './assets/js/function'
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueQuillEditor);

var store = new Vuex.Store({
  state,
  mutations,
  actions
});

/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  store,
  beforeCreate:function () {
    addVisitCount(this);
    this.$http.get('./PHP/fetchData.php')
      .then(function (data) {
        console.log('Fetch data success!');
        let temp = data.data;
        let obj = Funcs.distributeData(temp);
        store.dispatch('modifyBlogs',obj);
      },function (err) {
        console.log('error!');
        console.log(err);
      });
  },
  template: '<App/>',
  components: { App }
});


function addVisitCount(vue) {
  vue.$http.get('./PHP/visitCount.php')
    .then((data)=>{
        // console.log(data.data);
        vue.$store.commit('updateVisitCount',data.data);
        window.alert('欢迎光临！您是第本站' + vue.$store.state.visitCount + '位访客！');
      },
      (error)=>{
        console.log(error);
      })
}
