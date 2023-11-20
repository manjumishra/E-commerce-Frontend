<template>
  <div>
    <Nav/>
     <section >
      <!--form-->
      <div class="container mt-4">
          <div class="col-sm-4 col-sm-offset-4">
            <div class="login-form">
              <!--login form-->
              <h2 class="text-dark">Reset your Password</h2>
              <form @submit.prevent="reset">
                   <div class="form-group">
                  <input
                    type="password"
                    v-model="user.oldpassword"
                    placeholder="Old Password"
                    id="password1"
                    name="password"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.oldpassword.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.oldpassword.$error"
                    class="invalid-feedback text-danger font-weight-bold"
                  >
                    <span v-if="!$v.user.oldpassword.required"
                      >Old Password is required</span
                    >
                    <span v-if="!$v.user.oldpassword.minLength"
                      >Password must be at least 6 characters</span
                    >
                  </div>
                </div>
                 <div class="form-group">
                  <input
                    type="password"
                    v-model="user.password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.password.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.password.$error"
                    class="invalid-feedback text-danger font-weight-bold"
                  >
                    <span v-if="!$v.user.password.required"
                      >Password is required</span
                    >
                    <span v-if="!$v.user.password.minLength"
                      >Password must be at least 6 characters</span
                    >
                  </div>
                </div>
                 <div class="form-group">
                  <input
                    type="password"
                    v-model="user.confirm_password"
                    placeholder="confirm Password"
                    id="confirm_password"
                    name="confirm_password"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.confirm_password.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.confirm_password.$error"
                    class="invalid-feedback text-danger font-weight-bold"
                  >
                    <span v-if="!$v.user.confirm_password.required"
                      >Confirm Password is required</span
                    >
                    <span v-else-if="!$v.user.confirm_password.sameAsPassword"
                      >Passwords must match</span
                    >
                  </div>
                </div>

                 
                <button type="submit" class="btn btn-default">Change Password</button>
              </form>
            </div><br><br>
            <!--/login form-->
          </div>
         
        </div>
      <!-- </div> -->
    </section>
    <Footer/>
  </div>
</template>

<script>
import Nav from '../includes/Nav.vue';
import Footer from '../includes/Footer.vue';
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import {changePassword} from "@/common/Service";
export default {
name:'Change_pass',
components:{
 Nav,
 Footer
},

 data() {
    return {
      user: {
        oldpassword: "",
        password: "",
        confirm_password: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
  
      oldpassword: { required, minLength: minLength(6) },
      password: { required, minLength: minLength(6) },
      confirm_password: { required, sameAsPassword: sameAs("password") },
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

      let formdata={oldpassword:this.user.oldpassword,
      password:this.user.password,
      confirm_password:this.user.confirm_password};
     changePassword(formdata).then((res)=>
     {
       if(res)
       {
         this.$swal('Password updated Successfully','success');
            
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