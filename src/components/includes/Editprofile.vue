<template>
  <div>
    <Nav/>
     <section class="mt-4 container">
      <!--form-->  
          <div class="col-sm-4 col-sm-offset-4">
            <div class="login-form">
            
              <h3 class="text-danger">Edit Profile</h3><br>
              <form @submit.prevent="reset">
                  <div class="form-group">
                  <input type="text" v-model="user.firstname"
                    id="firstName"
                    name="firstName"
                    placeholder="Firstname"
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
                    placeholder="Lastname"
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
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && $v.user.email.$error }"
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
                 
                <button type="submit" class="btn btn-default">Update</button>
              </form><br><br>
            </div>
            <!--/login form-->
          </div>
        
    </section>
    <Footer/>
  </div>
</template>

<script>
import Nav from '../includes/Nav.vue';
import Footer from '../includes/Footer.vue';
import { required, email } from "vuelidate/lib/validators";
import {changeProfile} from "@/common/Service";
export default {
name:'Change_pass',
components:{
 Nav,
 Footer
},

 data() {
    return {
      user: {
        firstname: localStorage.getItem('fname'),
        lastname: localStorage.getItem('lname'),
        email: localStorage.getItem('uid'),
      },
      submitted: false,
    };
  },
  validations: {
    user: {
  
      firstname: {required },
     lastname: { required },
      email: { required, email },
    },

  },

  methods:{
   reset() 
    {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.user.$touch();
      if (this.$v.user.$invalid) {
        return;
      }
       let formdata={firstname:this.user.firstname,lastname:this.user.lastname,email:this.user.email};
         changeProfile(formdata).then((res)=>
     {
       if(res)
       {
        
         this.$swal('Profile updated Successfully','success');
            
        }
         
          else
            //alert(res.data.msg);
             this.$swal(res.data.msg,'warning');
        })
        .catch((err) => {
          console.log("Something Wrong " + err);
        });
    
    }
  }

}
</script>

<style>

</style>