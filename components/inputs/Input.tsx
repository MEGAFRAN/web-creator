"use client";
import { useState } from "react";

interface InputProps {
  label?: string | null;
  placeholder?: string | null;
  value?: string | null;
  type?: string | null;
  required?: boolean | null;
}

export function Input({ label, placeholder, value: initialValue, type, required }: InputProps) {
  const [value, setValue] = useState<string>(initialValue ?? "");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type ?? "text"}
        placeholder={placeholder ?? ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required ?? false}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
    </div>
  );
}
