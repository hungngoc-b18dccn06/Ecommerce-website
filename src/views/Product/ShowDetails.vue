<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 col-12">
                <img :src="product.imageURL" :alt="product.name" class="img-fluid" />
            </div>
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <!-- <h6 class="category font-italic">{{ category.categoryName }}</h6> -->
                <h6 class="font-weight-bold">$ {{ product.price }}</h6>
                <p>
                    {{ product.description }}
                </p>
                <div class="d-flex flex-row justify-content-between">
                    <div class="input-group col-md-3 col-4 p-0" style="width: 4 0px">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Quantity</span>
                        </div>
                        <input class="form-control" type="number" style="width: 20px" />
                    </div>

                    <div class="input-group col-md-3 col-4 p-0">
                        <button type="button" id="add-to-cart-button" class="btn" @click="addToCart(this.id)">
                            Add to Cart
                            <ion-icon name="cart-outline" v-pre></ion-icon>
                        </button>
                    </div>
                </div>
                <div class="features pt-3">
                    <h5><strong>Features</strong></h5>
                    <ul>
                        <li>Chuột chuyên game không dây Wolf X8 2.4 GHz</li>
                        <li>Tương thích nhiều dòng sản phẩm</li>
                        <li>Thiết kế siêu nhỏ gọn,hiện đại màu sắc ấn tượng</li>
                        <li>Sử dụng thoải mái trong vòng bán kính 10m</li>
                    </ul>
                </div>
                <button id="wishlist-button" class="btn mr-3 p-1 py-0">
                    {{ wishlistString }}
                </button>
                <button id="show-cart-button" type="button" class="btn btn-primary" @click="listCartItems()">
                    Show Cart
                    <ion-icon name="cart-outline" v-pre></ion-icon>
                </button>
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ShowDetails',
    data() {
        return {
            product: {},
            category: {},
            id: null,
        };
    },
    props: ["baseURL", "products", "categories"],
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find(
            (category) => category.id == this.product.categoryId
        );
        this.token = localStorage.getItem("token");
        console.log(this.categories)

    },
};
</script>

<style lang="scss" scoped>

</style>