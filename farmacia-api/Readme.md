# API REST - Sistema Farmacéutico

## Descripción

Este proyecto consiste en el desarrollo de una API REST para la gestión de una empresa farmacéutica, utilizando **Node.js, MySQL, Sequelize y JWT**, aplicando buenas prácticas de seguridad y arquitectura por capas.

## Tecnologías utilizadas

* Node.js
* Express
* MySQL
* Sequelize (ORM)
* JSON Web Token (JWT)
* dotenv

## Funcionalidades principales

### 👤 Usuarios

* Registro de usuarios
* Login con JWT
* Control de acceso por roles (ADMIN, VENDEDOR, ALMACEN)

### 💊 Medicamentos

* Crear, listar, actualizar y eliminar medicamentos
* Control de stock

### 🛒 Compras

* Registro de órdenes de compra
* Actualización automática de stock

### 💰 Ventas

* Registro de ventas
* Validación de stock disponible
* Descuento automático de inventario

## Seguridad

* Autenticación con JWT
* Middleware de protección de rutas
* Encriptación de contraseñas
* Control de acceso por roles

## Arquitectura

El proyecto está organizado en:

* Models
* Controllers
* Routes
* Middleware

## Variables de entorno

Ejemplo de configuración `.env`:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
```

## Autora

**Ailyn Medina**

---

Si quieres, también puedo hacerte la sección de **conclusiones (las 5)** o ayudarte a armar el **Postman o el despliegue en Render/Railway**.
