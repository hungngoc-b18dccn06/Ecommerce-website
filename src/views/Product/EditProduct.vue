<template>
  <div class="page-wrapper bg-dark p-t-100 p-b-50">
    <div class="wrapper wrapper--w900">
      <div class="card card-6">
        <div class="card-heading">
          <h2 class="title">Edit Product</h2>
        </div>
        <div class="card-body">
          <form v-if="product">
            <div class="form-row">
              <div class="name">Category</div>
              <div class="value">
                <select class="form-control" v-model="product.categoryId" required>
                  <option v-for="category of categories" :key="category.id" :value="category.id">
                    {{ category.categoryName }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="name">Name</div>
              <div class="value">
                <div class="input-group">
                  <input type="text" class="input--style-6" v-model="product.name" required />
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="name">Description</div>
              <div class="value">
                <div class="input-group js-input-file">
                  <input type="text" class="input--style-6" v-model="product.description" required />
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="name">imageURL</div>
              <div class="value">
                <div class="input-group js-input-file">
                  <input type="text" class="input--style-6" v-model="product.imageURL" required />
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="name">Price</div>
              <div class="value">
                <div class="input-group js-input-file">
                  <input type="text" class="input--style-6" v-model="product.price" required />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <button class="btn btn--radius-2 btn--blue-2" type="submit" @click="editProduct">
            Update Category
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      product: null,
      id: null,
      category: null,
    };
  },
  props: ["products", "baseURL", "categories"],
  methods: {
    async editProduct() {
      axios
        .post(this.baseURL + "product/update/" + this.id, this.product)
        .then((res) => {
          //sending the event to parent to handle
          this.$emit("fetchData");
          this.$router.push({ name: "Product" });
          swal({
            text: "Product Updated Successfully!",
            icon: "success",
            closeOnClickOutside: false,
          });
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    console.log("product", this.products);
  },
};
</script>
<style scoped>
@import "../../assets/form.css";

.card-6 .card-heading {
  background-color: #007bff !important;
}

.page-wrapper.bg-dark.p-t-100.p-b-50 {
  background: #fff !important;
  padding-bottom: 0px !important;
  min-height: 0px !important;
}
</style>
