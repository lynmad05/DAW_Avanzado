"use client"

import { useState } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Props {
  tasks: any[]
  setTasks: any
}

export function TaskTable({
  tasks,
  setTasks,
}: Props) {
  const [page, setPage] = useState(1)

  const perPage = 3

  const start = (page - 1) * perPage

  const paginatedTasks = tasks.slice(
    start,
    start + perPage
  )

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <div>

      <Table>

        <TableHeader>
          <TableRow>
            <TableHead>Descripción</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Prioridad</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>

          {paginatedTasks.map((task) => (

            <TableRow key={task.id}>

              <TableCell>
                {task.description}
              </TableCell>

              <TableCell>
                <Badge>
                  {task.status}
                </Badge>
              </TableCell>

              <TableCell>
                {task.priority}
              </TableCell>

              <TableCell>
                {task.dateline}
              </TableCell>

              <TableCell>

                <Button
                  variant="destructive"
                  onClick={() => deleteTask(task.id)}
                >
                  Eliminar
                </Button>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

      <div className="mt-6">

        <Pagination>

          <PaginationContent>

            <PaginationItem>

              <PaginationPrevious
                onClick={() =>
                  setPage((p) =>
                    Math.max(p - 1, 1)
                  )
                }
              />

            </PaginationItem>

            <PaginationItem>

              <PaginationLink>
                {page}
              </PaginationLink>

            </PaginationItem>

            <PaginationItem>

              <PaginationNext
                onClick={() =>
                  setPage((p) =>
                    start + perPage < tasks.length
                      ? p + 1
                      : p
                  )
                }
              />

            </PaginationItem>

          </PaginationContent>

        </Pagination>

      </div>

    </div>
  )
}