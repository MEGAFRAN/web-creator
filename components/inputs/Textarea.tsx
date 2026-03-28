"use client";
import { useState } from "react";

interface TextareaProps {
  label?: string | null;
  placeholder?: string | null;
  value?: string | null;
  rows?: number | null;
  required?: boolean | null;
}

export function Textarea({ label, placeholder, value: initialValue, rows, required }: TextareaProps) {
  const [value, setValue] = useState<string>(initialValue ?? "");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <textarea
        placeholder={placeholder ?? ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={rows ?? 4}
        required={required ?? false}
        className="resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
    </div>
  );
}
