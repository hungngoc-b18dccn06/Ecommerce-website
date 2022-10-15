<template>
  <Navbar
    :cartCount="cartCount"
    @resetCartCount="resetCartCount"
    v-if="!['Signup', 'Signin'].includes($route.name)"
  />
  <div style="min-height: 60vh">
    <router-view v-if="products && categories" :baseURL="baseURL" :products="products" :categories="categories"
      @fetchData="fetchData">
    </router-view>
  </div>
  <Contact />
  <Footer />
</template>
<script>
import axios from "axios";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Footer, Navbar, Contact },
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      token: null,
      key: 0,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      await axios
        .get(this.baseURL + "category/")
        .then((res) => {
          this.categories = res.data.slice(0, 15);
        })
        .catch((err) => console.log("err", err));
      //call api product
      await axios
        .get(this.baseURL + "product/")
        .then((res) => {
          this.products = res.data.slice(0, 5);
          console.log(res.data);
        })
        .catch((err) => console.log("err", err)); 
        if (this.token) {
        await axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              this.cartCount = Object.keys(response.data.cartItems).length;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.fetchData();
    console.log(this.token)
    
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
