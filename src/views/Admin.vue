<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="adminPanel container">
    <router-link :to="{ name: 'Product' }">
      <button type="button" class="btn btn-primary btn-lg">
        Admin Products
      </button>
    </router-link>
    <router-link :to="{ name: 'Category' }">
      <button type="button" class="btn btn-primary btn-lg">
        Admin Categories
      </button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.adminPanel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.adminPanel button {
  font-size: 30px;
  width: fit-content;
  margin: 55px 0;
}
</style>
