<template>
  <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.imageURL"
        alt="Product Image"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }"
        ><h5 class="card-title">{{ product.name }}</h5></router-link
      >
      <p class="card-text">{{ product.price }}$</p>
      <p class="card-text">
        {{ product.description.substring(0, 100) }}
      </p>
      <router-link
        id="edit-product"
        :to="{ name: 'EditProduct', params: { id: product.id } }"
        v-show="$route.name == 'Product'">
        <button class="btn btn-primary">Edit Product</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  props: ["product"],
  methods: {},
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>