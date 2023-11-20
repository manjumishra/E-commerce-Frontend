import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuelidate from 'vuelidate'
import store from './store/Store'
import VueSweetalert2 from 'vue-sweetalert2';
// import Pagination from 'vue-pagination-2';
// Vue.component('pagination', Pagination);

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')



// <ul>
// <li v-for="(record, index) of displayedRecords" :key="index">{{record}}</li>
// </ul>
// <pagination :records="records.length" v-model="page" :per-page="perPage" @paginate="callback">
// </pagination>
// </div>
// </div>
// </div>

// </template>

// <script>
// export default {

// name:'Home',

//  computed:{
//    reverseMessage:function()
//    {
//      return this.msg.split('').reverse().join('');
//    }
//  },
//  data()
//  {
//    return {
//      msg:"Hello",
//      Page: 1
//      }
//  },

// data(){
//  return{
// page: 1,
// perPage: 3,
// records: []
//  }
// },

// computed: {
// displayedRecords() {
//   const startIndex = this.perPage * (this.page - 1);
//   const endIndex = startIndex + this.perPage;
//   return this.records.slice(startIndex, endIndex);
// }
// },
// created() {
//here we simulate an api call that returns the complete list
// for (let i = 1; i <= 500; i++) {
//   this.records.push(`Item ${i}`);
// }
// }


// }