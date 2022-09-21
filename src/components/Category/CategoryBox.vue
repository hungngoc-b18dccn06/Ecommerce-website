<template>
  <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="category.imageUrl"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'SumProducts', params: { id: category.id } }"
        ><h5 class="card-title">{{ category.categoryName }}</h5></router-link
      >
      <p class="card-text">
        {{ category.description }}
      </p>
      <router-link
        id="edit-category"
        :to="{ name: 'EditCategory', params: { id: category.id } }"
        v-show="$route.name == 'Category'"
      >
        <button class="btn btn-primary">Edit Category</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {
    SumProducts() {
      this.$router.push({
        name: "SumProducts",
        params: { id: this.category.id },
      });
    },
  },
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>
