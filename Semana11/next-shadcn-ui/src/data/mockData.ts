export interface Project {
  id: number
  name: string
  description: string
  members: number
  status: string
}

export interface TeamMember {
  userId: number
  role: string
  name: string
  email: string
  position: string
  birthdate: string
  phone: string
  projectId: number
  isActive: boolean
}

export interface Task {
  id: number
  description: string
  projectId: number
  status: string
  priority: string
  userId: number
  dateline: string
}

export const initialProjects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Sistema ecommerce",
    members: 5,
    status: "En progreso",
  },
  {
    id: 2,
    name: "Dashboard Analytics",
    description: "Panel administrativo",
    members: 3,
    status: "Pendiente",
  },
]

export const initialMembers: TeamMember[] = [
  {
    userId: 1,
    role: "Admin",
    name: "María García",
    email: "maria@example.com",
    position: "Frontend Developer",
    birthdate: "1998-10-10",
    phone: "999888777",
    projectId: 1,
    isActive: true,
  },
  {
    userId: 2,
    role: "Developer",
    name: "Juan Pérez",
    email: "juan@example.com",
    position: "Backend Developer",
    birthdate: "1997-05-15",
    phone: "988777666",
    projectId: 2,
    isActive: true,
  },
]

export const initialTasks: Task[] = [
  {
    id: 1,
    description: "Implementar Login",
    projectId: 1,
    status: "Pendiente",
    priority: "Alta",
    userId: 1,
    dateline: "2026-06-10",
  },
  {
    id: 2,
    description: "Diseñar Dashboard",
    projectId: 2,
    status: "En progreso",
    priority: "Media",
    userId: 2,
    dateline: "2026-06-20",
  },
  {
    id: 3,
    description: "Optimizar API",
    projectId: 1,
    status: "Completado",
    priority: "Alta",
    userId: 1,
    dateline: "2026-06-25",
  },
  {
    id: 4,
    description: "Deploy Vercel",
    projectId: 2,
    status: "Pendiente",
    priority: "Baja",
    userId: 2,
    dateline: "2026-06-30",
  },
]