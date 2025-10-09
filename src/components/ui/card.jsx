import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-md bg-white p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
