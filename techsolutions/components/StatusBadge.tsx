type Status = "Activo" | "En Progreso" | "Finalizado";

const statusStyles: Record<Status, string> = {
  Activo: "bg-green-100 text-green-800 border border-green-300",
  "En Progreso": "bg-yellow-100 text-yellow-800 border border-yellow-300",
  Finalizado: "bg-gray-100 text-gray-600 border border-gray-300",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[status]}`}>
      {status}
    </span>
  );
}