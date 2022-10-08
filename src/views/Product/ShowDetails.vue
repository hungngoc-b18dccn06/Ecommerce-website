<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 col-12">
                <img :src="product.imageURL" :alt="product.name" class="img-fluid" />
            </div>
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <div class="favorite" style=" justify-content: center;">
                    <div class="add-favorite" v-if="checkWishtListItems">
                        <h4>{{ product.name }}</h4>
                        <i class="fa fa-heart" style="color:red"></i>
                    </div>
                    <div class="un-favorite" v-if="!checkWishtListItems">
                        <h4>{{ product.name }}</h4>
                        <i class="far fa-heart"></i>
                    </div>
                </div>
                <!-- <h6 class="category font-italic">{{ category.categoryName }}</h6> -->
                <h6 class="font-weight-bold"> Price : $ {{ product.price }}</h6>
                <p>
                    {{ product.description }}
                </p>
                <div class="d-flex flex-row justify-content-between">
                    <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Quantity</span>
                        </div>
                        <input class="form-control" type="number" v-bind:value="quantity" />
                    </div>

                    <div class="input-group col-md-3 col-4 p-0">
                        <button id="show-cart-button" type="button" class="btn btn-primary" @click="listCartItems()">
                            Add to Cart
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="features pt-3">
                    <h5><strong>Details Product</strong></h5>
                    <ul>
                        <li>Chuột chuyên game không dây Wolf X8 2.4 GHz</li>
                        <li>Tương thích nhiều dòng sản phẩm</li>
                        <li>Thiết kế siêu nhỏ gọn,hiện đại màu sắc ấn tượng</li>
                        <li>Sử dụng thoải mái trong vòng bán kính 10m</li>
                    </ul>
                </div>

                <button id="show-cart-button" type="button" class="btn btn-success mr-3"
                    @click="addToWishList(this.id)">
                    Add to WishList
                    <i class="far fa-heart"></i>
                </button>
                <button id="show-cart-button" type="button" class="btn btn-warning" @click="listCartItems">
                    Show Cart
                    <i class="fas fa-cart-plus"></i>
                </button>
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    name: 'ShowDetails',
    data() {
        return {
            isAddedToWishlist: false,
            product: {},
            category: {},
            idListWishItem: null,
            id: null,
            price: null,
            name: null,
            imageURL: null,
            description: null,
            itemToken: null,
            checkWishtListItems: false,
            quantity: 1

        };
    },
    props: ["baseURL", "products", "categories"],
    methods: {
        addToWishList(productId) {
            axios
                .post(`${this.baseURL}wishlist/add?token=${this.token}`, {
                    id: productId,
                })
                .then(
                    (response) => {
                        if (response.status == 201 && this.idListWishItem !== Number(this.id)) {
                            this.isAddedToWishlist = true;
                            this.checkWishtListItems = true;
                            this.wishlistString = "Added to WishList";
                            swal({
                                text: "Added to WishList!",
                                icon: "success",
                                closeOnClickOutside: false,
                            });
                        } else {
                            swal({
                                text: "Đã add rồi k cho add lại đâu!",
                                icon: "error",
                                closeOnClickOutside: false,
                            });
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        },
        fetchData() {
            axios.get(`${this.baseURL}wishlist/${localStorage.getItem("token")}`)
                .then(
                    (response) => {
                        this.idListWishItem = response.data.find(e => e.id).id;
                        if (this.idListWishItem == this.id) {
                            this.checkWishtListItems = true;
                        } else {
                            this.checkWishtListItems = false;
                        }
                        console.log(this.idListWishItem, Number(this.id))
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    },
    mounted() {
        this.fetchData();
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find(
            (category) => category.id == this.product?.categoryId
        );
        this.token = localStorage.getItem("token");
    },
};
</script>

<style scoped>
.add-favorite {
    display: flex;
    justify-content: center;
}

i.fa.fa-heart {
    padding: 0px 0px 0px 150px;
    font-size: 30px;
}

span#basic-addon1 {
    padding: 2px;
    font-size: 12px;
    width: 65px;
    font-weight: 900;
}
</style>