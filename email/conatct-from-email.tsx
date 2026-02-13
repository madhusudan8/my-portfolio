import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  const senderInitial =
    senderEmail?.split("@")[0]?.charAt(0)?.toUpperCase() || "👤";

  return (
    <Html>
      <Head />
      <Preview>✨ You’ve got a new message — take a look</Preview>

      <Tailwind>
        <Body className="bg-slate-950 font-sans antialiased">
          <Container className="mx-auto max-w-2xl px-4 py-12">

            {/* Card */}
            <Section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

              {/* Header */}
              <Section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 px-10 py-14">
                <Section className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white opacity-5" />
                <Section className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-white opacity-5" />

                <Text className="mb-3 flex items-center text-xs font-bold uppercase tracking-widest text-violet-200">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400" />
                  Fresh Message
                </Text>

                <Heading className="m-0 mb-3 text-5xl font-black leading-tight text-white">
                  ✨ You’ve Got Mail!
                </Heading>

                <Text className="m-0 text-base font-medium text-violet-100 opacity-95">
                  Someone just reached out through your portfolio
                </Text>
              </Section>

              {/* Content */}
              <Section className="bg-slate-900 px-10 py-10">

                {/* Message */}
                <Section className="mb-10">
                  <Text className="mb-4 flex items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-xs text-white">
                      💬
                    </span>
                    What they wrote
                  </Text>

                  <Section className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-850 p-8 shadow-lg">
                    <Section className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

                    <Text className="m-0 whitespace-pre-wrap text-lg leading-relaxed text-slate-100">
                      {message}
                    </Text>
                  </Section>

                  <Text className="mt-4 text-xs italic text-slate-500">
                    Sent with intention — read when ready ✨
                  </Text>
                </Section>

                <Hr className="my-8 border-slate-800" />

                {/* Sender */}
                <Section className="mb-10">
                  <Text className="mb-4 flex items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 text-xs text-white">
                      👋
                    </span>
                    Who’s reaching out
                  </Text>

                  <Section className="flex items-center rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-850 p-6 shadow-lg">
                    <Section className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-bold text-white shadow-lg">
                      {senderInitial}
                    </Section>

                    <Section className="flex-1">
                      <Text className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Reply-to Email
                      </Text>

                      <Link
                        href={`mailto:${senderEmail}`}
                        className="break-all text-base font-semibold text-violet-400 no-underline transition-colors hover:text-violet-300"
                      >
                        {senderEmail}
                      </Link>
                    </Section>
                  </Section>
                </Section>

                {/* CTA */}
                <Section className="mt-10 text-center">
                  <Button
                    href={`mailto:${senderEmail}?subject=Re:%20Your%20message`}
                    className="inline-block rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-16 py-5 text-lg font-bold text-white no-underline shadow-2xl transition-all hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700"
                  >
                    🚀 Continue the conversation
                  </Button>

                  <Text className="mt-4 text-xs text-slate-500">
                    Respond directly — it opens your email app
                  </Text>
                </Section>
              </Section>

              {/* Footer */}
              <Section className="border-t border-slate-800 bg-slate-950 px-10 py-8 text-center">
                <Text className="mb-3 text-sm leading-relaxed text-slate-500">
                  This message was sent via your portfolio — nice work 👏
                </Text>

                <Link
                  href="https://madhu-sudan-portfolio.vercel.app/"
                  className="text-sm font-semibold text-violet-400 no-underline transition-colors hover:text-violet-300"
                >
                  Visit Portfolio →
                </Link>

                <Text className="mt-6 text-xs text-slate-600">
                  © 2026 Your Portfolio • Made with 💜
                </Text>
              </Section>
            </Section>

            {/* Badge */}
            <Section className="mt-6 text-center">
              <Text className="text-xs font-medium text-slate-600">
                ⚡ Crafted with care, delivered instantly
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
