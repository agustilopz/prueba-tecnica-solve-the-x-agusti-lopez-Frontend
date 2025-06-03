<template>
    <div class="products-container">
        <div class="products-header">
            <h2 class="products-title">Productos</h2>
            <router-link to="/crear" class="btn btn-primary">
                Añadir Producto
            </router-link>
        </div>
        
        <ul class="products-list">
            <li v-for="product in products" :key="product.id" class="product-card">
                <div class="product-image-container">
                    <img 
                        v-if="product.image" 
                        :src="product.image" 
                        alt="Imagen del producto" 
                        class="product-image"
                    />
                    <div v-else class="product-image-placeholder">
                        Sin imagen
                    </div>
                </div>
                
                <div class="product-content">
                    <div class="product-header">
                        <div class="product-info">
                            <h3 class="product-name">{{ product.name }}</h3>
                            <div class="product-price">{{ product.price }}€</div>
                        </div>
                    </div>
                    
                    <div class="product-details">
                        <div class="product-detail">
                            <strong>Descripción:</strong> 
                            <span class="product-description">{{ product.description }}</span>
                        </div>
                        <div class="product-detail">
                            <strong>Categoría:</strong> {{ product.cat_id }}
                        </div>
                    </div>
                    
                    <div class="product-actions">
                        <router-link :to="`/edit/${product.id}`" class="btn btn-secondary btn-sm">
                            Editar
                        </router-link>
                        <button @click="deleteProduct(product.id!)" class="btn btn-danger btn-sm">
                            Eliminar
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script lang="ts" setup>
// Componente para mostrar la lista de productos.

import { ref, onMounted } from 'vue';
import { getAllProducts, deleteProduct as deleteProductService } from '../services/product.service';

import type {Product} from '../types/Product.ts';

const products = ref<Product[]>([]);

const fetchProducts = async () => {
    try {
        const { data }  = await getAllProducts();
        products.value= data;
    } catch {
        products.value = [];
    }
};

// Carga los productos al montar el componente
onMounted(fetchProducts);

// Elimina un producto y recarga la lista
const deleteProduct = async (id: number) => {
    try {
        await deleteProductService(id);
        await fetchProducts();
    } catch {
        alert('Error al elimianr el producto')
    }
};

</script>