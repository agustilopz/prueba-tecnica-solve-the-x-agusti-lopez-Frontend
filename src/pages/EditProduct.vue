<template>
  <h1>Editar Producto</h1>
  <ProductEdit v-if="product" :product="product" @updated="$router.push('/')" @cancel="$router.push('/')" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getProductById } from '../services/product.service';
import ProductEdit from '../components/ProductEdit.vue';
import type { Product } from '../types/Product';

// Obtiene el parámetro de la ruta y el producto a editar
const route = useRoute()
const product = ref<Product | null>(null);

// Carga el producto al montar el componente
onMounted(async () => {
  const id = Number(route.params.id);
  const { data } = await getProductById(id);
  product.value = data;
});

</script>
