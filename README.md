
# Aluraflix

**Aluraflix** es una página web donde puedes encontrar videos sobre tecnología organizados por categorías. Incluye funciones para crear nuevos videos, editarlos o eliminarlos, ofreciendo una experiencia completa de gestión de contenidos.

---

## Características principales

- **Explorar videos:** Encuentra videos organizados por categorías como FRONT END, BACK END, e INNOVACIÓN Y GESTIÓN.
- **Crear videos:** Agrega nuevos videos a la plataforma completando un formulario.
- **Editar videos:** Actualiza la información de videos existentes.
- **Eliminar videos:** Gestiona el contenido eliminando videos no deseados.

---

## Tecnologías utilizadas

- **Vite:** Herramienta para construir aplicaciones rápidas y ligeras.
- **React:** Biblioteca para construir interfaces de usuario.
- **Styled-components:** Para gestionar estilos en los componentes.
- **JSON Server:** Servidor simulado para manejar datos de videos.

---

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/xandervel98/aluraflix.git
   cd aluraflix
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor JSON Server:

   ```bash
   npx json-server --watch db.json
   ```

4. Inicia el proyecto con Vite:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y accede a la aplicación en:

   ```
   http://localhost:5173
   ```

---

## Estructura del proyecto

```
|-- public/
|-- src/
|   |-- components/
|   |   |-- Banner/
|   |   |-- Footer/
|   |   |-- GlobalStyles/
|   |   |-- Header/
|   |   |-- Modal/
|   |   |-- VideosCard/
|   |   |-- VideosGaleria/
|   |   |-- NuevoVideo/
|   |-- App.jsx
|   |-- main.jsx
|-- db.json
|-- package.json
|-- vite.config.js
```

- **components/**: Contiene los componentes principales de la aplicación.
- **db.json**: Archivo usado por JSON Server para almacenar datos de los videos.

---

## Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```
4. Sube tus cambios a tu repositorio fork:
   ```bash
   git push origin mi-nueva-funcionalidad
   ```
5. Abre un Pull Request en el repositorio original.

---

## Licencia

Este proyecto está bajo la licencia MIT. Puedes consultar más detalles en el archivo LICENSE incluido en el repositorio.

---

## Autor

Desarrollado por Martin Velasquez. ¡Si tienes alguna pregunta, no dudes en contactarme!
