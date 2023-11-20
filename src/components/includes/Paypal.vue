<template>
  <div>
    <div ref="paypal"></div>
  </div>
</template>

<script>
export default {
  name: "Paypal",

  data: function () {
    return {
      loaded: false,
      paidFor: false,
      data:"",
      product: {
        description: "E-Shopper",
      },
    };
  },
  mounted: function () {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AeiAmRs8_LWBvSKnQzAMVSYJG6zaclg8xX_2XI_wga-DsCMtHf_yyGl8JK6-fndd9G4PFowPZi7NDkfR&disable-funding=credit,card";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;
    window.paypal
    .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency: "USD",
                    value:(localStorage.getItem("totalprice"))*0.013,
                    //value:"945",
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
           // this.data=data;
            this.paidFor = true;
            console.log(order);
            localStorage.setItem('status',order.status);
            this.$swal("Thank You", "Your payment successfully submitted !!!", "success");
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);

     },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



