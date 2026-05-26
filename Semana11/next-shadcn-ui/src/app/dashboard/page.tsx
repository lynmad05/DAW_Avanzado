"use client"

import { useState } from "react"
import "./dashboard.css"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

import { ProjectForm } from "@/components/ProjectForm"
import { TaskTable } from "@/components/TaskTable"

import {
  initialMembers,
  initialProjects,
  initialTasks,
} from "@/data/mockData"

export default function DashboardPage() {
  const [projects, setProjects] = useState(initialProjects)
  const [members, setMembers] = useState(initialMembers)
  const [tasks, setTasks] = useState(initialTasks)
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="dashboard">
      <div className="dashboard-container">

        {/* HEADER */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard de Proyectos</h1>
          <p className="dashboard-subtitle">
            Gestión moderna con shadcn/ui
          </p>

          <div className="mt-4">
            <div className="btn-create">
              <ProjectForm
                onCreate={(project) =>
                  setProjects([...projects, project])
                }
              />
            </div>
          </div>
        </div>

        {/* TABS - Forzamos Flex Columna y Ancho Completo */}
        <Tabs defaultValue="overview" className="w-full flex flex-col">
          
          {/* Contenedor del Menú (Arriba) */}
          <div className="w-full mb-8">
            <TabsList className="tabs-bar">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="projects">Proyectos</TabsTrigger>
              <TabsTrigger value="team">Equipo</TabsTrigger>
              <TabsTrigger value="tasks">Tareas</TabsTrigger>
              <TabsTrigger value="settings">Config</TabsTrigger>
            </TabsList>
          </div>

          {/* Contenedor del Contenido (Abajo) */}
          <div className="w-full block">
            {/* OVERVIEW */}
            <TabsContent value="overview" className="w-full">
              <div className="card-grid">
                <Card className="card">
                  <CardHeader>
                    <CardTitle>Total Proyectos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="card-value">{projects.length}</p>
                  </CardContent>
                </Card>

                <Card className="card">
                  <CardHeader>
                    <CardTitle>Total Tareas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="card-value">{tasks.length}</p>
                  </CardContent>
                </Card>

                <Card className="card">
                  <CardHeader>
                    <CardTitle>Miembros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="card-value">
                      {members.filter(m => m.isActive).length}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* PROJECTS */}
            <TabsContent value="projects" className="w-full">
              <div className="grid-simple">
                {projects.map((p) => (
                  <Card key={p.id} className="card hoverable">
                    <CardHeader>
                      <CardTitle>{p.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted">{p.description}</p>
                      <div className="mt-3">
                        <Badge>{p.status}</Badge>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button>Ver</Button>
                        <Button
                          variant="destructive"
                          onClick={() =>
                            setProjects(projects.filter(x => x.id !== p.id))
                          }
                        >
                          Eliminar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* TEAM */}
            <TabsContent value="team" className="w-full">
              <Card className="card">
                <CardHeader>
                  <CardTitle>Equipo</CardTitle>
                </CardHeader>
                <CardContent>
                  {members.map(m => (
                    <div key={m.userId} className="list-item">
                      <div>
                        <p className="font-bold">{m.name}</p>
                        <p className="text-muted">{m.position}</p>
                        <p className="text-small">{m.email}</p>
                      </div>
                      <Button
                        variant="destructive"
                        onClick={() =>
                          setMembers(members.filter(x => x.userId !== m.userId))
                        }
                      >
                        Eliminar
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* TASKS */}
            <TabsContent value="tasks" className="w-full">
              <Card className="card">
                <CardHeader>
                  <CardTitle>Tareas</CardTitle>
                </CardHeader>
                <CardContent>
                  <TaskTable tasks={tasks} setTasks={setTasks} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* SETTINGS */}
            <TabsContent value="settings" className="w-full">
              <Card className="card">
                <CardHeader>
                  <CardTitle>Configuración</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <input className="input" placeholder="Empresa" />
                  <input className="input" placeholder="Email soporte" />
                  <div className="flex justify-center py-4">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-lg border"
                    />
                  </div>
                  <Button className="w-full">Guardar</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}