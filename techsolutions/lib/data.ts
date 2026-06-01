export interface Course {
  id: number;
  nombre: string;
  categoria: string;
  duracion: number;
  descripcion: string;
  imagen: string;
  estado: "Activo" | "En Progreso" | "Finalizado";
}

export const courses: Course[] = [
  {
    id: 1,
    nombre: "React Avanzado",
    categoria: "Frontend",
    duracion: 40,
    descripcion: "Domina hooks, context, performance y patrones avanzados de React.",
    imagen: "https://sigdeletras.com/images/blog/202004_react_leaflet/react.png",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Node.js & Express",
    categoria: "Backend",
    duracion: 35,
    descripcion: "Construye APIs REST robustas con Node.js y Express.",
    imagen: "https://dev4humans.com/public_images/node_express.png",
    estado: "En Progreso",
  },
  {
    id: 3,
    nombre: "Base de Datos SQL",
    categoria: "Bases de Datos",
    duracion: 30,
    descripcion: "Aprende PostgreSQL, modelado y consultas avanzadas.",
    imagen: "https://severalnines.com/wp-content/uploads/2023/12/BLOG-Whats-new-in-SQL-Server-2022-480x360.png",
    estado: "Finalizado",
  },
  {
    id: 4,
    nombre: "Next.js Full Stack",
    categoria: "Full Stack",
    duracion: 50,
    descripcion: "Desarrolla aplicaciones completas con Next.js App Router.",
    imagen: "https://img-c.udemycdn.com/course/480x270/5443718_2161_3.jpg?w=3840&q=75",
    estado: "Activo",
  },
  {
    id: 5,
    nombre: "TypeScript Esencial",
    categoria: "Frontend",
    duracion: 25,
    descripcion: "Tipado estático y buenas prácticas con TypeScript moderno.",
    imagen: "https://miro.medium.com/0*Zl1KDB8QpgKFWGKB.jpeg",
    estado: "Activo",
  },
  {
    id: 6,
    nombre: "Docker & DevOps",
    categoria: "DevOps",
    duracion: 45,
    descripcion: "Contenedores, CI/CD y despliegue en la nube con Docker.",
    imagen: "https://www.redeszone.net/app/uploads-redeszone.net/2016/02/Docker.png",
    estado: "En Progreso",
  },
];