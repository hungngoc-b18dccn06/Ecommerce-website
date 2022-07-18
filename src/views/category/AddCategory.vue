<template>
 <div class="page-wrapper bg-dark p-t-100 p-b-50">
        <div class="wrapper wrapper--w900">
            <div class="card card-6">
                <div class="card-heading">
                    <h2 class="title">Add Category</h2>
                </div>
                <div class="card-body">
                    <form method="POST">
                        <div class="form-row">
                            <div class="name">Name Category</div>
                            <div class="value">
                              <input type="text" class="input--style-6" v-model="categoryName" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Description </div>
                            <div class="value">
                                <div class="input-group">
                                  <textarea type="text" class="input--style-6" v-model="description" />
                                </div>
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
                    </form>
                </div>
                <div class="card-footer">
                    <button class="btn btn--radius-2 btn--blue-2" type="submit" @click="addCategory">Add Category</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import sweetalert from "sweetalert";

export default {
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
    };
  },
  methods: {
    addCategory() {
      console.log(this.categoryName, this.description);
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageUrl,
      };
      const baseURL = "https://limitless-lake-55070.herokuapp.com";
      axios({
        method: "post",
        url: `${baseURL}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          sweetalert({
            text: "Category added successfully",
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
@import '../../assets/form.css';

.page-wrapper.bg-dark.p-t-100.p-b-50 {
    background: #fff !important;
    padding-bottom: 0px !important;
    min-height: 0px !important;
}
</style>
