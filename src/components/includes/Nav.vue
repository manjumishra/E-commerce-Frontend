<template>
  <div>
    <header id="header">
      <!--header-->
      <div class="header_top">
        <!--header_top-->
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="contactinfo">
                <ul class="nav nav-pills">
                  <li>
                    <a href="#"><i class="fa fa-phone"></i> +918090909090</a>
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-envelope"></i> info@domain.com</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="social-icons pull-right">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-dribbble"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/header_top-->

      <div class="header-middle">
        <!--header-middle-->
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="logo pull-left">
                <a href="index.html"
                  ><img src="/images/home/logo.png" alt=""
                /></a>
              </div>
            </div> 

            <div class="col-sm-8">
              <div class="shop-menu pull-right"> 
                <ul class="nav navbar-nav collapse navbar-collapse">
                  <li>
                     <a href="javascript:void(0)" v-if="email" ><i class="font-weight-bold text-info h5" > Welcome: {{myemail}}</i></a>
                  </li>

<!--         
                  <li class="dropdown collapse navbar-collapse"> 
                    <a href="#"><i class="fa fa-user"></i>Acoount</a>
                    <ul class="sub-menu">
                      <li><a href="">Profile</a></li>
                      <li><a href="">Edit orders</a></li>
                      <li><a href="/changepass">Change password</a></li>
                    </ul>
                  </li> -->

                  <li>
                    <router-link to="/wishlist"><i class="fa fa-star"></i> Wishlist {{numInwishlist}}</router-link>
                  </li>
                  <li>
                    <a href="/checkout"
                      ><i class="fa fa-crosshairs"></i> Checkout</a
                    >
                  </li>
                  <li>
                    <router-link to="/cart"
                      ><i class="fa fa-shopping-cart"></i> Cart {{numInCart}}</router-link
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0)" v-if="email" @click="logout()" ><i class="fa fa-lock"></i> Logout</a>
                    <router-link to="/login" v-if="!email"><i class="fa fa-lock"></i> Login</router-link>
                  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/header-middle-->

      <div class="header-bottom">
        <!--header-bottom-->
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <div class="navbar-header">
                <button  type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="mainmenu pull-left">
                <ul class="nav navbar-nav collapse navbar-collapse">
                  <li><router-link to="/" class="active">Home</router-link></li>
                  <li class="dropdown">
                    <a href="#">Shop<i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                      <li><a href="/product">Products</a></li>
                      <li><a href="/checkout">Checkout</a></li>
                      <li><a href="/cart">Cart</a></li>
                  
                      <li> 
                     <a href="javascript:void(0)" v-if="email" @click="logout()" ><i class="fa fa-lock"></i> Logout</a>
                    <router-link to="/login" v-if="!email"><i class="fa fa-lock"></i> Login</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#">Explore<i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu"
                      v-for="(titles, index) in title"
                      v-bind:key="index"
                      v-bind:class="index == 0 ? 'item active' : 'item'">
                      <li><router-link :to="'/explore/'+titles.id">{{titles.title}}</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="/contact">Contact</router-link></li>
                   <li class="dropdown"> 
                     <a href="javascript:void(0)" v-if="email" ><i class="fa fa-lock"></i> Account</a>
                    <ul class="sub-menu">
                      <li><router-link to="/profile">Profile</router-link></li>
                      <li><router-link to="/editprofile">Edit Profile</router-link></li>
                      <li><a href="/changepass">Change password</a></li>
                       <li><router-link to="/order">My Orders</router-link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <div class="col-sm-3">
              <div class="search_box pull-right">
                <input type="text" placeholder="Search" />
              </div>
            </div> -->
         
          </div>
        </div>
      </div>
      <!--/header-bottom-->
    </header>
    <!--/header-->
  </div>
</template>

<script>
import axios from "axios";
import { cmsurl} from '@/common/Url';
export default {
  name: "Nav",
  data(){
    return{
      email:localStorage.getItem("uid")?localStorage.getItem("uid"):'',
      myemail:localStorage.getItem("uid"),
      title:"",
    }
  },

computed :{
      inCart() { return this.$store.getters.inCart},
      numInCart() { return this.inCart.length},
       wishlist() { return this.$store.getters.wishlist},
      numInwishlist() { return this.wishlist.length}
  },
  methods:{

    logout(){
      localStorage.removeItem('uid');
      localStorage.removeItem('access_token');
      localStorage.removeItem('fname');
      localStorage.removeItem('lname');
      this.$swal('Logged Out','','success');
      //this.$router.push('/login')
       location.reload();
    },
   
  },

 mounted(){
    axios.get(cmsurl).then((res)=>
    {
      this.title=res.data;
      console.log(res.data);
    })
 },

};
</script>

<style>
</style>