## Estructura

farmacia-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── index.js
│   │   ├── user.model.js
│   │   ├── medicamento.model.js
│   │   ├── compra.model.js
│   │   ├── detalleCompra.model.js
│   │   ├── venta.model.js
│   │   ├── detalleVenta.model.js
│   │   └── laboratorio.model.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── medicamento.controller.js
│   │   ├── compra.controller.js
│   │   └── venta.controller.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── medicamento.routes.js
│   │   ├── compra.routes.js
│   │   └── venta.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   │
│   └── app.js
│
├── .env
├── package.json
└── server.js
