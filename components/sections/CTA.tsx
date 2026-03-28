"use client";

const bgMap = { white: "bg-white", gray: "bg-gray-50", dark: "bg-gray-900" };

export function CTA({
  headline,
  subtext,
  ctaLabel,
  background = "gray",
}: {
  headline: string;
  subtext?: string | null;
  ctaLabel: string;
  ctaAction?: string | null;
  background?: "white" | "gray" | "dark" | null;
}) {
  const bg = bgMap[background ?? "gray"];
  const isDark = background === "dark";
  return (
    <div className={`flex flex-col items-center gap-6 px-6 py-20 text-center ${bg}`}>
      <h2 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{headline}</h2>
      {subtext && <p className={`max-w-xl text-lg ${isDark ? "text-gray-300" : "text-gray-500"}`}>{subtext}</p>}
      <button className={`rounded-md px-6 py-3 text-sm font-medium ${isDark ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-700"}`}>
        {ctaLabel}
      </button>
    </div>
  );
}
