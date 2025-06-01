<template>
    <div>
        <h2>Productos</h2>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.name }} - {{ product.price }}€</li>
        </ul>

    </div>

</template>

<script>

import { ref, onMounted } from 'vue';
import { getAllProducts } from '../services/productService';
import type {Product} from '../types/Product';

const products = ref<Product[]>([]);

onMounted(async () => {
    const { data } = await getAllProducts();
    products.value = data;
});

</script>