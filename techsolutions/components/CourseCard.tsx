import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";
import { Course } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Frontend:         "bg-violet-500/10 border-violet-500/30 text-violet-300",
  Backend:          "bg-green-500/10 border-green-500/30 text-green-300",
  "Full Stack":     "bg-blue-500/10 border-blue-500/30 text-blue-300",
  DevOps:           "bg-pink-500/10 border-pink-500/30 text-pink-300",
  "Bases de Datos": "bg-amber-500/10 border-amber-500/30 text-amber-300",
};

const gradients: Record<string, string> = {
  Frontend:         "from-violet-950 to-indigo-950",
  Backend:          "from-green-950 to-teal-950",
  "Full Stack":     "from-blue-950 to-slate-900",
  DevOps:           "from-pink-950 to-rose-950",
  "Bases de Datos": "from-amber-950 to-orange-950",
};

export default function CourseCard({ course }: { course: Course }) {
  const catColor = categoryColors[course.categoria] ?? "bg-gray-500/10 border-gray-500/30 text-gray-300";
  const grad = gradients[course.categoria] ?? "from-gray-900 to-gray-800";

  return (
    <div className="border border-[#1e1e2e] rounded-2xl overflow-hidden
                    hover:border-violet-500/30 transition-all duration-300 group flex flex-col">
      <div className={`h-32 bg-gradient-to-br ${grad} flex items-center justify-center`}>
        <img src={course.imagen} alt={course.nombre} className="w-full h-full object-fill" />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${catColor}`}>
            {course.categoria}
          </span>
          <StatusBadge status={course.estado} />
        </div>

        <h2 className="text-base font-bold text-black leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}>
          {course.nombre}
        </h2>

        <p className="text-[13px] text-[#555] leading-relaxed flex-1">{course.descripcion}</p>

        <div className="flex items-center justify-between pt-2 border-t border-[#1e1e2e]">
          <span className="text-[11px] text-[#444]">⏱ {course.duracion}h de contenido</span>
          <ActionButton variant="primary">Ver Detalles</ActionButton>
        </div>
      </div>
    </div>
  );
}