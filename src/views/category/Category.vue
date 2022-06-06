<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="txtelegantshadow">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button
            type="button"
            class="btn btn-info"
            style="float: right; height: 60px; font-size: larger"
          >
            Add Category
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <CategoryBox :category="category"> </CategoryBox>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  components: { CategoryBox },
  props: ["categories"],
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com",
    };
  },
};
</script>
<style scoped>
h3 {
  font-size: 35px;
  font: bold 2.5em/1.5 Bebas, sans-serif;
  color: #5ca17c; /*non-webkit fallback*/

  text-transform: uppercase;
  background-image: linear-gradient(
    to bottom,
    #26bda6,
    #ff9f65,
    #ded37e,
    #26bda6
  );
  background-size: auto 250%;
  transition: background-position 0.5s;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 200px;
  background-position: 0 100%;
  height: 120px;
}
h3:hover {
  background-position: 0 0;
  cursor: pointer;
}
</style>
