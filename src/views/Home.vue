<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">

      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded"><a href="#start-shopping" class="bg-white px-2 py-2 rounded" id="heading">Start
              Shopping</a></h3>
          <p id="content" class="lead mb-0 bg-dark p-1 rounded">Amazon.com is a vast Internet-based enterprise that
            sells books, music, movies, housewares, electronics, toys, and many other goods, either directly or as the
            middleman between other retailers and Amazon.com's millions of customers.</p>
        </header>
      </div>
    </div>

    <div id="start-shopping" class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2 class="pt-3">Top Categories</h2>
        </div>
      </div>

      <div class="row">
        <div v-for="index in this.category_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
          <CategoryBox :category="categories[index-1]">
          </CategoryBox>
        </div>
      </div>
    </div>

    <div id="start-shopping" class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>

      <div class="row">
        <div v-for="index in this.product_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
          <ProductBox :product="products[index-1]">
          </ProductBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import CategoryBox from '../components/Category/CategoryBox.vue';
import ProductBox from '../components/Product/ProductBox.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: { CategoryBox, ProductBox },
  props: ["products", "baseURL", "categories"],
  data(){
      return{
        category_size:0,  
        product_size:0
      }
    },
    mounted(){
      this.category_size = this.categories.length;
      this.category_size = Math.min(6, this.category_size);
      console.log('aa', this.category_size )

      this.product_size = this.products.length;
      this.product_size = Math.min(8, this.product_size);
    }

};
</script>
<style scoped>
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#background-div {
  background: url(../assets/me.jpeg)
}

#heading {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  opacity: 0.8;
  font-family: 'Josefin Sans', sans-serif;
}

#content {
  opacity: 0.8;
}

h2 {
  font-family: 'Josefin Sans', sans-serif;
}
</style>