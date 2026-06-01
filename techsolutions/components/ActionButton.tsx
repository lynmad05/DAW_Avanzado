import { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export default function ActionButton({
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  onClick,
}: ActionButtonProps) {
  const base = "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:scale-95",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 active:scale-95",
  };
  const disabledStyle = "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${disabled || loading ? disabledStyle : ""}`}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {loading ? "Cargando..." : children}
    </button>
  );
}