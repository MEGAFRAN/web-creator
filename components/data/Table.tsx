interface TableProps {
  columns: string[];
  rows: string[][];
  striped?: boolean | null;
}

export function Table({ columns, rows, striped }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns?.map((col, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows?.map((row, i) => (
            <tr key={i} className={striped && i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-sm text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
