<template>
  <div>
    <Nav />
    
     <section class="mt-4 container">
      <!--form-->  
          <div class="col-md-4 col-sm-offset-4">
            <div class="login-form">
            
              <h2 class="title" style="color:orange;font-weight:bold;">TRACK ORDER</h2><br><br>
              <form @submit.prevent="track">
                 
                <div class="form-group">
                    <label >Useremail</label>
                  <input
                    type="text"
                    placeholder="enter useremail to track order !!"
                    id="email"
                    name="email"
                    class="form-control"
                    v-model="user1.email"
                    :class="{ 'is-invalid': submitted && $v.user1.email.$error }"
                  />
                  <div
                    v-if="submitted && $v.user1.email.$error"
                    class="invalid-feedback text-danger font-weight-bold"
                  >
                    <span v-if="!$v.user1.email.required"
                      >Useremail is required</span
                    >
                    <span v-if="!$v.user1.email.email">Useremail is invalid</span>
                  </div>
                </div>

                <div class="form-group">
                    <label >Tracking Id</label>
                  <input
                    type="text"
                    placeholder="enter your tracking Id !!"
                    id="tracking_id"
                    name="tracking_id"
                    class="form-control"
                    v-model="user1.tracking_id"
                    :class="{ 'is-invalid': submitted && $v.user1.tracking_id.$error }"
                  />
                  <div
                    v-if="submitted && $v.user1.tracking_id.$error"
                    class="invalid-feedback text-danger font-weight-bold"
                  >
                    <span v-if="!$v.user1.tracking_id.required"
                      >Tracking id is required</span
                    >
      
                  </div>
                </div>
                 
                <button type="submit" class="btn btn-default">Track</button>
              </form><br><br> 
          
          <div class="container">
          <div class="" v-for="i in item"  :key="i.id">
             <h3><i class="fa fa-shopping-cart h2"></i> Your Orders :</h3><br>
            <div class="h4 ">
              <label>Product Name</label> : &emsp;<i>{{i.productname }}</i><br><br>
            </div>
            <div class="h4 ">
              <label>Price</label> : &emsp;<i>₹{{ i.price }}</i><br><br>
            </div>
            <div class="h4 ">
              <label>Quantity</label> : &emsp;<i>{{ i.quantity }}</i><br><br>
            </div>
            <div class="h4 ">
              <label>Total</label> : &emsp;<i>₹{{ i.total }}</i><br><br>
            </div>
             <div class="h4 ">
              <label>Payment Mode</label> : &emsp;<i>{{ i.payment_mode }}</i><br><br>
            </div>
            <div class="h4 ">
              <label>Order Status</label> : &emsp; <i>{{i.status}}</i> <i class="fa fa-check-circle h4 text-success"></i><br><br>
            </div>
            <br>
          </div>
        </div>
        </div><br>
          
          </div>
        
    </section>
    <Footer />
  </div>
</template>
<script>
import Nav from "../includes/Nav.vue";
import Footer from "./Footer.vue";
import axios from "axios";
// import {Trackorder} from '@/common/Service';
// import { getToken } from "@/common/Jwttoken";
// import { user} from '@/common/Url';
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "Trackorder",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
       user1:{
           email:"",
           tracking_id:"",
       },
        item:"",
      submitted: false,
      token:"",
      mytoken:"",
    };
  },
   validations: {
    user1: {
      email: { required, email },
      tracking_id: { required },
    },
   },
 methods:{
    track() 
    {
      this.submitted = true;
      this.$v.user1.$touch();
      if (this.$v.user1.$invalid) {
        return;
      }
     
    console.log(this.user1.tracking_id)
    // this.mytoken = getToken("access_token", this.token);
    // axios.get(user, { headers: { "Authorization": `Bearer ${this.mytoken}` } })
    //   .then((res) => {
    //     this.user=res.data;
    //    axios.get('http://127.0.0.1:8000/api/search/'+this.user1.tracking_id+'/'+this.user1.email).then(res=>
    //    {
    //      this.item=res.data;
    //      console.log(res.data);
    //    })

    //   });
   
       axios.get('http://127.0.0.1:8000/api/search/'+this.user1.tracking_id+'/'+this.user1.email)
       .then(res=>
       {
         this.item=res.data;
         console.log(res.data);
       
       })
      
    }

 },
 
};
</script>

<style>
</style>