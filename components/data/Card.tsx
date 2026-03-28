import { ReactNode } from "react";

const paddingMap: Record<string, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

interface CardProps {
  title?: string | null;
  description?: string | null;
  footer?: string | null;
  padding?: string | null;
  border?: boolean | null;
  children?: ReactNode;
}

export function Card({ title, description, footer, padding, border, children }: CardProps) {
  const paddingClass = paddingMap[padding ?? "md"] ?? "p-6";
  const showBorder = border !== false;
  return (
    <div className={`rounded-xl bg-white ${showBorder ? "border border-gray-200" : ""} ${paddingClass}`}>
      {title && (
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      )}
      {description && (
        <p className="mb-4 text-gray-600">{description}</p>
      )}
      {children}
      {footer && (
        <p className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
          {footer}
        </p>
      )}
    </div>
  );
}
