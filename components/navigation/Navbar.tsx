"use client";

export function Navbar({
  logo,
  links,
  ctaLabel,
}: {
  logo: string;
  links?: { label: string; href: string }[] | null;
  ctaLabel?: string | null;
  ctaAction?: string | null;
}) {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-lg font-bold text-gray-900">{logo}</span>
        <div className="flex items-center gap-6">
          {links?.map((link, i) => (
            <a key={`${i}-${link.href}`} href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
              {link.label}
            </a>
          ))}
          {ctaLabel && (
            <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
              {ctaLabel}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
