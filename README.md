# Marvel Universe Database

**Laboratorio 4 - Desarrollo de Aplicaciones Web Avanzado**

**Autor:** Bellido Rony

---

## Descripción

Aplicación web moderna para la gestión de personajes del universo Marvel. Desarrollada con Node.js, Express y EJS, ofrece una interfaz responsiva con diseño contemporáneo basado en glassmorphism y tema visual Marvel.

---

## Características

- Gestión de personajes Marvel con registro en memoria
- Formulario de contacto con almacenamiento de mensajes
- Panel administrativo para visualizar mensajes recibidos
- Diseño completamente responsivo (móvil, tablet, desktop)
- Sistema de navegación intuitivo con menú hamburguesa
- Animaciones CSS fluidas y transiciones modernas
- Componentes reutilizables mediante EJS partials

---

## Tecnología

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML5, CSS3
- **Tipografía:** Google Fonts (Outfit, Montserrat, Bebas Neue)
- **Iconos:** Lucide Icons
- **Almacenamiento:** Memoria (datos en runtime)

---

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```
   npm install
   ```
3. Ejecutar la aplicación:
   ```
   node app.js
   ```
4. Acceder a `http://localhost:3000`

---

## Estructura del Proyecto

```
Demo/
├── app.js                 # Archivo principal
├── package.json           # Dependencias del proyecto
├── public/
│   └── styles.css         # Estilos globales
├── controllers/
│   ├── mainController.js  # Controlador principal
│   └── marvelController.js # Controlador Marvel
├── routes/
│   └── mainRoutes.js      # Definición de rutas
└── views/
    ├── home.ejs
    ├── about.ejs
    ├── contact.ejs
    ├── admin.ejs
    ├── marvel.ejs
    ├── notFound.ejs
    └── partials/
        ├── header.ejs
        ├── navbar.ejs
        └── footer.ejs
```

---

## Rutas Disponibles

| Ruta | Método | Descripción |
|------|--------|-------------|
| `/` | GET | Página de inicio |
| `/about` | GET | Información del proyecto |
| `/contact` | GET | Formulario de contacto |
| `/contact` | POST | Enviar mensaje de contacto |
| `/admin` | GET | Panel administrativo |
| `/marvel` | GET | Base de datos de personajes |
| `/marvel` | POST | Registrar nuevo personaje |

---

## Requisitos

- Node.js (v14 o superior)
- npm

---

## Dependencias

- express: ^5.2.1
- ejs: ^6.0.1

---

## Notas

- Los datos se almacenan en memoria y se pierden al reiniciar el servidor
- El servidor escucha en el puerto 3000
- Desarrollo realizado en Windows

---
