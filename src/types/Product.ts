// Product.ts
// Definición del tipo Product para la aplicación.
//
// Campos:
//   - id?: number        // ID único del producto (opcional, asignado por la base de datos)
//   - name: string       // Nombre del producto
//   - price: number      // Precio del producto
//   - description: string// Descripción del producto
//   - image: string      // URL de la imagen del producto
//   - cat_id: number     // ID de la categoría a la que pertenece el producto
//
// Uso:
//   Importa esta interfaz para tipar productos en servicios y componentes.


export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    image: string;
    cat_id: number;
}