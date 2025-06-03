# Prova Técnica SolveTheX - Frontend

Este repositorio contiene el **frontend** de la prueba técnica para SolveTheX. Es una SPA desarrollada con **Vite**, **Vue 3** (Composition API) y **TypeScript**, que consume la API REST del backend para gestionar productos.

## Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Notas importantes](#notas-importantes)

---

## Características

- Listado de productos, creación, edición y eliminación.
- Consumo de todos los endpoints del backend.
- Formularios reactivos para crear y editar productos.
- Navegación SPA con Vue Router.
- Estilos básicos con Tailwind CSS.
- Código en TypeScript.
- Uso recomendado de linters.

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPO>
   cd <NOMBRE_DEL_REPO>
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

## Ejecución

Para iniciar el frontend en modo desarrollo:
```sh
npm run dev
```
La aplicación estará disponible en [http://localhost:5173](http://localhost:5173) (puede variar según configuración de Vite).

> **Nota:** Asegúrate de que el backend esté corriendo en [http://localhost:3000](http://localhost:3000) o ajusta la URL en `src/services/product.service.ts` si es necesario.

## Estructura del proyecto

```
src/
  assets/                # Estilos globales (Tailwind)
  components/            # Componentes reutilizables (ProductList, ProductForm, ProductEdit)
  pages/                 # Vistas principales (Home, CreateProduct, EditProduct)
  router/                # Configuración de rutas (Vue Router)
  services/              # Servicios para llamadas HTTP (axios)
  types/                 # Tipos TypeScript (Product)
  App.vue                # Componente raíz
  main.ts                # Punto de entrada
```

## Notas importantes

- El frontend **no implementa autenticación**; los endpoints protegidos del backend deben estar desprotegidos o usar un token válido para pruebas.
- El diseño es básico y funcional.
- Puedes modificar los estilos en `src/assets/main.css`.
- Si cambias la URL del backend, actualízala en `src/services/product.service.ts`.

---
