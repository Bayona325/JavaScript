# FakeStore - 1484

## Descripción

Crear una aplicación web que consuma datos desde la API pública https://fakestoreapi.com/products, los represente dinámicamente en el DOM, y permita a los usuarios interactuar con dichos productos a través de un sistema de carrito de compras con persistencia de datos en localStorage. Además, la app debe implementar filtros y ordenamientos, permitiendo una experiencia de compra interactiva, moderna y funcional.



## Funcionalidades Requeridas

### 1. **Consumo de API**

- Obtener datos desde https://fakestoreapi.com/products utilizando fetch().
- Mostrar todos los productos en el DOM como tarjetas o elementos de una lista/grid.
- Debe manejarse correctamente la asincronía con promesas (then/catch o async/await).

### 2. **DOM Dinámico**

- Renderizar dinámicamente cada producto (imagen, título, precio, categoría, etc.).
- Permitir acciones como "Agregar al carrito" desde cada producto.
- Usar createElement() o innerHTML para construir los elementos.
- Actualizar el DOM al aplicar filtros o cambiar el orden de los productos.



### 3. **Carrito de Compras**

- Almacenar los productos seleccionados en un objeto JavaScript.
- Calcular y mostrar el total del carrito.
- Permitir eliminar productos del carrito.
- Guardar el carrito en localStorage.
- Al recargar la página, recuperar los productos del localStorage y renderizarlos nuevamente.

### 4. **Eventos**

- click: Para agregar o quitar productos del carrito.
- change: Para aplicar filtros por categoría o para ordenar los productos (precio, nombre, etc.).
- input: implementar una barra de búsqueda por nombre o descripción del producto.



### 5. **Persistencia con localStorage**

- Guardar los productos agregados al carrito.
- Al volver a cargar la página, el carrito debe mantenerse con los datos anteriores.

### 6. **Organización del Código**

- Separar el código en archivos (HTML, CSS y JS).
- Código modularizado en funciones.
- Estructura clara y mantenible.

### 7. **Diseño Responsivo y Usabilidad**

- La aplicación debe adaptarse correctamente a diferentes tamaños de pantalla (escritorio, tablet y móvil).
- El diseño debe priorizar una experiencia de usuario intuitiva, clara y agradable:
- Botones accesibles.
- Buen contraste de colores.
- Tipografía legible.
- Espaciados adecuados.
- El carrito debe estar accesible y visible desde cualquier dispositivo, ya sea mediante una barra lateral, modal o sección fija.

### 8. **Evidencia de Diseño y Análisis**

- Debe entregarse una carpeta o sección en el repositorio (rama) que contenga:
- **Bocetos o wireframes** (pueden ser hechos a mano o en herramientas como Figma, Canva o Excalidraw).
- Un archivo analisis.md con una breve descripción de las decisiones tomadas en el diseño de la interfaz y experiencia de usuario.
- Explicación de la estructura de datos usada (cómo se representa el carrito, cómo se almacenan los productos, etc.).
- Justificación de los filtros y ordenamientos implementados desde una perspectiva de usabilidad.

## Resultado esperado

La entrega de este proyecto se realizará en grupos de 1 persona. Deberá entregarse un repositorio en GitHub privado y compartido con las cuentas que el Trainer indique.

Este repositorio debe incluir:

- Código fuente de la aplicación en `JavaScript`, `HTML` y `CSS`.
- Archivo `README.md` con:
- Breve descripción del proyecto.
- Capturas de pantalla.
- Instrucciones para ejecutar.