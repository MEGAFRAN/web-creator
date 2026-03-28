import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { StatsBar } from "@/components/sections/StatsBar";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/data/Card";
import { Heading } from "@/components/content/Heading";
import { Text } from "@/components/content/Text";
import { Badge } from "@/components/content/Badge";
import { Grid } from "@/components/layout/Grid";
import { Divider } from "@/components/layout/Divider";

interface Project {
  title: string;
  category: string;
  tagline: string;
  description: string;
  outcomes: string[];
  stack: string[];
  year: string;
}

const projects: Project[] = [
  {
    title: "Bloom Commerce",
    category: "E-commerce platform",
    tagline: "A headless storefront that doubled conversion rates",
    description:
      "Bloom needed to replace their aging Magento store with something faster and easier to manage. I architected and built a headless commerce solution using Next.js App Router, Shopify Storefront API, and a custom component library. The new storefront hit sub-second Time to First Byte globally and gave the marketing team full control over landing pages without engineering support.",
    outcomes: [
      "+22 % conversion rate within 30 days of launch",
      "Page load time reduced from 4.8 s to 0.9 s (Lighthouse 97)",
      "Marketing team self-serves page updates — zero developer tickets",
    ],
    stack: ["Next.js", "TypeScript", "Shopify API", "Tailwind CSS", "Vercel"],
    year: "2025",
  },
  {
    title: "Stackwise Developer Portal",
    category: "Developer tooling",
    tagline: "A unified API docs and sandbox portal for a B2B SaaS platform",
    description:
      "Stackwise had three separate documentation sites with inconsistent content and no interactive testing environment. I designed and built a unified developer portal featuring OpenAPI-driven reference docs, a live API sandbox, and an embeddable code playground. Usage of the docs jumped significantly and support tickets from developers fell in the first quarter after launch.",
    outcomes: [
      "3 fragmented doc sites consolidated into one portal",
      "Support tickets from developers down 38 % in Q1",
      "Average time-to-first-API-call reduced from 4 days to 6 hours",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAPI", "AWS ECS"],
    year: "2025",
  },
  {
    title: "Meridian Health Dashboard",
    category: "Data visualisation",
    tagline: "Real-time patient analytics for a network of 40+ clinics",
    description:
      "Meridian's clinical managers needed a single pane of glass across all their clinics — appointment volumes, no-show rates, and revenue by practitioner in real time. I built a HIPAA-compliant analytics dashboard integrating with their existing EMR via a secure event pipeline. Role-based access ensures staff see only what they need.",
    outcomes: [
      "Live data across 40+ clinic locations with < 5 s latency",
      "No-show rate visibility helped clinics reduce no-shows by 14 %",
      "HIPAA-compliant architecture passed external security audit",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Recharts"],
    year: "2024",
  },
  {
    title: "Launchpad Analytics",
    category: "SaaS application",
    tagline: "A multi-tenant marketing analytics platform built in six weeks",
    description:
      "Launchpad had a working proof-of-concept in Python scripts but needed a real product for their seed raise. In six weeks I designed the data model, built the API layer, and delivered a polished React frontend with multi-tenant auth, customisable dashboards, and a Stripe billing integration. They closed their seed round two weeks after launch.",
    outcomes: [
      "Zero-to-production in 6 weeks",
      "Seed round closed at $1.4 M",
      "50 paying customers within 90 days of launch",
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Vercel", "NextAuth"],
    year: "2024",
  },
  {
    title: "OpenFlow CMS",
    category: "Open source",
    tagline: "A lightweight Git-backed CMS for developer-run content sites",
    description:
      "A side project that grew into a community tool. OpenFlow is a headless CMS that stores content as MDX files in a Git repository, with a browser-based editor, live preview, and GitHub PR-based publishing workflow. It has been adopted by several open-source project documentation sites.",
    outcomes: [
      "400+ GitHub stars in the first 3 months",
      "Adopted by 12 open-source documentation sites",
      "Actively maintained with monthly releases",
    ],
    stack: ["Next.js", "MDX", "GitHub API", "Tailwind CSS"],
    year: "2023",
  },
  {
    title: "Pave Fintech",
    category: "Fintech",
    tagline: "A budgeting and debt-payoff planner for underserved consumers",
    description:
      "Pave wanted to make personal finance accessible to people traditionally ignored by fintech. I joined as the sole frontend engineer for six months, built out the React Native web app, integrated Plaid for bank connections, and led a performance overhaul that halved the initial load time ahead of their Series A.",
    outcomes: [
      "Initial load time reduced by 50 %",
      "Plaid integration with 6 000+ supported institutions",
      "Series A raised ($6.2 M) citing product quality",
    ],
    stack: ["React", "React Native Web", "GraphQL", "Plaid API", "AWS"],
    year: "2023",
  },
];

export default function WorkPage() {
  return (
    <>
      <Section background="white" paddingY="xl">
        <Hero
          headline="Selected work"
          subtext="A curated set of projects spanning e-commerce, SaaS, developer tooling, fintech, and healthtech. Every project listed here shipped to real users."
          align="center"
        />
      </Section>

      <StatsBar
        background="gray"
        stats={[
          { value: "50+", label: "Projects shipped" },
          { value: "6", label: "Industries served" },
          { value: "4.9/5", label: "Average client rating" },
          { value: "100%", label: "On-time delivery" },
        ]}
      />

      {/* Project case studies */}
      <Section background="white" paddingY="lg">
        <Container maxWidth="2xl" padding="md">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.title}>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Left: metadata */}
                  <div className="lg:col-span-1">
                    <Badge label={project.category} />
                    <div className="mt-3">
                      <Heading text={project.title} level="h2" />
                    </div>
                    <div className="mt-2">
                      <Text
                        content={project.year}
                        size="sm"
                        color="muted"
                        weight="medium"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-[var(--theme-mutedBg)] px-2 py-0.5 text-xs font-medium text-[var(--theme-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: detail */}
                  <div className="lg:col-span-2">
                    <p className="mb-3 text-lg font-semibold text-[var(--theme-foreground)]">
                      {project.tagline}
                    </p>
                    <p className="mb-6 leading-relaxed text-[var(--theme-muted)]">
                      {project.description}
                    </p>
                    <Card padding="md" border>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--theme-muted)]">
                        Outcomes
                      </p>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-sm text-[var(--theme-foreground)]"
                          >
                            <span className="mt-0.5 text-[var(--theme-primary)] shrink-0">✓</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>

                {index < projects.length - 1 && (
                  <div className="mt-16">
                    <Divider />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capability tags */}
      <Section background="gray" paddingY="lg">
        <Container maxWidth="2xl" padding="md">
          <div className="text-center mb-10">
            <Heading text="Full capability overview" level="h2" align="center" />
            <div className="mt-3">
              <Text
                content="A snapshot of the tools, frameworks, and domains I work across regularly."
                color="muted"
                align="center"
              />
            </div>
          </div>
          <Grid cols="3" gap="lg">
            <Card padding="md" border>
              <Heading text="Frontend" level="h4" />
              <div className="mt-3 space-y-1">
                {[
                  "React / Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "React Query",
                  "Zustand / Redux",
                ].map((item) => (
                  <p key={item} className="text-sm text-[var(--theme-muted)]">
                    {item}
                  </p>
                ))}
              </div>
            </Card>
            <Card padding="md" border>
              <Heading text="Backend" level="h4" />
              <div className="mt-3 space-y-1">
                {[
                  "Node.js / Express",
                  "PostgreSQL / MySQL",
                  "Prisma / Drizzle",
                  "Redis",
                  "REST & GraphQL",
                  "NextAuth / Auth.js",
                ].map((item) => (
                  <p key={item} className="text-sm text-[var(--theme-muted)]">
                    {item}
                  </p>
                ))}
              </div>
            </Card>
            <Card padding="md" border>
              <Heading text="Infrastructure" level="h4" />
              <div className="mt-3 space-y-1">
                {[
                  "AWS (EC2, RDS, S3, ECS)",
                  "Vercel / Netlify",
                  "Docker / Docker Compose",
                  "GitHub Actions",
                  "Terraform",
                  "Datadog / Sentry",
                ].map((item) => (
                  <p key={item} className="text-sm text-[var(--theme-muted)]">
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Testimonials
        title="Straight from the clients"
        testimonials={[
          {
            quote:
              "Alex delivered Bloom's new storefront exactly as promised — on time, on budget, and performing better than we expected. The conversion rate improvement speaks for itself.",
            author: "Marcus Webb",
            role: "Founder, Bloom Commerce",
          },
          {
            quote:
              "The developer portal Alex built has fundamentally changed how our customers onboard. Support load is down, activation is up, and our devs love it.",
            author: "Priya Nair",
            role: "Head of Product, Stackwise",
          },
        ]}
      />

      <CTA
        headline="Want to see more, or talk through your project?"
        subtext="I'm happy to share additional case studies under NDA for enterprise engagements."
        ctaLabel="Reach Out"
        background="dark"
      />
    </>
  );
}
