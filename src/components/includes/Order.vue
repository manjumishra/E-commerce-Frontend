<template>
  <div>
      <Nav/>
      <section>
      <div class="container">
        <div class="row">
           <h2 class="title text-center">My Orders</h2>
           <div class="col-sm-10 padding-right">
            <h3> View / <router-link to="/trackorder">Track Orders</router-link></h3>
            <div>
                <table class="table table-condensed" border="1">
                    <thead>
                        <tr>
                            <td>Sr.No.</td>
                            <td>Products ID</td>
                            <td>Product Name</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Total</td>
                            <td>Action</td>
                            
                        </tr>
                    </thead>
                    <tbody v-for="order in orders" :key="order.id">
                        <tr>
                            <td class="text-center">{{ '#'}}</td>
                            <td>{{ order.pid }}</td>
                            <td>{{ order.name }}</td>
                            <td>{{ order.quantity }}</td>
                            <td>{{ order.price }}</td>
                            <td>{{ order.quantity*order.price }}</td>
                            <td>
                              <router-link to="/trackorder"><i class="fa fa-map-marker"></i> Track</router-link>
                            </td>
                             
                        </tr>
                    </tbody>
                </table>
            </div>
           </div>
        </div>
      </div>
      </section>
      <Footer/>
  </div>
</template>

<script>
import Nav from "../includes/Nav.vue";
import Footer from "../includes/Footer.vue"
export default {
  name:"Order",
  components: { Nav, Footer },
  data() {
    return {
    
      orders: null,
      useremail:localStorage.getItem('uid'),
     
    };

  },
  mounted() {
  this.orders = JSON.parse(localStorage.getItem("orders"));
    console.log(this.orders);
  },
}
</script>

<style>

</style>