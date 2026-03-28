import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/content/Heading";
import { Text } from "@/components/content/Text";
import { ContactForm } from "@/components/inputs/ContactForm";

export { metadata } from "./metadata";

export default function ContactPage() {
  return (
    <>
      <Section background="gray" paddingY="xl">
        <Container maxWidth="2xl" padding="md">
          <div className="mx-auto max-w-xl text-center mb-12">
            <Heading text="Contact Us" level="h1" align="center" />
            <div className="mt-4">
              <Text
                content="Have a question or want to work together? Fill out the form and we'll get back to you within 24 hours."
                size="lg"
                color="muted"
                align="center"
              />
            </div>
          </div>

          <div className="mx-auto max-w-lg bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <ContactForm submitLabel="Send Message" />
          </div>
        </Container>
      </Section>

      <Section background="white" paddingY="md">
        <Container maxWidth="2xl" padding="md">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <Heading text="Email" level="h4" align="center" />
              <div className="mt-2">
                <Text content="hello@acme.com" color="muted" align="center" />
              </div>
            </div>
            <div>
              <Heading text="Phone" level="h4" align="center" />
              <div className="mt-2">
                <Text content="+1 (555) 000-0000" color="muted" align="center" />
              </div>
            </div>
            <div>
              <Heading text="Office" level="h4" align="center" />
              <div className="mt-2">
                <Text content="123 Main St, San Francisco, CA" color="muted" align="center" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
