const colsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

interface FooterProps {
  columns?: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }> | null;
  copyright?: string | null;
}

export function Footer({ columns, copyright }: FooterProps) {
  const colCount = Math.min(columns?.length ?? 0, 4);
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {columns && columns.length > 0 && (
          <div className={`grid ${colsMap[colCount] ?? "grid-cols-3"} gap-8 mb-8`}>
            {columns.map((col, i) => (
              <div key={i}>
                <p className="mb-3 text-sm font-semibold text-gray-900">{col.title}</p>
                <ul className="space-y-2">
                  {col.links?.map((link, j) => (
                    <li key={j}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {copyright && (
          <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            {copyright}
          </p>
        )}
      </div>
    </footer>
  );
}
