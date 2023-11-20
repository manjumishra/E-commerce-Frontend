<template>
  <div>
      <Nav/>
    <Slider/>
   
       <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="left-sidebar">
             <Sidebar/>
            </div>
          </div>

          <!-- For Main contents -->
          <!-- <div class="col-sm-9 h2 font-weight-bold text-info">
            Category page
            </div> -->
            <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">Features Items</h2>
            <div
              class="col-sm-4"
              v-for="(product, index) in products"
              v-bind:key="index"
              v-bind:class="index == 0 ? 'item active' : 'item'"
            >
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img :src="'http://127.0.0.1:8000/uploads/'+product.image" alt=""  height="150" width="150" class="zoomin">
                    <h2>₹{{ product.price }}</h2>
                    <p>{{product.productname}}</p>
                    <p>{{product.description}}</p>
                    <button class="btn btn-default add-to-cart" @click="addToCart(product)"
                      ><i class="fa fa-shopping-cart"></i>Add to cart</button
                    >
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <!-- <a href="#" 
                        ><i class="fa fa-plus-square"></i>Add to wishlist</a
                      > -->
                      <li>
                     
                    <router-link to="" v-if="email" > 
                    <button  @click="addTowishlist(product)" class="fa fa-plus-square"
                      > Add to Wishlist</button></router-link>
                    <router-link to="/wishlist" v-if="!email" > <i class="fa fa-plus-square"></i>Add to Wishlist</router-link>
                    </li>
                    <li>
                     <router-link :to="/Productdetails/+product.id"><i class="fa fa-plus-square"></i>Product Details</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           </div>
          <!--features_items-->
        </div>
        </div>
      </div>
    </section>
  <Footer/>

  </div>
</template>

<script>
import Nav from '../includes/Nav.vue';
import Slider from '../includes/Slider.vue';
import Sidebar from '../includes/Sidebar.vue';
import Footer from '../includes/Footer.vue';
import {MyWishlist} from '@/common/Service';
import axios from "axios";
export default {
name:'Category',
components:{
    Nav,
    Slider,
    Sidebar,
    Footer,
},

 data() {
    return {
        products:null,
       email:localStorage.getItem("uid")?localStorage.getItem("uid"):'',
       useremail:localStorage.getItem('uid'),
    };
  },
 mounted(){
   const url="http://127.0.0.1:8000/api/product";
    axios.get(url).then((res)=>
    {
      this.products=res.data;
      console.log(res.data);
    })
 },

methods:{
 addToCart(product) {
      if (localStorage.getItem("myCart") != undefined) {
        let arr = JSON.parse(localStorage.getItem("myCart"));
        let obj = {
          pid: product.id,
          quantity: 1,
          price: product.price,
          name: product.productname,
          image: product.image,
        };
       
        const found = arr.some((item) => item.pid == product.id);
        if (found) {
          this.$swal("Already  added", "", "error");
        } else
         {
          arr.push(obj);
          localStorage.setItem("myCart", JSON.stringify(arr));
          this.$store.dispatch("addToCart", arr);
          this.$swal("Added successfully", "", "success");
          //location.reload();
        }
      } else
       {
        let arr = [];
        let obj = {
         pid: product.id,
          quantity: 1,
          price: product.price,
          name: product.productname,
          image: product.image,
        };
        arr.push(obj);
        localStorage.setItem("myCart", JSON.stringify(arr));
        this.$store.dispatch("addToCart", arr);
        this.$swal("Added successfully", "", "success");
        //location.reload();
        // this.$router.push("/cart");
      }
    },


    addTowishlist(product) {
      if (localStorage.getItem("mywishlist") != undefined) {
        let arr = JSON.parse(localStorage.getItem("mywishlist"));
        let obj = {
          pid: product.id,
          quantity: 1,
          price: product.price,
          productname: product.productname,
          image: product.image,
          useremail:this.useremail
        };
        
        console.log(obj)
        const found = arr.some((item) => item.pid == product.id);
        if (found) {
          this.$swal("Already added", "", "error");
        } else
         {
          arr.push(obj);
          localStorage.setItem("mywishlist", JSON.stringify(arr));
          this.$store.dispatch("addToWishlist", arr);
           this.$swal("Added successfully", "", "success");
            MyWishlist(obj).then((res)=>{
           if(res)
           {
             console.log(res.data)
            //  this.$swal("Added successfully", "", "success");
           }
         })
          
          //location.reload();
        }
      } else
       {
        let arr = [];
        let obj = {
         pid: product.id,
          quantity: 1,
          price: product.price,
          name: product.productname,
          image: product.image,
        };
        arr.push(obj);
        localStorage.setItem("mywishlist", JSON.stringify(arr));
        this.$store.dispatch("addToWishlist", arr);
        this.$swal("Added successfully", "", "success");
        //location.reload();
        // this.$router.push("/cart");
      }
    },
  },

}
</script>

<style>

</style>