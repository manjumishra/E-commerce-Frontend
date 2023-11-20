<template>
  <div>
    <Nav />
    <div class="container col-10">
      <div class="col-sm-10 container bordered">
        <div class="fontweight-bold text-center">
          <div class="col-sm-12">
            <h2 class="title text-center">PROFILE</h2>
          </div>
       
           <h1 class="text-warning">Welcome : {{user.firstname}}</h1>
        </div><br>

        <div class="container">
          <div class="col-sm-4 col-sm-offset-3">
             <h3># Your Details :</h3><br>
            <div class="h4 ">
              <label>Firstname</label> : &emsp;<i>{{ user.firstname }}</i><br><br>
            </div>
            <div class="h4 ">
              <label>Lastname</label> : &emsp;<i>{{ user.lastname }}</i><br><br>
            </div>
            <div class="h4 ">
              <label>Email</label> : &emsp;<i>{{ user.email }}</i><br><br>
            </div>
            <br>
            <div>
              <h3 class="fa fa-th mb-4"> Manage profile</h3><br><br>
            <router-link to="/changepass" class="h4 text-info fa fa-key"> Reset Password</router-link><br><br>
            <router-link to="/editprofile" class="h4 text-info fa fa-edit"> Edit Profile</router-link>
            </div>
          </div>
        </div>
      </div>
    </div><br><br><br><br>
    <Footer />
  </div>
</template>

<script>
import Nav from "../includes/Nav.vue";
import Footer from "./Footer.vue";
import axios from "axios";
import { getToken } from "@/common/Jwttoken";
import { user} from '@/common/Url';
export default {
  name: "Profile",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      token: "",
      mytoken: "",
      user: "",
     
    };
  },
  mounted() {
    this.mytoken = getToken("access_token", this.token);
    axios.get(user, { headers: { "Authorization": `Bearer ${this.mytoken}` } })
      .then((res) => {
        this.user = res.data;
        localStorage.setItem('fname',res.data.firstname)
        localStorage.setItem('lname',res.data.lastname)
        console.log(res.data);
      });
  },
};
</script>

<style>
</style>