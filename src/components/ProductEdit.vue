<template>
  <div class="form-container">
    <div class="form-card">
      <form @submit.prevent="submitForm">
        <h2 class="form-title">Actualizar Producto</h2>

        <div class="form-group">
          <label class="form-label">Nombre:</label>
          <input v-model="form.name" class="form-input" type="text" required>
        </div>

        <div class="form-group">
          <label class="form-label">Precio:</label>
          <input v-model.number="form.price" class="form-input" type="number" step="0.01" required>
        </div>

        <div class="form-group">
          <label class="form-label">Descripción:</label>
          <textarea v-model="form.description" class="form-textarea"></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">Imagen URL:</label>
          <input v-model="form.image" class="form-input" type="text">
        </div>

        <div class="form-group">
          <label class="form-label">Categoría ID:</label>
          <input v-model.number="form.cat_id" class="form-input" type="number" required>
        </div>

        <button type="submit" class="btn btn-primary form-submit">Actualizar producto</button>

        <div v-if="message" 
             :class="{'form-message success': success, 'form-message error': !success}" 
             class="form-message">
          {{ message }}
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Componente para editar productos existentes.

import { reactive, ref, watch, defineProps, defineEmits } from 'vue';
import { updateProduct } from '../services/product.service';
import type { Product } from '../types/Product';

// Props: producto a editar
const props = defineProps<{ product: Product | null }>();

// Emits: updated (cuando se actualiza el producto), cancel (no usado)
const emit = defineEmits(['updated', 'cancel']);

const form = reactive<Product>({
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    cat_id: 0,

});

const message = ref('');
const success = ref(false);

// Actualiza el formulario cuando cambia la prop product
watch(() => props.product, (newProduct) => {
    if(newProduct) {
        Object.assign(form, newProduct);
        message.value = '';
    }
}, { immediate: true });

const submitForm = async () => {
    message.value= '';
    success.value= false;

    try {
        const res = await updateProduct(form.id!, form);
        if(res.data.success) {
            message.value = res.data.success;
            success.value = true;
            emit('updated');
        } else if (res.data.error) {
            message.value = res.data.error;
        }
    } catch (error) {
        message.value = 'Error al conectar con el servidor';
    }


};


</script>