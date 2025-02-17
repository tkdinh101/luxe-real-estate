import React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`border p-2 rounded-lg w-full ${className}`}
      {...props}
    />
  );
}
