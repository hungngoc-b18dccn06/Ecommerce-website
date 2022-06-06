import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AddCategoryVue from '../views/category/AddCategory.vue'
import CategoryVue from '../views/category/Category.vue'
import AdminVue from '../views/Admin.vue'
import ProductVue from '../views/Product/Product.vue'
import AddProductVue from '../views/Product/AddProduct.vue'
import EditCategoryVue from '../views/category/EditCategory.vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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

  ]
})

export default router
