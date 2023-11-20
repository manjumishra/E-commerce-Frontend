<template>
  <div>
      <Nav/>
    <!-- <Slider/> -->
   
       <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="left-sidebar">
             <Sidebar/>
            </div>
          </div>
            <div class="col-sm-9 padding-right">
          <div class="features_items"
            v-for="(items, index) in item"
              v-bind:key="index"
              v-bind:class="index == 0 ? 'item active' : 'item'">
            <!--features_items-->
            <h2 class="title text-center">{{items.title}}</h2>
               <div>
                 {{items.description}}
               </div>
               <img :src="'http://127.0.0.1:8000/uploads/'+items.image" alt="" />
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
// import Slider from '../includes/Slider.vue';
import Sidebar from '../includes/Sidebar.vue';
import Footer from '../includes/Footer.vue';
import {CMSByid} from "@/common/Service";
export default {
name:'Category',
components:{
    Nav,
    // Slider,
    Sidebar,
    Footer,
},

 data() {
    return {
        item:"",
        pid:this.$route.params.id
    };
  },
mounted()
{
    CMSByid(this.pid).then((res)=>
    {
      this.item=res.data;
      console.log(res.data);
    })
}



}
</script>

<style>

</style>