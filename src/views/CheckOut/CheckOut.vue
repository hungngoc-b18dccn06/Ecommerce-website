<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
    <div class="div_class">
      <h3>You will be redirected to payment page</h3>
      <button
        class="checkout_button"
        id="proceed-to-checkout"
        @click="goToCheckout()"
      >
        Make payment
      </button>
    </div>
  </template>
  <script>
    import axios from 'axios';
    // eslint-disable-next-line no-unused-vars
    import Stripe from 'stripe';
  export default {
    data() {
      return {
        stripeAPIToken: 'pk_test_51LtNb5I1dguzhv6OHYzqSLBqVqFq2OvWJBvF26jiW0uJzSpriTzpllqDO625iusuaICtyU3EmkGiFalRvNrX78vT00c9n7fuSB',
        stripe: '',
        token: null,
        sessionId: null,
        checkoutBodyArray: [],
      };
    },
  
    name: 'CheckOut',
    props: ['baseURL'],
    methods: {
      configureStripe() {},
  
      getAllItems() {
        axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              let products = response.data;
              let len = Object.keys(products.cartItems).length;
              for (let i = 0; i < len; i++)
                this.checkoutBodyArray.push({
                  imageUrl: products.cartItems[i]?.product.imageURL,
                  productName: products.cartItems[i]?.product.name,
                  quantity: products.cartItems[i]?.quantity,
                  price: products.cartItems[i]?.product.price,
                  productId: products.cartItems[i]?.product.id,
                  userId: products.cartItems[i]?.userId,
                });
            }
          },
          (err) => {
            console.log(err);
          }
        );
      },
  
      goToCheckout() {
        axios
          .post(
            this.baseURL + 'order/create-checkout-session',
            this.checkoutBodyArray
          )
          .then((response) => {
            localStorage.setItem('sessionId', response.data.sessionId);
            this.stripe.redirectToCheckout({
              sessionId: response.data.sessionId,
            });
          })
      },
    },
    mounted() {

      this.token = localStorage.getItem('token');
      this.stripe = window.Stripe(this.stripeAPIToken);
      this.getAllItems();
      this.goToCheckout();
    },
  };
  </script>
  
  <style scoped>
  .alert {
    width: 50%;
  }
  
  .div_class {
    margin-top: 5%;
  }
  
  .checkout_button {
    background-color: #5d3dec;
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
  }
  
  .checkout_button:focus {
    outline: none;
    box-shadow: none;
  }
  
  .checkout_button:disabled {
    background-color: #9b86f7;
    border: none;
    color: white;
    margin-left: 15%;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    cursor: not-allowed;
  }
  </style>