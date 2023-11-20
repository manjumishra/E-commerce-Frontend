import Vue from 'vue'
import Vuex from'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        opt:'',
        inCart:JSON.parse(localStorage.getItem('myCart'))?JSON.parse(localStorage.getItem('myCart')):[],
        wishlist:JSON.parse(localStorage.getItem('mywishlist'))?JSON.parse(localStorage.getItem('mywishlist')):[],
 
    },
    getters:{
        inCart: state => state.inCart,
        wishlist: state=>state.wishlist
     },
    mutations:
    {
        myopt(state,payload)
        {
           return state.opt=payload.id
        },
       ADD_TO_CART(state,id){ state.inCart.push(id)},

       ADD_TO_WISHLIST(state,id){ state.wishlist.push(id)}

        
    },
    actions:{
          opt(context,payload)
          {
              context.commit('myopt',payload)
          },
          addToCart(context,id) { context.commit('ADD_TO_CART',id)},

          addToWishlist(context,id) { context.commit('ADD_TO_WISHLIST',id)}
    },
})