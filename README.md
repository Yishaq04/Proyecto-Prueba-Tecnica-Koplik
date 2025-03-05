# Proyecto de Quizz Educativo

Este proyecto es una aplicación web educativa diseñada específicamente para estudiantes de medicina. Se inspira en la página ya existente Koplik, ofreciendo un sistema de cuestionarios interactivos. Los usuarios pueden elegir entre varias categorías de estudio, como anatomía, fisiología e histología, y responder preguntas relacionadas con cada una de ellas. Al finalizar el cuestionario, se muestra la puntuación obtenida y la respuesta correcta a cada pregunta, proporcionando una retroalimentación inmediata para el aprendizaje.

## Funcionalidades

- **Selección de categoría**: Los usuarios pueden elegir entre diferentes categorías de estudio (Anatomía, Fisiología, Histología).
- **Cuestionarios**: Cada categoría tiene un conjunto de preguntas con opciones de respuesta.
- **Validación de respuestas**: El sistema verifica las respuestas seleccionadas y muestra la puntuación final.
- **Resultados**: Al finalizar el cuestionario, el usuario ve un resumen de sus respuestas correctas y incorrectas.

## Tecnologías Utilizadas

- **Frontend**: 
  - [Astro](https://astro.build/): Framework utilizado para generar el frontend estático.
  - [React](https://reactjs.org/): Biblioteca para manejar la interfaz de usuario y la lógica de estado.
  - **TypeScript**: Para asegurar la correcta tipificación en el código.
  - **Tailwind CSS**: Framework de estilos para el diseño de la interfaz de usuario.

- **Backend (API)**: 
  - API simulada con Astro para proporcionar las preguntas y respuestas del cuestionario.

## Instrucciones de Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Yishaq04/proyecto-koplik.git
   cd proyecto-koplik

2. **Instalar dependencias**:
    ```bash
    npm install

3. **Iniciar el servidor de desarrollo**:
   ```bash
    npm run dev
4. **Accede a la aplicacion web en tu navegador**:
    ```bash
    http://localhost:4321

## Decisiones de Diseño

### Estructura del Proyecto

- **Frontend**: Utiliza **Astro**, **React** y **TypeScript** para crear una interfaz modular, reactiva y eficiente. **Astro** permite integrar componentes de **React** de manera sencilla y optimizar la carga de la página.
- **Backend**: La **API** es una implementación simple sin autenticación, diseñada con **Astro** para devolver las preguntas de los cuestionarios. Utiliza un archivo estático **JSON** para almacenar las preguntas.
- **Estado**: El estado de la aplicación se gestiona de forma local, lo que simplifica la arquitectura del proyecto. No se utiliza un sistema global de gestión de estado.

### Decisiones de Estilo

- El diseño fue una inspiracion del diseño de la pagina de koplik
- Se utilizaron **componentes reutilizables** para crear una UI coherente y fácil de mantener.

### Posibles Mejoras

- **Persistencia de Datos**: Actualmente, las respuestas del usuario no se almacenan, con una base de datos podría permitir registrar los resultados y progresos a largo plazo.

- **Interactividad Avanzada**: Se podrían agregar características como explicaciones detalladas de las respuestas correctas o incorrectas después de cada pregunta.

## Instrucciones para Probar la Aplicación

### Probar el Cuestionario

1. Abre la aplicación en el navegador.
2. Inicia secion con cualquier nombre y correo electronico
3. Selecciona una categoría de estudio (**Anatomía**, **Fisiología** o **Histología**).
4. Responde las preguntas del cuestionario.
5. Al finalizar, verás tu puntuación junto con las respuestas correctas.





