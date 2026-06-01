import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";

export default function CoursesPage() {
  const total = courses.length;
  const activos = courses.filter((c) => c.estado === "Activo").length;
  const enProgreso = courses.filter((c) => c.estado === "En Progreso").length;
  const finalizados = courses.filter((c) => c.estado === "Finalizado").length;

  return (
    <main className="min-h-screen  py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-[11px] text-violet-400 tracking-[3px] uppercase font-medium mb-2">
            Catálogo 2025
          </p>
          <h1 className="font-black text-4xl text-black tracking-tight mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}>
            Cursos Tecnológicos
          </h1>
          <p className="text-[#555] text-sm">
            Domina las tecnologías más demandadas del mercado
          </p>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { label: "Total", value: total, color: "text-purple-400", bar: "bg-violet-500" },
            { label: "Activos", value: activos, color: "text-green-400", bar: "bg-green-400" },
            { label: "En Progreso", value: enProgreso, color: "text-yellow-400", bar: "bg-yellow-400" },
            { label: "Finalizados", value: finalizados, color: "text-[#666]", bar: "bg-[#444]" },
          ].map((s) => (
            <div key={s.label}
                 className=" border border-[#1e1e2e] rounded-xl p-4 relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${s.bar}`} />
              <div className={`text-3xl font-black ${s.color}`}
                   style={{ fontFamily: "'Syne', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-[11px] text-[#555] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-8 flex-wrap">
          {["Todos", "Frontend", "Backend", "Full Stack", "DevOps", "Bases de Datos"].map((f, i) => (
            <span key={f}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border cursor-pointer transition-all ${
                    i === 0
                      ? "bg-violet-500/10 border-violet-500/50 text-violet-300"
                      : "border-[#222] text-[#666] hover:border-[#333]"
                  }`}>
              {f}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');`}</style>
    </main>
  );
}