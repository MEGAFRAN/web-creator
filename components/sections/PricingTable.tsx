interface PricingTier {
  name: string;
  price: string;
  period?: string | null;
  description?: string | null;
  features: string[];
  ctaLabel: string;
  ctaAction?: string | null;
  highlighted?: boolean | null;
}

interface PricingTableProps {
  title?: string | null;
  subtitle?: string | null;
  tiers: PricingTier[];
  onPress?: () => void;
}

export function PricingTable({ title, subtitle, tiers, onPress }: PricingTableProps) {
  const gridCols =
    tiers?.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3";
  return (
    <div className="w-full px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {title && (
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">{title}</h2>
        )}
        {subtitle && (
          <p className="mb-12 text-center text-lg text-gray-600">{subtitle}</p>
        )}
        <div className={`grid ${gridCols} gap-8`}>
          {tiers?.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl border p-8 ${
                tier.highlighted ? "border-gray-900 shadow-lg" : "border-gray-200"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
              <div className="mb-2 mt-4">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                {tier.period && <span className="ml-1 text-gray-500">{tier.period}</span>}
              </div>
              {tier.description && (
                <p className="mb-6 text-gray-600">{tier.description}</p>
              )}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features?.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 text-gray-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={onPress}
                className={`w-full rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-gray-900 text-white hover:bg-gray-700"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tier.ctaLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
