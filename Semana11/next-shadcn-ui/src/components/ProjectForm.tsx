"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Alert, AlertDescription } from "@/components/ui/alert"

import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { CalendarIcon, Plus } from "lucide-react"

interface Props {
    onCreate: (project: any) => void
}

export function ProjectForm({ onCreate }: Props) {

    const [open, setOpen] = useState(false)

    const [error, setError] = useState("")

    const [date, setDate] = useState<Date>()

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        priority: "",
        team: "",
    })

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        if (
            !formData.title ||
            !formData.category ||
            !formData.priority
        ) {
            setError("Completa todos los campos obligatorios")
            return
        }

        setError("")

        const newProject = {
            id: Date.now(),
            title: formData.title,
            description: formData.description,
            category: formData.category,
            priority: formData.priority,
            team: Number(formData.team),
            progress: 0,
            status: "Planificado",
            dueDate: date?.toLocaleDateString() || "Sin fecha",
        }

        onCreate(newProject)

        setFormData({
            title: "",
            description: "",
            category: "",
            priority: "",
            team: "",
        })

        setDate(undefined)

        setOpen(false)
    }

    return (

        <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger>

                <div
                    className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-md
                        bg-violet-600
                        px-4
                        py-2
                        text-white
                        font-medium
                        shadow-lg
                        hover:bg-violet-700
                        transition-all
                        duration-200
                        cursor-pointer
                    "
                >
                    <Plus className="w-4 h-4 mr-2" />

                    Nuevo Proyecto
                </div>

            </DialogTrigger>

            <DialogContent
                className="
                    sm:max-w-[600px]
                    rounded-2xl
                    border
                    border-slate-200
                    dark:border-slate-800
                    bg-white
                    dark:bg-slate-950
                    shadow-2xl
                    p-0
                    overflow-hidden
                "
            >

                <form
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-slate-950"
                >

                    <DialogHeader
                        className="
                            px-6
                            pt-6
                            pb-4
                            border-b
                            border-slate-200
                            dark:border-slate-800
                        "
                    >

                        <DialogTitle className="text-2xl font-bold">
                            Crear Proyecto
                        </DialogTitle>

                        <DialogDescription className="text-slate-500 dark:text-slate-400">
                            Completa la información del nuevo proyecto.
                        </DialogDescription>

                    </DialogHeader>

                    <div className="space-y-5 px-6 py-6">

                        {error && (
                            <Alert variant="destructive">
                                <AlertDescription>
                                    {error}
                                </AlertDescription>
                            </Alert>
                        )}

                        <div className="space-y-2">

                            <Label>
                                Nombre del Proyecto *
                            </Label>

                            <Input
                                className="
                                    h-11
                                    border-slate-300
                                    dark:border-slate-700
                                    bg-white
                                    dark:bg-slate-900
                                    focus-visible:ring-2
                                    focus-visible:ring-violet-500
                                "
                                placeholder="Sistema Ecommerce"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                            />

                        </div>

                        <div className="space-y-2">

                            <Label>
                                Descripción
                            </Label>

                            <Input
                                className="
                                    h-11
                                    border-slate-300
                                    dark:border-slate-700
                                    bg-white
                                    dark:bg-slate-900
                                    focus-visible:ring-2
                                    focus-visible:ring-violet-500
                                "
                                placeholder="Describe el proyecto..."
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                            />

                        </div>

                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="space-y-2">

                                <Label>
                                    Categoría *
                                </Label>

                                <Select
                                    value={formData.category}
                                    onValueChange={(value) =>
                                        setFormData({
                                            ...formData,
                                            category: value || "",
                                        })
                                    }
                                >

                                    <SelectTrigger
                                        className="
                                            h-11
                                            border-slate-300
                                            dark:border-slate-700
                                            bg-white
                                            dark:bg-slate-900
                                        "
                                    >

                                        <SelectValue placeholder="Selecciona" />

                                    </SelectTrigger>

                                    <SelectContent
                                        className="
                                            bg-white
                                            dark:bg-slate-950
                                            border-slate-200
                                            dark:border-slate-800
                                        "
                                    >

                                        <SelectItem value="web">
                                            Desarrollo Web
                                        </SelectItem>

                                        <SelectItem value="mobile">
                                            Mobile
                                        </SelectItem>

                                        <SelectItem value="design">
                                            Diseño
                                        </SelectItem>

                                        <SelectItem value="marketing">
                                            Marketing
                                        </SelectItem>

                                    </SelectContent>

                                </Select>

                            </div>

                            <div className="space-y-2">

                                <Label>
                                    Prioridad *
                                </Label>

                                <Select
                                    value={formData.priority}
                                    onValueChange={(value) =>
                                        setFormData({
                                            ...formData,
                                            priority: value || "",
                                        })
                                    }
                                >

                                    <SelectTrigger
                                        className="
                                            h-11
                                            border-slate-300
                                            dark:border-slate-700
                                            bg-white
                                            dark:bg-slate-900
                                        "
                                    >

                                        <SelectValue placeholder="Selecciona" />

                                    </SelectTrigger>

                                    <SelectContent
                                        className="
                                            bg-white
                                            dark:bg-slate-950
                                            border-slate-200
                                            dark:border-slate-800
                                        "
                                    >

                                        <SelectItem value="Baja">
                                            Baja
                                        </SelectItem>

                                        <SelectItem value="Media">
                                            Media
                                        </SelectItem>

                                        <SelectItem value="Alta">
                                            Alta
                                        </SelectItem>

                                        <SelectItem value="Urgente">
                                            Urgente
                                        </SelectItem>

                                    </SelectContent>

                                </Select>

                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="space-y-2">

                                <Label>
                                    Miembros del Equipo
                                </Label>

                                <Input
                                    type="number"
                                    className="
                                        h-11
                                        border-slate-300
                                        dark:border-slate-700
                                        bg-white
                                        dark:bg-slate-900
                                        focus-visible:ring-2
                                        focus-visible:ring-violet-500
                                    "
                                    placeholder="5"
                                    value={formData.team}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            team: e.target.value,
                                        })
                                    }
                                />

                            </div>

                            <div className="space-y-2">

                                <Label>
                                    Fecha límite
                                </Label>

                                <Popover>

                                    <PopoverTrigger>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                w-full
                                                h-11
                                                rounded-md
                                                border
                                                border-slate-300
                                                dark:border-slate-700
                                                bg-white
                                                dark:bg-slate-900
                                                px-3
                                                text-sm
                                                shadow-sm
                                                cursor-pointer
                                                hover:bg-slate-100
                                                dark:hover:bg-slate-800
                                                transition
                                            "
                                        >

                                            <CalendarIcon className="mr-2 h-4 w-4" />

                                            {date
                                                ? date.toLocaleDateString()
                                                : "Seleccionar fecha"}

                                        </div>

                                    </PopoverTrigger>

                                    <PopoverContent
                                        className="
                                            w-auto
                                            p-0
                                            border
                                            border-slate-200
                                            dark:border-slate-800
                                            bg-white
                                            dark:bg-slate-950
                                            shadow-2xl
                                            rounded-xl
                                        "
                                    >

                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                        />

                                    </PopoverContent>

                                </Popover>

                            </div>

                        </div>

                    </div>

                    <DialogFooter
                        className="
                            px-6
                            py-4
                            border-t
                            border-slate-200
                            dark:border-slate-800
                            bg-slate-50
                            dark:bg-slate-900
                        "
                    >

                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                        >
                            Cancelar
                        </Button>

                        <Button
                            type="submit"
                            className="
                                bg-violet-600
                                hover:bg-violet-700
                                shadow-md
                            "
                        >
                            Crear Proyecto
                        </Button>

                    </DialogFooter>

                </form>

            </DialogContent>

        </Dialog>
    )
}