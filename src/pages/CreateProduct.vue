<template>
  <h1>Crear Producto</h1>
  <ProductForm @created="$router.push('/')" />
</template>

<script setup lang="ts">
// Importa el formulario de producto para crear uno nuevo
import ProductForm from '../components/ProductForm.vue'
</script>
