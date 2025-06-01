<template>
<form @submit.prevent="submitForm">
    <h2>Añadir Producto</h2>

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

    <button type="submit">Añadir producto</button>

    <p v-if="message" :class="{'text-green-600': success, 'text-red-600': !success}" class="mt-4">{{ message }}</p>

</form>

</template>

<script lang="ts" setup>
import { reactive, ref} from 'vue';
import { createProduct } from '../services/product.service';

const form = reactive({
    name: '',
    price: 0,
    description: '',
    image: '',
    cat_id: 0,

});

const message = ref('');
const success = ref(false);

const submitForm = async () => {
    message.value= '';
    success.value= false;

    try {
        const res = await createProduct(form);
        if(res.data.success) {
            message.value = res.data.success;
            success.value = true;

            // Rest form
            form.name =  '';
            form.price = 0,
            form.description = '';
            form.image = '';
            form.cat_id = 0;
        } else if (res.data.error) {
            message.value = res.data.error;
        }
    } catch (error) {
        message.value = 'Error al conectar con el servidor';
    }


};


</script>