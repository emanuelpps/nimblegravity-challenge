import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  onClick,
  disabled,
  loading,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98] disabled:opacity-50 cursor-pointer"
    >
      {loading ? "Submitting..." : children}
    </button>
  );
}
