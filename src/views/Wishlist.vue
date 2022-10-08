<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Your WishListtttt</h4>
      </div>
    </div>

    <div class="row">
      <div v-for="product of products" :key="product.id"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
        <ProductBox :product="product"> </ProductBox>
      </div>
    </div>
  </div>
</template>   

<script>
import ProductBox from "../components/Product/ProductBox.vue";
import axios from "axios";
export default {
  data() {
    return {
      products: null,
      token: null,
      flag: 0,
      test: null
    };
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product",
  components: { ProductBox },
  props: ["baseURL"],
  methods: {
    fetchWishlist() {
      // fetch products
      axios
        .get(`${this.baseURL}wishlist/${localStorage.getItem("token")}`)
        .then(
          (response) => {
            this.products = response.data.slice(0, 10);
            this.test = response.data.filter(e => e.id);
            console.log(this.test);
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchWishlist();
  },
};
</script>

<style scoped>
h4 {
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>
