"use client";
import { useState } from "react";

interface FAQProps {
  title?: string | null;
  items: Array<{ question: string; answer: string }>;
}

export function FAQ({ title, items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="w-full px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {title && (
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">{title}</h2>
        )}
        <div className="divide-y divide-gray-200">
          {items?.map((item, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <span className="ml-6 text-gray-400 text-xl leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && <p className="mt-3 text-gray-600">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
