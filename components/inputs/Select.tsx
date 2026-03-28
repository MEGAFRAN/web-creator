"use client";
import { useState } from "react";

interface SelectProps {
  label?: string | null;
  options: string[];
  value?: string | null;
  placeholder?: string | null;
}

export function Select({ label, options, value: initialValue, placeholder }: SelectProps) {
  const [value, setValue] = useState<string>(initialValue ?? "");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options?.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
