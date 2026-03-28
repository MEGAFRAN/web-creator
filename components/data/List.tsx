const sizeMap: Record<string, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

interface ListProps {
  items: string[];
  ordered?: boolean | null;
  size?: string | null;
}

export function List({ items, ordered, size }: ListProps) {
  const Tag = ordered ? "ol" : "ul";
  const sizeClass = sizeMap[size ?? "base"] ?? "text-base";
  return (
    <Tag
      className={`${ordered ? "list-decimal" : "list-disc"} list-inside space-y-1 ${sizeClass} text-foreground`}
    >
      {items?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
}
