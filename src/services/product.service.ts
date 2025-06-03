// product.service.ts
// Servicio para interactuar con la API de productos.
//
// Métodos disponibles:
//   - getAllProducts(): Obtiene todos los productos.
//   - getProductById(id): Obtiene un producto por su ID.
//   - createProduct(data): Crea un nuevo producto.
//   - updateProduct(id, data): Actualiza un producto existente.
//   - deleteProduct(id): Elimina un producto.
//
// Uso:
//

import axios from 'axios';
import type { Product } from '../types/Product';

const API = 'http://localhost:3000/products';

export const getAllProducts = () => axios.get<Product[]>(API);
export const getProductById = (id: number) => axios.get<Product>(`${API}/${id}`);
export const createProduct = (data: Product) => axios.post(API, data);
export const updateProduct = (id: number, data: Product) => axios.put(`${API}/${id}`, data);
export const deleteProduct = (id: number) => axios.delete(`${API}/${id}`);