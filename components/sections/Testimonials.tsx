interface Testimonial {
  quote: string;
  author: string;
  role?: string | null;
  avatar?: string | null;
}

interface TestimonialsProps {
  title?: string | null;
  testimonials: Testimonial[];
}

export function Testimonials({ title, testimonials }: TestimonialsProps) {
  const cols =
    (testimonials?.length ?? 0) > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1";
  return (
    <div className="w-full bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {title && (
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">{title}</h2>
        )}
        <div className={`grid ${cols} gap-8`}>
          {testimonials?.map((t, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-8">
              <p className="mb-6 text-lg leading-relaxed text-gray-700">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                {t.avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  {t.role && <p className="text-sm text-gray-500">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
