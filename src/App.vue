<template>
   
     <router-view />

     <!--
<div>
   <ProductList />
   <ProductForm v-if="!editingProduct"/> 
   <ProductEdit v-else :product="editingProduct" @updated="stopEditing"  @cancel="stopEditing" />

</div>
-->


</template>

<script setup lang="ts">
import { ref } from 'vue';
//import ProductList from './components/ProductList.vue';
//import ProductForm from './components/ProductForm.vue';
//import ProductEdit from './components/ProductEdit.vue';

import type { Product } from './types/Product';

const editingProduct = ref<Product | null>(null);

   function startEditing(product: Product) {
      editingProduct.value = product;
   }

   function stopEditing() {
      editingProduct.value  = null;
   }


</script>