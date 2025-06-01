<template>
  <h1>Editar Producto</h1>
  <ProductForm :productId="id" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProductForm from '../components/ProductForm.vue'

const route = useRoute()
const id = Number(route.params.id)
</script>
