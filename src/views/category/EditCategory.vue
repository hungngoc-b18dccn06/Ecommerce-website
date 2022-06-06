<template>
  <div class="page-wrapper bg-dark p-t-100 p-b-50">
        <div class="wrapper wrapper--w900">
            <div class="card card-6">
                <div class="card-heading">
                    <h2 class="title">Edit Category</h2>
                </div>
                <div class="card-body">
                    <form v-if="category">
                        <div class="form-row">
                            <div class="name">Name Category</div>
                            <div class="value">
                              <input type="text" class="input--style-6" v-model="category.categoryName" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Description </div>
                            <div class="value">
                                <div class="input-group">
                                  <textarea type="text" class="input--style-6" v-model="category.description" />
                                   
                                </div>
                            </div>
                        </div>
          
                        <div class="form-row">
                            <div class="name">Upload Image</div>
                            <div class="value">
                                <div class="input-group js-input-file">
                                   <input type="text" class="input--style-6" v-model="category.imageUrl" required />
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button class="btn btn--radius-2 btn--blue-2" type="submit" @click="editCategory">Update Category</button>
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
      category: null,
      id: null,
    };
  },
  props: ["categories", "baseURL"],
   methods : {
    async editCategory() {
      delete this.category["products"]
      await axios.post(this.baseURL+"category/update/"+this.id, this.category)
     .then(() => {
          this.$router.push({ name: "Category" });
        swal({
          text: "Category Updated Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id == this.id);
    console.log("category", this.category);
  },
};
</script>
<style scoped>
@import '../../assets/form.css';
  .card-6 .card-heading {
      background-color: #007bff !important;
  }
.page-wrapper.bg-dark.p-t-100.p-b-50 {
    background: #fff !important;
    padding-bottom: 0px !important;
    min-height: 0px !important;
}
</style>