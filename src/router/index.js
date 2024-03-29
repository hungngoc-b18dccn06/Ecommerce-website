/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AddCategoryVue from '../views/category/AddCategory.vue'
import CategoryVue from '../views/category/Category.vue'
import AdminVue from '../views/Admin.vue'
import ProductVue from '../views/Product/Product.vue'
import AddProductVue from '../views/Product/AddProduct.vue'
import EditCategoryVue from '../views/category/EditCategory.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import WishList from '../views/WishList.vue'
import Cart from '../views/Cart/Cart.vue'
import Orders from '../views/Orders/Orders.vue'
// import ListProducts from '../views/Category/ListProducts.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import SumProducts from '../views/Category/SumProducts.vue'
import CheckOut from '../views/CheckOut/CheckOut.vue'
import OrderDetail from "../views/Orders/OrderDetail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin/category/add',
      name: 'AddCategory',
      component: AddCategoryVue
    },
    {
      path: '/admin/category',
      name: 'Category',
      component: CategoryVue
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminVue
    },
    {
      path: '/admin/product',
      name: 'Product',
      component: ProductVue
    },
    {
      path: '/admin/product/new',
      name: 'AddProduct',
      component: AddProductVue
    },
    {
      path: '/admin/category/:id',
      name: 'EditCategory',
      component: EditCategoryVue
    },
    {
      path: '/admin/product/:id',
      name: 'EditProduct',
      component: EditProduct
    },
    {
      path : '/product/show/:id',
      name : 'ShowDetails',
      component: ShowDetails
    },
    {
      path : '/category/show/:id',
      name : 'SumProducts',
      component: SumProducts
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SignIn
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: WishList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'CheckOut',
      component: CheckOut
    },
    {
      path: '/orders',
      name: 'Order',
      component: Orders
    },
    {
      path:'/order/:id',
      name:'OrderDetails',
      component: OrderDetail
    }

  ]
})

export default router
