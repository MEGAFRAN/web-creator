import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/data/Card";
import { Heading } from "@/components/content/Heading";
import { Text } from "@/components/content/Text";
import { Badge } from "@/components/content/Badge";
import { Grid } from "@/components/layout/Grid";

export default function ServicesPage() {
  return (
    <>
      <Section background="white" paddingY="xl">
        <Hero
          headline="Services built around your goals"
          subtext="Whether you need a brand-new product built from scratch, a legacy codebase modernised, or expert guidance to unblock your team — I've got you covered."
          ctaLabel="Discuss Your Project"
          align="center"
        />
      </Section>

      {/* Core service cards */}
      <Section background="gray" paddingY="lg">
        <Container maxWidth="2xl" padding="md">
          <div className="mb-12 text-center">
            <Heading text="Core offerings" level="h2" align="center" />
            <div className="mt-3">
              <Text
                content="Every engagement is scoped to your specific needs — no bloated retainers, no cookie-cutter packages."
                size="lg"
                color="muted"
                align="center"
              />
            </div>
          </div>
          <Grid cols="3" gap="lg">
            <Card padding="lg" border>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🏗️</span>
                <Badge label="Most Popular" variant="success" />
              </div>
              <Heading text="Custom Web Application" level="h3" />
              <div className="mt-3 mb-4">
                <Text
                  content="End-to-end design and development of web applications using React, Next.js, and a backend stack tailored to your requirements. Includes architecture planning, database design, API development, and production deployment."
                  color="muted"
                />
              </div>
              <ul className="space-y-2 text-sm text-[var(--theme-muted)]">
                <li>✓ Requirements & technical scoping</li>
                <li>✓ UI/UX design collaboration</li>
                <li>✓ Frontend + backend development</li>
                <li>✓ Testing & QA</li>
                <li>✓ Production deployment & handover</li>
              </ul>
            </Card>

            <Card padding="lg" border>
              <div className="mb-3">
                <span className="text-2xl">🔄</span>
              </div>
              <Heading text="Modernisation & Refactoring" level="h3" />
              <div className="mt-3 mb-4">
                <Text
                  content="Struggling with a slow, fragile, or hard-to-maintain codebase? I audit, refactor, and migrate legacy apps to modern standards — without stopping the business."
                  color="muted"
                />
              </div>
              <ul className="space-y-2 text-sm text-[var(--theme-muted)]">
                <li>✓ Codebase & dependency audit</li>
                <li>✓ Framework migration (e.g. CRA → Next.js)</li>
                <li>✓ Performance optimisation</li>
                <li>✓ Test coverage uplift</li>
                <li>✓ Documentation</li>
              </ul>
            </Card>

            <Card padding="lg" border>
              <div className="mb-3">
                <span className="text-2xl">🧭</span>
              </div>
              <Heading text="Technical Consulting" level="h3" />
              <div className="mt-3 mb-4">
                <Text
                  content="Short-term advisory engagements for teams that need outside perspective. Architecture reviews, tech-stack decisions, hiring support, or hands-on pairing sessions with your engineers."
                  color="muted"
                />
              </div>
              <ul className="space-y-2 text-sm text-[var(--theme-muted)]">
                <li>✓ Architecture & stack reviews</li>
                <li>✓ Code review & mentoring</li>
                <li>✓ Engineering hiring support</li>
                <li>✓ Workshop facilitation</li>
                <li>✓ Flexible hourly or day-rate</li>
              </ul>
            </Card>
          </Grid>
        </Container>
      </Section>

      <FeatureGrid
        title="How I work"
        subtitle="A process designed to keep you informed and in control at every step."
        cols="3"
        features={[
          {
            icon: "1️⃣",
            title: "Discovery call",
            description:
              "We start with a free 30-minute call to understand your goals, constraints, and timeline. No sales pressure.",
          },
          {
            icon: "2️⃣",
            title: "Scoping & proposal",
            description:
              "I produce a detailed written proposal — deliverables, milestones, and fixed price or time-and-materials estimate.",
          },
          {
            icon: "3️⃣",
            title: "Iterative development",
            description:
              "Weekly check-ins, a shared Notion board, and early staging deployments mean you see progress continuously.",
          },
          {
            icon: "4️⃣",
            title: "Review & testing",
            description:
              "Automated tests plus a structured manual QA pass before anything goes to production.",
          },
          {
            icon: "5️⃣",
            title: "Launch & handover",
            description:
              "I manage the production deployment and hand over full source code, documentation, and runbooks.",
          },
          {
            icon: "6️⃣",
            title: "Post-launch support",
            description:
              "Two weeks of complimentary post-launch support included on every project. Extended retainers available.",
          },
        ]}
      />

      <StatsBar
        background="dark"
        stats={[
          { value: "2–8 wks", label: "Typical project timeline" },
          { value: "100%", label: "Fixed-price transparency" },
          { value: "2 wks", label: "Free post-launch support" },
          { value: "< 4 hrs", label: "Average response time" },
        ]}
      />

      <FAQ
        title="Frequently asked questions"
        items={[
          {
            question: "Do you work with startups or only established companies?",
            answer:
              "Both. I enjoy working with early-stage startups that need to move fast, as well as growth-stage and enterprise teams that need specialist help. I adapt my process to your maturity level.",
          },
          {
            question: "What does a typical engagement cost?",
            answer:
              "Small projects start around $5 000 and larger custom applications typically range from $15 000 to $60 000+. I provide fixed-price proposals after the discovery call so there are no surprises.",
          },
          {
            question: "Can you join our team on a part-time or contract basis?",
            answer:
              "Yes. I offer a flexible contractor arrangement where I work a set number of days per week alongside your existing team. This is popular with Series A/B companies that need extra capacity without a full-time hire.",
          },
          {
            question: "Do you handle design as well as development?",
            answer:
              "I can translate wireframes and brand guides into polished UIs with high fidelity. For greenfield projects without existing design assets, I collaborate with trusted design partners or can work from a brief directly.",
          },
          {
            question: "Who owns the code at the end of the project?",
            answer:
              "You do. Full IP assignment is included in every contract. There are no licensing hooks or recurring fees tied to the codebase.",
          },
        ]}
      />

      <CTA
        headline="Let's scope your project"
        subtext="Send me a short description of what you're building and I'll reply within one business day."
        ctaLabel="Get a Free Quote"
        background="gray"
      />
    </>
  );
}
