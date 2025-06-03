// index.ts
// Configuración de rutas para la aplicación Vue.
//
// Rutas disponibles:
//   - /           -> Home.vue (Página principal, lista de productos)
//   - /crear      -> CreateProduct.vue (Formulario para crear producto)
//   - /edit/:id   -> EditProduct.vue (Formulario para editar producto)
//
// Uso:
// 

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CreateProduct from '../pages/CreateProduct.vue'
import EditProduct from '../pages/EditProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/crear',
    name: 'CrearProducto',
    component: CreateProduct
  },
  {
    path: '/edit/:id',
    name: 'EditProduct',
    component: EditProduct,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
