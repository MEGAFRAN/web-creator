import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/data/Card";
import { Heading } from "@/components/content/Heading";
import { Text } from "@/components/content/Text";
import { Badge } from "@/components/content/Badge";
import { Grid } from "@/components/layout/Grid";
import { ContactForm } from "@/components/inputs/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Section background="white" paddingY="xl">
        <Hero
          headline="Let's talk about your project"
          subtext="Fill in the form and I'll get back to you within one business day. Prefer email or a call? You'll find those details below too."
          align="center"
        />
      </Section>

      {/* Availability indicator */}
      <Section background="gray" paddingY="sm">
        <Container maxWidth="2xl" padding="md">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
              <Text content="Currently available for new projects" weight="medium" size="sm" />
            </div>
            <Badge label="Response time < 4 hours" variant="success" />
            <Badge label="Free initial consultation" />
          </div>
        </Container>
      </Section>

      {/* Contact form + info columns */}
      <Section background="white" paddingY="lg">
        <Container maxWidth="2xl" padding="md">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <Heading text="Send a message" level="h2" />
                <div className="mt-2">
                  <Text
                    content="Tell me about your project — what you're building, your timeline, and any constraints I should know about."
                    color="muted"
                  />
                </div>
              </div>
              <div className="rounded-xl border border-[var(--theme-border)] bg-[var(--theme-background)] p-8 shadow-sm">
                <ContactForm
                  nameLabel="Your name"
                  emailLabel="Email address"
                  messageLabel="Tell me about your project"
                  submitLabel="Send Message"
                />
              </div>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-6">
                <Heading text="Other ways to reach me" level="h2" />
                <div className="mt-2">
                  <Text
                    content="Pick whatever channel works best for you."
                    color="muted"
                  />
                </div>
              </div>

              <Card padding="md" border>
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">✉️</span>
                  <div>
                    <p className="font-semibold text-[var(--theme-foreground)]">Email</p>
                    <a
                      href="mailto:hello@alexmorgan.dev"
                      className="text-sm text-[var(--theme-primary)] hover:underline"
                    >
                      hello@alexmorgan.dev
                    </a>
                    <p className="mt-1 text-xs text-[var(--theme-muted)]">
                      Best for detailed project briefs
                    </p>
                  </div>
                </div>
              </Card>

              <Card padding="md" border>
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-[var(--theme-foreground)]">Book a call</p>
                    <a
                      href="https://cal.com/alexmorgan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--theme-primary)] hover:underline"
                    >
                      cal.com/alexmorgan
                    </a>
                    <p className="mt-1 text-xs text-[var(--theme-muted)]">
                      30-minute discovery call — free, no obligation
                    </p>
                  </div>
                </div>
              </Card>

              <Card padding="md" border>
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">💼</span>
                  <div>
                    <p className="font-semibold text-[var(--theme-foreground)]">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/alexmorgan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--theme-primary)] hover:underline"
                    >
                      linkedin.com/in/alexmorgan
                    </a>
                    <p className="mt-1 text-xs text-[var(--theme-muted)]">
                      Connect for professional enquiries
                    </p>
                  </div>
                </div>
              </Card>

              <Card padding="md" border>
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">🐙</span>
                  <div>
                    <p className="font-semibold text-[var(--theme-foreground)]">GitHub</p>
                    <a
                      href="https://github.com/alexmorgan-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--theme-primary)] hover:underline"
                    >
                      github.com/alexmorgan-dev
                    </a>
                    <p className="mt-1 text-xs text-[var(--theme-muted)]">
                      Browse open-source work and contributions
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* What to expect section */}
      <Section background="gray" paddingY="lg">
        <Container maxWidth="2xl" padding="md">
          <div className="mb-10 text-center">
            <Heading text="What happens next?" level="h2" align="center" />
          </div>
          <Grid cols="3" gap="lg">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--theme-primary)] text-[var(--theme-primaryFg)] text-lg font-bold">
                1
              </div>
              <Heading text="I read your message" level="h4" align="center" />
              <div className="mt-2">
                <Text
                  content="I review every enquiry personally and respond within one business day — usually much faster."
                  color="muted"
                  align="center"
                  size="sm"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--theme-primary)] text-[var(--theme-primaryFg)] text-lg font-bold">
                2
              </div>
              <Heading text="Discovery call" level="h4" align="center" />
              <div className="mt-2">
                <Text
                  content="We schedule a free 30-minute call to discuss your project goals, timeline, and any open questions."
                  color="muted"
                  align="center"
                  size="sm"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--theme-primary)] text-[var(--theme-primaryFg)] text-lg font-bold">
                3
              </div>
              <Heading text="Proposal & kickoff" level="h4" align="center" />
              <div className="mt-2">
                <Text
                  content="You receive a written proposal within 48 hours of our call. Once approved, we're ready to start."
                  color="muted"
                  align="center"
                  size="sm"
                />
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <FAQ
        title="Before you reach out"
        items={[
          {
            question: "Are you available to start immediately?",
            answer:
              "I'm currently available and can typically start new projects within one to two weeks. For larger engagements I keep a small wait list — reaching out early is always a good idea.",
          },
          {
            question: "Do you sign NDAs?",
            answer:
              "Yes, I'm happy to sign a mutual NDA before detailed project discussions. I treat all client information as confidential by default.",
          },
          {
            question: "What information should I include in my message?",
            answer:
              "A brief description of what you're building, your approximate budget range, and your ideal start date. The more context you give, the faster I can give you a useful response.",
          },
          {
            question: "Do you work with clients outside the US?",
            answer:
              "Absolutely. I work with clients across North America, Europe, and Australia. All collaboration happens asynchronously by default, with scheduled calls in time zones we agree on upfront.",
          },
          {
            question: "Can I hire you for just a few hours of consulting?",
            answer:
              "Yes. I offer hourly consulting for code reviews, architecture guidance, and technical due diligence. The minimum engagement is two hours.",
          },
        ]}
      />
    </>
  );
}
