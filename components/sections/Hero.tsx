"use client";

export function Hero({
  headline,
  subtext,
  ctaLabel,
  secondaryLabel,
  align = "center",
}: {
  headline: string;
  subtext?: string | null;
  ctaLabel?: string | null;
  ctaAction?: string | null;
  secondaryLabel?: string | null;
  secondaryAction?: string | null;
  align?: "left" | "center" | null;
}) {
  const textAlign = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col gap-6 px-6 py-20 ${textAlign}`}>
      <h1 className="text-5xl font-bold tracking-tight text-gray-900">{headline}</h1>
      {subtext && <p className="max-w-xl text-lg text-gray-500">{subtext}</p>}
      {(ctaLabel || secondaryLabel) && (
        <div className="flex flex-wrap gap-3">
          {ctaLabel && (
            <button className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700">
              {ctaLabel}
            </button>
          )}
          {secondaryLabel && (
            <button className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
              {secondaryLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
