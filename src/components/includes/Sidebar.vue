<template>
  <div>
    <router-view></router-view>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="left-sidebar">
              <h2>Category</h2>
              <div class="panel-group category-products" id="accordian">
                <!--category-productsr-->
             
                <div class="panel panel-default">
                  <div class="panel-heading" v-for="(category, index) in title" v-bind:key="index" v-bind:class="index == 0 ? 'item active' : 'item'">
                    <h4 class="panel-title"><router-link :to="/category/+category.id">{{category.title}}</router-link></h4>
                  </div>
                </div>
              </div>
              <!--/category-products-->

              <!-- <div class="brands_products">
                <h2>Brands</h2>
                <div class="brands-name">
                  <ul class="nav nav-pills nav-stacked">
                    <li>
                      <a href="#"> <span class="pull-right">(50)</span>Acne</a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="pull-right">(56)</span>Grüne Erde</a
                      >
                    </li>
                   
                  </ul>
                </div>
              </div> -->
              
              <!--/brands_products-->


              <div class="shipping text-center">
                <!--shipping-->
                <img src="/images/home/shipping.jpg" alt="" />
              </div>
              <!--/shipping-->
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import {category} from "@/common/Service";
import axios from 'axios';
export default {
  name: "Sidebar",

   data() {
    return {
        title:null,
      
    };
  },
 mounted(){
    const url="http://127.0.0.1:8000/api/category";
    axios.get(url).then((res)=>
    {
      this.title=res.data;
      console.log(res.data.title);
    })
 },

};

</script>

<style>
</style>
