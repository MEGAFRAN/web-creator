"use client";
import { useState } from "react";

interface CheckboxProps {
  label: string;
  checked?: boolean | null;
}

export function Checkbox({ label, checked: initialChecked }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(initialChecked ?? false);
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
