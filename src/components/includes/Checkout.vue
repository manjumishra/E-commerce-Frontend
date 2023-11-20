<template>
  <div>
    <Nav />
    <section id="cart_items">
      <div class="container">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active">Check out</li>
          </ol>
        </div>
        <!--/breadcrums-->

        <div class="step-one">
          <h2 class="heading">Step 1 : User Details</h2>
        </div>
        <div class="shopper-informations">
          <div class="row">
            <div class="col-sm-3">
              <div class="shopper-info">
                <p>Billing information</p>
                <form >
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="user.firstname"
                      id="firstName"
                      name="firstName"
                      placeholder="Firstname *"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.firstname.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.user.firstname.required"
                      class="invalid-feedback text-danger font-weight-bold"
                    >
                      First Name is required
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="user.lastname"
                      placeholder="Lastname *"
                      id="lastName"
                      name="lastName"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.lastname.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.user.lastname.required"
                      class="invalid-feedback text-danger font-weight-bold"
                    >
                      Last Name is required
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="user.email"
                      placeholder="Email Address *"
                      id="email"
                      name="email"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.email.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.email.$error"
                      class="invalid-feedback text-danger font-weight-bold"
                    >
                      <span v-if="!$v.user.email.required"
                        >Email is required</span
                      >
                      <span v-if="!$v.user.email.email">Email is invalid</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="user.phonenumber"
                      id="firstName"
                      name="firstName"
                      placeholder="Phone number *"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.phonenumber.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.user.phonenumber.required"
                      class="invalid-feedback text-danger font-weight-bold">
                      Phone number is required
                    </div>
                  </div><br><br><br>
                  <!-- <input
                    type="submit"
                    value="continue"
                    class="btn btn-primary"
                  /> -->
                </form>
              </div>
            </div>
            <div class="col-sm-6 clearfix">
              <div class="bill-to">
                <p>Shipping Address</p>
                <div class="shopper-info">
                  <form >
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="user.address1"
                      id="firstName"
                      name="firstName"
                      placeholder="Address 1*"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.address1.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.user.address1.required"
                      class="invalid-feedback text-danger font-weight-bold"
                    >
                      Address is required
                    </div>
                  </div>

                    <div class="form-group">
                      <input type="text" name="address 2" placeholder="Address 2" class="form-control"/>
                  </div>
                   

                  <div class="form-group">
                    <select placeholder="Select Country" v-model="user.country" :class="{
                        'is-invalid': submitted && $v.user.country.$error,
                      }">
                      <option  >Select Country</option>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                      </select>
                    <div
                      v-if="submitted && !$v.user.country.required"
                      class="invalid-feedback text-danger font-weight-bold"
                    >
                      Country Name is required
                    </div>
                  </div>
                      <div class="form-group">
                    <select placeholder="Select State" v-model="user.state" :class="{
                        'is-invalid': submitted && $v.user.state.$error,
                      }">
                       <option>-- State / Province / Region --</option>
                      <option>Madhya Pradesh</option>
                      <option>Indore</option>
                      <option>Maharashtra</option>
                      <option>Uttar Pradesh</option>
                      <option>Assam </option>
                      <option>Bihar</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                      </select>
                    <div
                      v-if="submitted && !$v.user.state.required"
                      class="invalid-feedback text-danger font-weight-bold"
                    >
                      State Field is required
                    </div>
                  </div>
                   <div class="form-group">
                    <input
                      type="text"
                      v-model="user.city"
                      id="firstName"
                      name="firstName"
                      placeholder="City"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.city.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.user.city.required"
                      class="invalid-feedback text-danger font-weight-bold"
                    >
                       City is required
                    </div>
                  </div>
                    <div class="form-group">
                    <input
                      type="text"
                      v-model="user.pincode"
                      id="firstName"
                      name="firstName"
                      placeholder="Zip/Pin Code *"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.pincode.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.user.pincode.required"
                      class="invalid-feedback text-danger font-weight-bold"
                    >
                      Pincode is required
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
           
          </div>
        </div>



        <div class="step-one">
          <h2 class="heading">Step 2 : Review your products</h2>
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
            <tbody>
              <tr v-for="i in item" :key="i.id">
                <td class="cart_product">
                  <a href=""
                    ><img
                      :src="'http://127.0.0.1:8000/uploads/' + i.image"
                      height="60"
                      width="60"
                      alt=""
                  /></a>
                </td>
                <td class="cart_description">
                  <h4>
                    <a href="">{{ i.name }}</a>
                  </h4>
                </td>
                <td class="cart_price"><br>
                  <p>₹{{ i.price}}</p>
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
                    <a class="cart_quantity_down" href="" @click="substract(i)">
                      -
                    </a>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">₹{{ (i.price * i.quantity) }}</p>
                </td>
                <td class="cart_delete">
                  <a class="cart_quantity_delete" href=""
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="step-one">
          <h2 class="heading">Step 3 : Payment Method</h2>
        </div>
        <div class="row mt-4" style="margin-left: 3px; margin-top: 3px">
          <div>
          <label><input type="radio" id="btn1" v-model="payment_mode" value="COD"/>&ensp;Cash on delivery </label>&nbsp; 
         <label><input type="radio" id="btn" v-model="payment_mode" value="Paypal" /> <label>
           Paypal </label></label>
          

          </div>
        </div>

        <div class="step-one">
          <h2 class="heading">Step 4 : Coupon & discounts</h2>
        </div>
        <div class="col-sm-6">
          <form @submit.prevent="coupon">
            <div class="form-group row col">
              <label>Have a Code ?:&emsp;</label>
              <input
                type="text"
                name="coupon"
                placeholder="Coupon Code"
                v-model="code"
              />
              <input
                type="submit"
                name="sub"
                value="Apply"
                style="margin-left: 20px"
              />
            </div>
          </form>
        </div>

        <table style="float: right">
          <tr>
            <td colspan="4">&nbsp;</td>
            <td colspan="2">
              <table class="table table-condensed total-result">
                <tr style="font-weight: bold">
                  <td>Cart Sub Total&emsp;</td>
                  <td>₹{{subtotal}}</td>
                </tr>
                <tr class="shipping-cost" style="font-weight: bold">
                  <td>Shipping Cost &emsp;</td>
                  <td>₹{{delivery}}</td>
                </tr>
                <tr style="font-weight: bold">
                  <td>Discount &emsp;</td>
                  <td>₹{{discount}}</td>
                </tr>
                <tr style="font-weight: bold">
                  <td>Total &emsp;</td>
                  <td>
                    <span>₹{{ total}}</span>
                  </td>
                </tr>
                <br />
                <tr>
                  <td id="pay"><Paypal/></td>
                </tr>
                <tr>
                  <td>
                   <input type="submit" value="Order Place" @click="ordernow()" class="btn btn-primary">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
      </div>
    </section>
    <!--/#cart_items-->

    <Footer />
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
import Nav from "../includes/Nav.vue";
import Paypal from "../includes/Paypal.vue";
import Footer from "../includes/Footer.vue";
import { ApplyCoupon } from "@/common/Service";
import { required, email, minLength } from "vuelidate/lib/validators";
import { UserDetails } from "@/common/Service";
import {UserOrderDetails} from "@/common/Service";
export default {
  name: "Checkout",
  components: {
    Nav,
    Footer,
    Paypal,
  },
  data() {
    return {
      item: "",
      checkoudata:"",
      code: "",
      check:"",
       payment_mode:"",
      user: {
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        address1: "",
        address2: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
       
      },
      submitted: false,
      useremail:localStorage.getItem('uid'),
      discount:0,
      usedcoupon:"",
      orderstatus:"",
    };
  },
  validations: {
    user: {
      firstname: { required },
      lastname: { required },
      email: { required, email },
      phonenumber: { required, minLength: minLength(10) },
      address1: { required },
      address2: { required },
      state: { required },
      country: { required },
      pincode: { required },
      city: { required },
    },
  },

  methods: {
    ordernow() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.user.$touch();
      if (this.$v.user.$invalid) {
        console.log("done")
      }
     const items = JSON.parse(localStorage.getItem("myCheckout"));
      items.forEach((item) => {
        let obj = {
          useremail: this.useremail,
          product_id: item.pid,
          quantity: item.quantity,
          price: item.price,
          total: item.price*item.quantity,
          productname: item.name,
          payment_mode:this.payment_mode,
          usedcoupon:this.usedcoupon,
          status:this.orderstatus,
        };
      console.log(obj);
        UserOrderDetails(obj).then((res) => {
          if (res) {
            console.log(res.data);
            this.$swal("Order placed","Thankyou for shopping Have a great day!!",'success')
             localStorage.removeItem('discount')
             this.check=JSON.parse(localStorage.getItem("myCheckout")); 
             let arr = JSON.stringify(this.check);
             localStorage.setItem("orders",arr)
             localStorage.removeItem("myCart")
             this.$router.push('/cart');
          
          }
          
        });
      });
      let data1 = {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        phonenumber: this.user.phonenumber,
        address: this.user.address1,
        city: this.user.city,
        pincode: this.user.pincode,
        state: this.user.state,
      };
      console.log(data1);
      UserDetails(data1).then((res) => {
        if (res)
         {
           console.log(res.data1)
        }
         else 
         alert(res.data1.msg);
      });
    },




    add(sum) {
      let index = this.item.indexOf(sum);
      this.item[index].quantity = this.item[index].quantity + 1;
      let arr = JSON.stringify(this.item);
      localStorage.setItem("myCheckout", arr);
    },
    substract(sub) {
      let index = this.item.indexOf(sub);
      this.item[index].quantity = this.item[index].quantity - 1;
      let arr = JSON.stringify(this.item);
      localStorage.setItem("myCheckout", arr);
    },
    deleted(del) {
      let index = this.item.indexOf(del);
      this.item.splice(index, 1);
      let arr = JSON.stringify(this.item);
      localStorage.setItem("myCheckout", arr);
    },

    //For apply coupon
    coupon() {
      let data = { coupon_code: this.code };
      ApplyCoupon(data)
        .then((res) => {
          if (res) {
             localStorage.setItem("discount",res.data.coupon_value);
             this.discount=localStorage.getItem('discount')
            localStorage.setItem('usedcoupon',res.data.coupon_code);
            this.usedcoupon=localStorage.getItem("usedcoupon");
            this.orderstatus=localStorage.getItem('status');
            localStorage.setItem('totalprice',this.total);
            this.$swal(res.data.msg, "", "success");
          } 
          else {
            this.$swal(res.data.msg, "","error");
          }
        })
        .catch((err) => {
          console.log("SOmething Wrong " + err);
        });
    },
  },
  computed: {
    
    subtotal() {
      var subcost = 0;
      for (let i in this.item) {
        let arr1 = this.item[i];
        subcost += arr1.quantity * arr1.price;
      }
      return subcost;
    },
    delivery(){
      let charge=0;
      if(this.subtotal<500)
       {
          charge=50;
       }
       else
       charge="Free";
       return charge;
    },
    total() {
       let totalprice = 0;
      let totalcost = this.subtotal;
      let charge=this.delivery;
      let amount=0;
      if(this.delivery!="Free"){
         amount= totalcost + totalprice + charge- this.discount;
        return amount;
      }
      else
      {
      // return totalcost + totalprice - this.discount;
       amount= totalcost + totalprice - this.discount;
       return amount;

      }
     
    },
  },
  mounted() {
    this.item = JSON.parse(localStorage.getItem("myCheckout"));
    console.log(this.item)

     $(document).ready(function(){
       $("#pay").hide();
     },
     $('#btn').click(function(){
       $("#pay").show();
     }),
      $('#btn1').click(function(){
       $("#pay").hide();
     })
     );
  },
};
</script>

<style>
</style>