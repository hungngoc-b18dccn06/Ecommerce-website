<template>
  <div class="container" style="margin: auto">
    <div class="page-wrapper bg-dark p-t-100 p-b-50">
      <div class="wrapper wrapper--w900">
        <div class="card card-6">
          <div class="card-heading">
            <h2 class="title">Add Product</h2>
          </div>
          <div class="card-body">
            <form method="POST">
              <div class="form-row">
                <div class="name">Product</div>
                <div class="value">
                  <select class="form-control" v-model="categoryId" required>
                    <option v-for="category of categories" :key="category.id" :value="category.id">
                      {{ category.categoryName }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="name">Name</div>
                <div class="value">
                  <input type="text" class="input--style-6" v-model="name" />
                </div>
              </div>

              <div class="form-row">
                <div class="name">Description</div>
                <div class="value">
                  <textarea type="text" class="input--style-6" v-model="description" required />
                </div>
              </div>

              <div class="form-row">
                <div class="name">Upload Image</div>
                <div class="value">
                  <div class="input-group js-input-file">
                    <input type="text" class="input--style-6" v-model="imageUrl" />
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="name">Price</div>
                <div class="value">
                  <input type="number" class="input--style-6" v-model="price" required />
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <button class="btn btn--radius-2 btn--blue-2" type="submit" @click="addProduct">
              Add Product
            </button>
          </div>
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
      id: null,
      categoryId: null,
      name: null,
      description: null,
      imageURL: null,
      price: null,
    };
  },
  props: ["categories", "baseURL"],
  methods: {
    addProduct() {
      const newProduct = {
        categoryId: this.categoryId,
        name: this.name,
        description: this.description,
        image: this.imageURL,
        price: this.price,
      };
      axios
        .post(this.baseURL + "product/add", newProduct)
        .then(() => {
          this.$router.push({ name: "Product" });
          swal({
            text: "Product added successfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
@import "../../assets/form.css";

.page-wrapper.bg-dark.p-t-100.p-b-50 {
  background: #fff !important;
  padding-bottom: 0px !important;
  min-height: 0px !important;
}
</style>
