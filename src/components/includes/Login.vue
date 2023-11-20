<template>
  <div>
    <Nav />
    <section id="form">
      <!--form-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-sm-offset-1">
            <div class="login-form">
              <!--login form-->
              <h2>Login to your account</h2>
              <form @submit.prevent="postLogin">
                   <div class="form-group">
                  <input
                    type="email"
                    v-model="login.email"
                    placeholder="Email Address"
                    id="email1"
                    name="email"
                    class="form-control"
                    :class="{ 'is-invalid': submit && $v.login.email.$error }"
                  />
                  <div
                    v-if="submit && $v.login.email.$error"
                    class="invalid-feedback text-danger font-weight-bold"
                  >
                    <span v-if="!$v.login.email.required"
                      >Email is required</span
                    >
                    <span v-if="!$v.login.email.email">Email is invalid</span>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    v-model="login.password"
                    placeholder="Password"
                    id="password1"
                    name="password"
                    class="form-control"
                    :class="{
                      'is-invalid': submit && $v.login.password.$error,
                    }"
                  />
                  <div
                    v-if="submit && $v.login.password.$error"
                    class="invalid-feedback text-danger font-weight-bold"
                  >
                    <span v-if="!$v.login.password.required"
                      >Password is required</span
                    >
                    <span v-if="!$v.login.password.minLength"
                      >Password must be at least 6 characters</span
                    >
                  </div>
                </div>
                <span>
                  <input type="checkbox" class="checkbox" />
                  Keep me signed in
                </span>
                <button type="submit" class="btn btn-default">Login</button>
              </form>
            </div>
            <!--/login form-->
          </div>
          <div class="col-sm-1">
            <h2 class="or">OR</h2>
          </div>
          <div class="col-sm-4">
            <div class="signup-form">
              <!--sign up form-->
              <h2>New User Signup!</h2>
              <form @submit.prevent="handleSubmit">
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

                <button type="submit" class="btn btn-default">Signup</button>
              </form>
            </div>
            <!--/sign up form-->
          </div>
        </div>
      </div>
    </section>
    <!--/form-->
    <Footer />
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Nav from "../includes/Nav.vue";
import Footer from "../includes/Footer.vue";
import { userLogin } from "@/common/Service";
import { saveToken } from "@/common/Jwttoken";
import {userRegister} from "@/common/Service";
import { mapActions } from "vuex";
import store from "@/store/Store";
import * as type from "@/store/type";

export default {
  name: "Login",
  components: {
    Nav,
    Footer,
  },
  computed:mapActions({
    email:state=>state.opt,
  }),
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: "",
      },

      login: {
        email: null,
        password: null,
      },
      submitted: false,
      submit:false,
    };
  },
  validations: {
    user: {
      firstname: { required },
      lastname: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirm_password: { required, sameAsPassword: sameAs("password") },
    },
    login: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
  methods: {
    handleSubmit() 
    {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.user.$touch();
      if (this.$v.user.$invalid) {
        return;
      }
      let formdata={firstname:this.user.firstname,
      lastname:this.user.lastname,
      email:this.user.email,
      password:this.user.password,
      confirm_password:this.user.confirm_password};
      console.log(formdata);
      // alert(formdata)
      userRegister(formdata)
      .then(res=>{
             if(res){
                
                // alert(" Registered Successfully")
                this.$swal(res.data.message,"","success")
                console.log(res.data);
      
            }
            else
            {
              this.$swal(res.data.message,"","error")
            }
        })
        .catch(err=>{
            console.log("SOmething Wrong "+err)
        })
      
    },

    postLogin() {
       this.submit = true;

      // stop here if form is invalid
      this.$v.login.$touch();
      if (this.$v.login.$invalid) {
        return;
      }

     // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.login));
      let formData = { email: this.login.email, password: this.login.password };
      console.log(formData);
      userLogin(formData)
        .then((res) => {
          if (res)
       {
         saveToken(res.data.access_token);
        localStorage.setItem('uid',res.data.email);
        console.log(res.data)
       store.dispatch({
          type:type.opt,
           mail:res.data.email
        })
       }
             if(res.data.email){
           // alert(res.data.msg);
             this.$swal('Login Successfully','','success');
            this.$router.push('/');
             }
         
          else
            //alert(res.data.msg);
             this.$swal(res.data.msg,'','warning');
        })
        .catch((err) => {
          console.log("Something Wrong " + err);
        });
     }
    },
};
</script>

<style>
</style>