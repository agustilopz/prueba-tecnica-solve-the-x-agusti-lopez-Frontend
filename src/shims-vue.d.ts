// Esto le dice a TypeScript cómo manejar los archivos .vue y elimina el error "implicitly has an 'any' type".
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
