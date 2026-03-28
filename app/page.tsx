import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Section } from "@/components/layout/Section";

export default function HomePage() {
  return (
    <>
      <Section background="white" paddingY="xl">
        <Hero
          headline="I build web apps people love to use."
          subtext="Full-stack developer specialising in React, Next.js, and Node.js. I turn complex problems into clean, scalable products — on time and on budget."
          ctaLabel="View My Work"
          secondaryLabel="Get In Touch"
          align="center"
        />
      </Section>

      <StatsBar
        background="gray"
        stats={[
          { value: "50+", label: "Projects delivered" },
          { value: "8 yrs", label: "Industry experience" },
          { value: "30+", label: "Happy clients" },
          { value: "99%", label: "On-time delivery" },
        ]}
      />

      <FeatureGrid
        title="What I bring to every project"
        subtitle="From idea to deployment, I cover the full stack so you get one accountable partner instead of juggling multiple contractors."
        cols="3"
        features={[
          {
            icon: "⚡",
            title: "Performance-first development",
            description:
              "Every line of code is written with speed in mind. Core Web Vitals scores in the green, every time.",
          },
          {
            icon: "♿",
            title: "Accessible by default",
            description:
              "WCAG 2.1 AA compliance baked in from the start — not bolted on as an afterthought.",
          },
          {
            icon: "📱",
            title: "Responsive & mobile-ready",
            description:
              "Pixel-perfect on every screen size, from a 320 px phone to a 4 K desktop.",
          },
          {
            icon: "🔒",
            title: "Secure & production-hardened",
            description:
              "Auth, data validation, and dependency audits are standard practice, not optional extras.",
          },
          {
            icon: "🔗",
            title: "API & integration expertise",
            description:
              "REST, GraphQL, webhooks — I connect your product to the third-party services you depend on.",
          },
          {
            icon: "🚀",
            title: "CI/CD & cloud deployment",
            description:
              "Automated pipelines on Vercel, AWS, or GCP so shipping new features takes minutes, not days.",
          },
        ]}
      />

      <LogoCloud
        title="Technologies I work with every day"
        logos={[
          { alt: "React", name: "React" },
          { alt: "Next.js", name: "Next.js" },
          { alt: "TypeScript", name: "TypeScript" },
          { alt: "Node.js", name: "Node.js" },
          { alt: "PostgreSQL", name: "PostgreSQL" },
          { alt: "Tailwind CSS", name: "Tailwind CSS" },
          { alt: "AWS", name: "AWS" },
          { alt: "Vercel", name: "Vercel" },
        ]}
      />

      <Testimonials
        title="What clients say"
        testimonials={[
          {
            quote:
              "Alex took our rough idea and delivered a polished product in six weeks. The codebase is clean, well-documented, and easy for our in-house team to maintain.",
            author: "Sarah Chen",
            role: "CTO, Launchpad Analytics",
          },
          {
            quote:
              "The new site loads in under a second and our conversion rate jumped 22 % within a month. Exactly what we asked for — and more.",
            author: "Marcus Webb",
            role: "Founder, Bloom Commerce",
          },
          {
            quote:
              "Professional, communicative, and technically excellent. We've worked with Alex on three projects now and will keep coming back.",
            author: "Priya Nair",
            role: "Head of Product, Stackwise",
          },
          {
            quote:
              "Alex spotted architectural issues we hadn't even considered and fixed them proactively. That kind of ownership is rare.",
            author: "Daniel Reeves",
            role: "VP Engineering, Meridian Health",
          },
        ]}
      />

      <CTA
        headline="Ready to build something great?"
        subtext="I'm currently accepting new projects. Let's talk about what you're trying to create."
        ctaLabel="Start a Conversation"
        background="dark"
      />
    </>
  );
}
