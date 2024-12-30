# 🌟 Task Manager Frontend

Este es el frontend de **Task Manager**, una aplicación web para gestionar tareas de manera eficiente. Está construido con tecnologías modernas como React, Vite y Tailwind CSS para ofrecer una experiencia de usuario rápida y atractiva.

---

## 🚀 Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Context API**: Gestión de estado global para compartir datos entre componentes.
- **Vite**: Herramienta moderna para un desarrollo rápido y optimizado.
- **Tailwind CSS**: Framework de utilidades CSS para un diseño ágil y personalizable.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## ⚙️ Configuración del Entorno


Para ejecutar este proyecto de manera local, debes crear un archivo .env en la raíz del proyecto con las siguientes variables:

REACT_APP_API_URL= "AQUÍ REEMPLAZA CON TU URL DEL SERVIDOR BACKEND"

1. **Clona el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/task-manager-frontend.git
   cd task-manager-frontend


2. **Instala Dependencias:**
npm install


3. **Ejecuta el Proyecto:**
npm run dev
Este comando iniciará un servidor de desarrollo, generalmente accesible en: http://localhost:5173

Si necesitas un puerto diferente, puedes especificarlo en el archivo de configuración vite.config.js.


🌐 Gestión de Estado con Context API
Este proyecto utiliza Context API para manejar el estado global de la aplicación. Los contextos están definidos dentro de la carpeta src/context/, lo que permite:

Compartir datos globales entre componentes sin necesidad de prop drilling.
Reducir la complejidad en la gestión del estado.
Facilitar la escalabilidad de la aplicación.
Cómo funciona:
Contextos Definidos: Cada contexto incluye un proveedor (Provider) que envuelve la aplicación o parte de ella para compartir el estado.

Uso de los Contextos: Para acceder al estado global o métodos definidos en un contexto, se utiliza el hook useContext.

🛠️ Integración con el Backend
Asegúrate de que el backend de Task Manager esté corriendo localmente o en un servidor remoto. Actualiza la URL base de las solicitudes en los archivos dentro de la carpeta services según sea necesario.

📦 Scripts Disponibles
npm run dev: Inicia el servidor de desarrollo.
npm run build: Genera una versión optimizada para producción.
npm run preview: Previsualiza la aplicación de producción localmente.
npm run lint: Ejecuta ESLint para revisar problemas de código.
🖌️ Personalización del Diseño
Este proyecto utiliza Tailwind CSS para el diseño. Puedes personalizarlo editando el archivo tailwind.config.js y agregando tus propios estilos o extendiendo las clases existentes.

🛡️ Buenas Prácticas
Mantén las variables sensibles fuera del código fuente. Usa un archivo .env si es necesario.
Organiza los contextos dentro de la carpeta context/ y documenta su uso.
Siempre prueba la aplicación antes de construir para producción.


📝 Licencia
Este proyecto está bajo la Licencia MIT.

