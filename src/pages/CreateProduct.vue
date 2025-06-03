<template>
  <h1>Crear Producto</h1>
  <ProductForm @created="$router.push('/')" />
</template>

<script setup lang="ts">
import ProductForm from '../components/ProductForm.vue'



</script>
