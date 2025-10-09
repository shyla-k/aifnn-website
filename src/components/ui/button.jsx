import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
