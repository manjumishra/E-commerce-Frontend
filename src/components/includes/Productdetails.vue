<template>
  <div>
    <Nav />
    <div class="container">
      <div class="row">
        <div class="col-sm-9 padding-right"
        v-for="(items, index) in item"
              v-bind:key="index"
              v-bind:class="index == 0 ? 'item active' : 'item'">
          <div class="product-details">
            <!--product-details-->

            <div class="col-sm-3">
              <div class="view-product">
                <img :src="'http://127.0.0.1:8000/uploads/'+items.image" alt=""  style="width:200px;" />
                <h3>ZOOM</h3>
              </div>
             
            </div>
            <div class="col-sm-8">
              <div class="product-information">
                <!--/product-information-->
                <img
                  src="/images/product-details/new.jpg"
                  class="newarrival"
                  alt=""
                />
                <h2>{{items.productname}}</h2>
                <img src="/images/product-details/rating.png" alt="" />
                <span>
                  <span>{{items.price}}</span>
                  <label>Quantity:</label>
                  <input type="text" v-model="items.quantity" />
                  <button type="button" class="btn btn-fefault cart" @click="addToCart(items)">
                    <i class="fa fa-shopping-cart"></i>
                    Add to cart
                  </button>
                </span>
                <p><b>Condition:</b> New</p>
                <p><b>Brand:</b> {{items.brand}}</p>
                <a href=""
                  ><img
                    src="images/product-details/share.png"
                    class="share img-responsive"
                    alt=""
                /></a>
              </div>
              <!--/product-information-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/product-details-->
    <Footer />
  </div>
</template>

<script>
import Footer from "../includes/Footer.vue";
import Nav from "../includes/Nav.vue";
import {productDetails} from "@/common/Service";
export default {
  name: "Productdetails",
  components: {
    Nav,
    Footer,
  },
  data(){
      return{
          
          item:"",
        products:"",
        pid: this.$route.params.id,
      };
    
  },
  mounted(){
      productDetails(this.pid).then((res)=>{
          console.log(res.data);
         // alert(this.pid);
          this.item=res.data;         
         
      });
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

  },
 
};
</script>
<style>
</style>