<template>
<Navbar />
  <div style="min-height: 60vh">
    <router-view
      v-if="products && categories"
      :baseURL="baseURL"
      :products="products"
      :categories="categories"
      @fetchData="fetchData"
    >
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
   components: {Footer,Navbar,Contact},
    data() {
        return {
            baseURL: "https://limitless-lake-55070.herokuapp.com/",
            products: null,
            categories: null,
        };
    },
    methods: {
        async fetchData() {
            await axios
                .get(this.baseURL + "category/")
                .then((res) => {
                this.categories = res.data.slice(0,15);
                console.log(res.data)
            })
                .catch((err) => console.log("err", err));
            //call api product
            await axios
                .get(this.baseURL + "product/")
                .then((res) => {
                this.products = res.data.slice(0,5);
            })
                .catch((err) => console.log("err", err));
        },
    },
    mounted() {
        this.fetchData();
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
