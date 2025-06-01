<template>
    <div>
        <h2>Productos</h2>
                     <router-link to="/crear">
            <button>Añadir Producto</button>
        </router-link>

        <ul>
            <li v-for="product in products" :key="product.id">{{ product.name }} - {{ product.price }}€
                 <div>
          <router-link :to="`/edit/${product.id}`">
            <button>Editar</button>
          </router-link>
          <button @click="deleteProduct(product.id!)">Eliminar</button>
        </div>

            </li>
        </ul>

    </div>

</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue';
import { getAllProducts, deleteProduct as deleteProductService } from '../services/product.service';

import type {Product} from '../types/Product.ts';

const products = ref<Product[]>([]);
//const emit = defineEmits(['edit']);

const fetchProducts = async () => {
    try {
        const { data }  = await getAllProducts();
        products.value= data;
    } catch {
        products.value = [];
    }
};

onMounted(fetchProducts);

const deleteProduct = async (id: number) => {
    try {
        await deleteProductService(id);
        await fetchProducts();
    } catch {
        alert('Error al elimianr el producto')
    }
};

/*
const editProduct = (product: Product) => {
    emit('edit', product)
};
*/
</script>