<template>
  <div>
    <Nav />
    <section id="cart_items">
      <div class="container">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active">Shopping Cart</li>
          </ol>
        </div>
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="description"></td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody >
              <tr v-for="i in item" :key="i.id">
                <td class="cart_product">
                  <a href=""><img :src="'http://127.0.0.1:8000/uploads/'+i.image" alt="" height="60" width="60" /></a>
                </td>
                <td class="cart_description">
                  <h4><a href="">{{ i.name }}</a></h4>
                 
                </td>
                <td class="cart_price"><br>
                  <p>₹{{i.price}}</p>
                </td>
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <a class="cart_quantity_up" href="" @click="add(i)"> + </a>
                    <input
                      class="cart_quantity_input"
                      type="text"
                      name="quantity"
                      v-model="i.quantity"
                      autocomplete="off"
                      size="2"
                    />
                    <a class="cart_quantity_down" href="" @click="substract(i)"> - </a>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">₹{{(i.price*i.quantity)}}</p>
                </td>
                <td class="cart_delete">
                  <a class="cart_quantity_delete" href="" @click="deleted(i)"
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>

              
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->

    <section id="do_action">
      <div class="container">
        <div class="heading">
          <h3>What would you like to do next?</h3>
         
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="total_area" >
              <ul>
                <li>Total <span>₹{{subtotal}}</span></li>
               
              </ul>
            <router-link to="/checkout"> <button class="btn btn-default check_out" @click="checkout()" >CheckOut </button></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Nav from "../includes/Nav.vue";
import Footer from "../includes/Footer.vue";
export default {
  name: "Cart",
  components: {
    Nav,
    Footer,
    
  },
  data() {
    return {
      item:"",
      check:"",
      
    };
  },
  computed:{
    subtotal()
    {
      var subcost=0;
      for(let i in this.item)
      {
         let arr1=this.item[i];
         subcost+=arr1.quantity*arr1.price;
      }
      return subcost;
    }
  },
  methods: {
    checkout()
    {
      this.check=JSON.parse(localStorage.getItem("myCart"));
      console.log(this.check)
      let arr = JSON.stringify(this.check);
      JSON.parse(localStorage.setItem("myCheckout",arr));
      this.$router.push('/checkout')
    },
    add(sum) {
      let index = this.item.indexOf(sum);
      this.item[index].quantity = this.item[index].quantity + 1;
      let arr = JSON.stringify(this.item);
      localStorage.setItem("myCart", arr);
    },
    substract(sub) {
      let index = this.item.indexOf(sub);
      this.item[index].quantity = this.item[index].quantity - 1;
      let arr = JSON.stringify(this.item);
      localStorage.setItem("myCart", arr);
    },
    deleted(del) {
      let index = this.item.indexOf(del);
      this.item.splice(index, 1);
      let arr = JSON.stringify(this.item);
      localStorage.setItem("myCart", arr);
    },
  },
  mounted() {
    this.item = JSON.parse(localStorage.getItem("myCart"));
    console.log(this.item);
  },
};
</script>

<style>
</style>