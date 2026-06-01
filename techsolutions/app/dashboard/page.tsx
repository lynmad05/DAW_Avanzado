import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/lib/data";

export default function DashboardPage() {
  const total = courses.length;
  const activos = courses.filter((c) => c.estado === "Activo").length;
  const finalizados = courses.filter((c) => c.estado === "Finalizado").length;
  const enProgreso = courses.filter((c) => c.estado === "En Progreso").length;

  const stats = [
    {
      label: "Total cursos",
      value: total,
      color: "text-purple-400",
      bar: "bg-violet-500",
    },
    {
      label: "Activos",
      value: activos,
      color: "text-green-400",
      bar: "bg-green-400",
    },
    {
      label: "En progreso",
      value: enProgreso,
      color: "text-yellow-400",
      bar: "bg-yellow-400",
    },
    {
      label: "Finalizados",
      value: finalizados,
      color: "text-[#666]",
      bar: "bg-[#444]",
    },
  ];

  const categories = [
    "Frontend",
    "Backend",
    "Full Stack",
    "DevOps",
    "Bases de Datos",
  ];

  const catColors = [
    "bg-violet-500",
    "bg-green-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-red-400",
  ];

  const tabs = [
    { value: "todos", label: "Todos", data: courses },
    {
      value: "activos",
      label: "Activos",
      data: courses.filter((c) => c.estado === "Activo"),
    },
    {
      value: "progreso",
      label: "En Progreso",
      data: courses.filter((c) => c.estado === "En Progreso"),
    },
    {
      value: "finalizados",
      label: "Finalizados",
      data: courses.filter((c) => c.estado === "Finalizado"),
    },
  ];

  return (
    <main
      className="min-h-screen px-4 py-6 sm:px-6 lg:px-8"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');`}
      </style>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <h1
              className="text-2xl sm:text-3xl font-black text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Dashboard
            </h1>

            <p className="text-[#555] text-sm mt-1">
              Gestión de cursos tecnológicos
            </p>
          </div>

          <span className="text-[10px] font-semibold px-3 py-1.5 rounded-full text-green-400 border border-green-800 w-fit">
            ● En vivo
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-[#1e1e2e] rounded-xl p-4 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] ${s.bar}`}
              />

              <div
                className={`text-2xl sm:text-3xl font-black ${s.color}`}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {s.value}
              </div>

              <div className="text-[11px] text-[#555] mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <Tabs defaultValue="todos" className="mb-6">
          <TabsList className="bg-white border border-[#1e1e2e] p-1 h-auto flex flex-wrap w-full sm:w-fit gap-1">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="text-xs data-[state=active]:bg-[#1e1e30] data-[state=active]:text-white text-[#555] rounded-md px-4 py-1.5"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map(({ value, data }) => (
            <TabsContent key={value} value={value}>
              <div className="hidden md:block border border-[#1e1e2e] rounded-xl overflow-hidden">
                <div className="grid grid-cols-[2fr_1fr_0.7fr_1fr_0.8fr] px-4 py-2.5 border-b border-[#1a1a26]">
                  {[
                    "Curso",
                    "Categoría",
                    "Duración",
                    "Estado",
                    "Acción",
                  ].map((h) => (
                    <span
                      key={h}
                      className="text-[10px] text-[#444] uppercase tracking-wider font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {data.map((course, i) => (
                  <div
                    key={course.id}
                    className={`grid grid-cols-[2fr_1fr_0.7fr_1fr_0.8fr] px-4 py-3 items-center ${
                      i < data.length - 1
                        ? "border-b border-[#0f0f18]"
                        : ""
                    }`}
                  >
                    <span className="text-sm text-black font-medium">
                      {course.nombre}
                    </span>

                    <span className="text-xs text-[#555]">
                      {course.categoria}
                    </span>

                    <span className="text-xs text-[#555]">
                      {course.duracion}h
                    </span>

                    <Badge
                      variant="outline"
                      className="w-fit text-[10px] border-[#2a2a35] text-[#888] bg-transparent"
                    >
                      {course.estado}
                    </Badge>

                    <Button
                      size="sm"
                      variant="outline"
                      className="text-[11px] h-7 border-[#2a2440] text-violet-400 bg-transparent hover:bg-violet-500/10 w-fit"
                    >
                      Ver →
                    </Button>
                  </div>
                ))}
              </div>

              <div className="md:hidden space-y-3">
                {data.map((course) => (
                  <div
                    key={course.id}
                    className="border border-[#1e1e2e] rounded-xl p-4"
                  >
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-black">
                          {course.nombre}
                        </h3>

                        <p className="text-xs text-[#666] mt-1">
                          {course.categoria}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#666]">
                          {course.duracion}h
                        </span>

                        <Badge
                          variant="outline"
                          className="text-[10px] border-[#2a2a35] text-[#888] bg-transparent"
                        >
                          {course.estado}
                        </Badge>
                      </div>

                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-[11px] border-[#2a2440] text-violet-400 bg-transparent hover:bg-violet-500/10"
                      >
                        Ver →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="border border-[#1e1e2e] rounded-xl p-4 sm:p-5">
          <h3 className="text-xs text-[#888] font-medium uppercase tracking-wider mb-4">
            Distribución por categoría
          </h3>

          <div className="space-y-3">
            {categories.map((cat, i) => {
              const count = courses.filter(
                (c) => c.categoria === cat
              ).length;

              const pct = total
                ? Math.round((count / total) * 100)
                : 0;

              return (
                <div key={cat} className="flex items-center gap-3">
                  <span className="text-[11px] text-[#666] w-20 sm:w-28 shrink-0">
                    {cat}
                  </span>

                  <div className="flex-1 h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${catColors[i]}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <span className="text-[11px] text-[#555] w-5 text-right">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}