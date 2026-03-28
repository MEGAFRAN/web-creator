import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/data/Card";
import { Heading } from "@/components/content/Heading";
import { Text } from "@/components/content/Text";
import { Badge } from "@/components/content/Badge";
import { Grid } from "@/components/layout/Grid";
import { Divider } from "@/components/layout/Divider";

const timeline = [
  {
    year: "2026",
    event: "Independent consulting",
    detail:
      "Expanded freelance practice, working with startups and scale-ups across healthtech, fintech, and developer tooling.",
  },
  {
    year: "2024",
    event: "Senior Engineer at Meridian Health",
    detail:
      "Led the frontend platform team, introduced the design system, and drove a 50 % reduction in CI build times.",
  },
  {
    year: "2022",
    event: "Full-Stack Engineer at Pave Fintech",
    detail:
      "Sole frontend engineer for the first 12 months; helped the team grow from seed to Series A.",
  },
  {
    year: "2020",
    event: "Software Engineer at Stackwise",
    detail:
      "First professional role. Built internal tooling and contributed to the public API SDK.",
  },
  {
    year: "2019",
    event: "BSc Computer Science, UC Berkeley",
    detail:
      "Graduated with distinction. Undergraduate thesis on accessibility patterns in single-page applications.",
  },
];

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "Bash"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Storybook"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis", "Prisma"] },
  { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Terraform"] },
  { category: "Testing", items: ["Vitest", "Playwright", "React Testing Library", "Jest"] },
  { category: "Methods", items: ["Agile / Scrum", "Shape Up", "TDD", "Accessibility (WCAG 2.1)"] },
];

export default function AboutPage() {
  return (
    <>
      <Section background="white" paddingY="xl">
        <Hero
          headline="Hi, I'm Alex Morgan."
          subtext="Full-stack web developer based in San Francisco. I've spent the past eight years building products that people actually want to use — and helping engineering teams do the same."
          ctaLabel="Download Resume"
          secondaryLabel="Get In Touch"
          align="left"
        />
      </Section>

      {/* Bio section */}
      <Section background="gray" paddingY="lg">
        <Container maxWidth="2xl" padding="md">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Avatar placeholder */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="h-64 w-64 rounded-2xl bg-[var(--theme-mutedBg)] border border-[var(--theme-border)] flex items-center justify-center shrink-0">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-3 space-y-4">
              <Heading text="A bit about me" level="h2" />
              <Text
                content="I started building websites as a teenager because I was frustrated that the tools I wanted didn't exist — so I made them. That curiosity has never gone away. Today I work at the intersection of design and engineering, translating business problems into software that feels inevitable."
                color="muted"
                size="lg"
              />
              <Text
                content="I believe the best products come from genuinely understanding users. I embed accessibility into every project from day one, obsess over Core Web Vitals, and write code that the next developer will actually enjoy maintaining."
                color="muted"
                size="lg"
              />
              <Text
                content="Outside of work you'll find me hiking in Marin County, reading about systems design, or contributing to open-source projects that scratch my own itches."
                color="muted"
                size="lg"
              />
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge label="Open to new projects" variant="success" />
                <Badge label="Based in San Francisco" />
                <Badge label="Available for remote work" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <StatsBar
        background="white"
        stats={[
          { value: "8 yrs", label: "Professional experience" },
          { value: "50+", label: "Projects shipped" },
          { value: "30+", label: "Clients worldwide" },
          { value: "400+", label: "GitHub stars earned" },
        ]}
      />

      {/* Skills grid */}
      <Section background="gray" paddingY="lg">
        <Container maxWidth="2xl" padding="md">
          <div className="mb-10 text-center">
            <Heading text="Skills & technologies" level="h2" align="center" />
            <div className="mt-3">
              <Text
                content="Tools and techniques I reach for day-to-day — picked up through real projects, not just side experiments."
                color="muted"
                align="center"
              />
            </div>
          </div>
          <Grid cols="3" gap="lg">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} padding="md" border>
                <Heading text={skillGroup.category} level="h4" />
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-[var(--theme-background)] border border-[var(--theme-border)] px-2.5 py-0.5 text-xs font-medium text-[var(--theme-foreground)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Career timeline */}
      <Section background="white" paddingY="lg">
        <Container maxWidth="2xl" padding="md">
          <div className="mb-10">
            <Heading text="Career timeline" level="h2" align="center" />
            <div className="mt-3">
              <Text
                content="A quick look at where I've been and what I've done."
                color="muted"
                align="center"
              />
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-0">
            {timeline.map((entry, index) => (
              <div key={entry.year} className="relative">
                <div className="flex gap-6">
                  {/* Year column */}
                  <div className="w-16 shrink-0 pt-1">
                    <Text content={entry.year} weight="semibold" size="sm" />
                  </div>
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[var(--theme-primary)]" />
                    {index < timeline.length - 1 && (
                      <div className="flex-1 w-px bg-[var(--theme-border)] mt-1" style={{ minHeight: "3rem" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8">
                    <p className="font-semibold text-[var(--theme-foreground)]">{entry.event}</p>
                    <p className="mt-1 text-sm text-[var(--theme-muted)]">{entry.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FeatureGrid
        title="How I like to work"
        subtitle="Values that shape how I show up for clients and teammates."
        cols="3"
        features={[
          {
            icon: "🤝",
            title: "Collaborative partner",
            description:
              "I treat every project as a partnership. You know your domain — I know software. Together we make better decisions than either of us could alone.",
          },
          {
            icon: "📣",
            title: "Radically transparent",
            description:
              "No bad news dropped at the last minute. If something is off track, you hear about it the same day I discover it.",
          },
          {
            icon: "🎯",
            title: "Outcome-oriented",
            description:
              "I care about shipping things that actually move the needle for your users and your business — not lines of code or hours logged.",
          },
          {
            icon: "📚",
            title: "Continuous learner",
            description:
              "The web moves fast. I set aside time every week to study what's changing in the ecosystem so I can bring informed recommendations.",
          },
          {
            icon: "✅",
            title: "High ownership",
            description:
              "I see tasks through to completion without needing hand-holding. If something is outside my remit but blocking the project, I'll flag it and find a path forward.",
          },
          {
            icon: "🌱",
            title: "Mentor mindset",
            description:
              "I enjoy pairing with junior developers and leaving teams better than I found them — through documentation, code review, and knowledge sharing.",
          },
        ]}
      />

      <Divider />

      <Testimonials
        title="What colleagues say"
        testimonials={[
          {
            quote:
              "Working with Alex changed how I think about frontend architecture. Every PR was a learning opportunity. The codebase he left us is something we're genuinely proud of.",
            author: "Jess Romero",
            role: "Engineering Manager, Meridian Health",
          },
          {
            quote:
              "Alex has a rare combination of technical depth and business empathy. He asks the right questions before writing a single line of code.",
            author: "Tom Kalder",
            role: "Product Lead, Pave Fintech",
          },
        ]}
      />

      <CTA
        headline="Let's build something together"
        subtext="I'm currently open to new freelance engagements and select full-time opportunities."
        ctaLabel="Get In Touch"
        background="dark"
      />
    </>
  );
}
