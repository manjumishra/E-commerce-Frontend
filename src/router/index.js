import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from '../components/includes/Login.vue';
import Main from '../components/Front/Main.vue';
import Contact from '../components/includes/Contact.vue'
import Cart from '../components/includes/Cart.vue'
import Category from '../components/includes/Category';
import Checkout from '../components/includes/Checkout.vue';
import Change_pass from '../components/includes/Change_pass';
import Profile from '../components/includes/Profile';
import Wishlist from '../components/includes/Wishlist';
import Editprofile from '../components/includes/Editprofile';
import Productdetails from '../components/includes/Productdetails';
import Product from '../components/includes/Product'
import Explore from '../components/includes/Explore'
import Order from '../components/includes/Order'; 
import Trackorder from '../components/includes/Trackorder';
import Paypal from "../components/includes/Paypal";
function myGaurd(to,from,next){
    let isAutheticated=false;
    if(localStorage.getItem('uid')!=undefined)
    {
        isAutheticated=true;
    }
    else {
        isAutheticated=false;
    }
    if(isAutheticated){
        next();//allow to enter route
    }
    else {
        alert("Login First !!");
        next("/login");
    }
}
export default new Router ({
    mode:'history',
    routes:[
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/',
            name:'Main',
            component:Main
        },
        {
            path:'/contact',
            name:'Contact',
            component:Contact
        },
        {
            path:'/cart',
            name:'Cart',
            beforeEnter:myGaurd,
            component:Cart
        },
        {
            path:'/category/:id',
            name:'Category',
            component:Category
        },
        {
            path:'/checkout',
            name:'Checkout',
            beforeEnter:myGaurd,
            component:Checkout
        },
        {
            path:'/changepass',
            name:'Change_pass',
            component:Change_pass
        },
        {
            path:'/profile',
            name:'Profile',
            component:Profile
        },
        {
            path:'/wishlist',
            name:'Wishlist',
            beforeEnter:myGaurd,
            component:Wishlist
        },
        {
            path:'/editprofile',
            name:'Editprofile',
            component:Editprofile
        },
        {
            path:'/Productdetails/:id',
            name:'Productdetails',
            component:Productdetails
        },
        {
            path:'/Product',
            name:'Product',
            component:Product
        },
        {
            path:'/explore/:id',
            name:'Explore',
            component:Explore
        },
        {
            path:'/order',
            name:'Order',
            component:Order
        },
        {
            path:'/trackorder',
            name:'Trackorder',
            component:Trackorder
        },
        {
            path:'/paypal',
            name:'Paypal',
            component:Paypal
        },
    ]

})