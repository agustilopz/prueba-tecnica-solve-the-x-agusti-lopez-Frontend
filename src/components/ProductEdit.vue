<template>
<form @submit.prevent="submitForm">
    <h2>Actualizar Producto</h2>

    <label>Nombre: 
        <input v-model="form.name" type="text" required>
    </label>

        <label>Precio: 
        <input v-model.number="form.price" type="number" required>
    </label>

            <label>Descripción: 
        <textarea v-model="form.description" type="text"></textarea>
    </label>

        <label>Imagen URL: 
        <input v-model="form.image" type="text">
    </label>

        <label>Categoría ID: 
        <input v-model.number="form.cat_id" type="number" required>
    </label>

    <button type="submit">Actualizar producto</button>

    <p v-if="message" :class="{'text-green-600': success, 'text-red-600': !success}" class="mt-4">{{ message }}</p>

</form>

</template>

<script lang="ts" setup>
import { reactive, ref, watch, defineProps, defineEmits } from 'vue';
import { updateProduct } from '../services/product.service';
import type { Product } from '../types/Product';

const props = defineProps<{ product: Product | null }>();
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

watch(() => props.product, (newProduct) => {
    if(newProduct) {
        Object.assign(form, newProduct);
        message.value = '';
    }
});

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