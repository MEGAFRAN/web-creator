const bgMap: Record<string, string> = {
  white: "bg-white",
  gray: "bg-gray-50",
  dark: "bg-gray-900",
};

const valueColorMap: Record<string, string> = {
  white: "text-gray-900",
  gray: "text-gray-900",
  dark: "text-white",
};

const labelColorMap: Record<string, string> = {
  white: "text-gray-500",
  gray: "text-gray-500",
  dark: "text-gray-400",
};

const colsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

interface StatsBarProps {
  stats: Array<{ value: string; label: string }>;
  background?: string | null;
}

export function StatsBar({ stats, background }: StatsBarProps) {
  const bg = background ?? "white";
  const colCount = Math.min(stats?.length ?? 0, 4);
  return (
    <div className={`w-full px-6 py-12 ${bgMap[bg] ?? "bg-white"}`}>
      <div className="mx-auto max-w-6xl">
        <dl className={`grid ${colsMap[colCount] ?? "grid-cols-4"} gap-8 text-center`}>
          {stats?.map((stat, i) => (
            <div key={i}>
              <dt className={`text-4xl font-bold ${valueColorMap[bg] ?? "text-gray-900"}`}>
                {stat.value}
              </dt>
              <dd className={`mt-2 text-sm ${labelColorMap[bg] ?? "text-gray-500"}`}>
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
