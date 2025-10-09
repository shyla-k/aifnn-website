import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-400 outline-none ${className}`}
      {...props}
    />
  );
}
