interface NavLinkProps {
  label: string;
  href: string;
  active?: boolean | null;
}

export function NavLink({ label, href, active }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-sm transition-colors ${
        active
          ? "font-medium text-gray-900"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {label}
    </a>
  );
}
