import { NextRequest, NextResponse } from "next/server";
import { courses, Course } from "@/lib/data";

// Base de datos en memoria (para esta sesión)
const db: Course[] = [...courses];

export async function GET() {
  return NextResponse.json({ success: true, data: db }, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.nombre || !body.categoria || !body.duracion) {
      return NextResponse.json(
        { success: false, message: "Faltan campos obligatorios: nombre, categoria, duracion" },
        { status: 400 }
      );
    }

    const newCourse: Course = {
      id: db.length + 1,
      nombre: body.nombre,
      categoria: body.categoria,
      duracion: body.duracion,
      descripcion: body.descripcion || "",
      imagen: `https://placehold.co/400x200/6366f1/white?text=${encodeURIComponent(body.nombre)}`,
      estado: "Activo",
    };

    db.push(newCourse);

    return NextResponse.json({ success: true, data: newCourse }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, message: "Error al procesar la solicitud" }, { status: 500 });
  }
}