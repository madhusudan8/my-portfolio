import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFromEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactEmail({
  message,
  senderEmail,
}: ContactFromEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
          <Container className="mx-auto py-12 px-4">
            <Section className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
              {/* Header with gradient */}
              <Section className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-8">
                <Heading className="text-white text-3xl font-bold m-0 leading-tight">
                  📬 New Contact Message
                </Heading>
                <Text className="text-blue-100 text-sm mt-2 m-0">
                  Someone reached out through your portfolio
                </Text>
              </Section>

              {/* Message Content */}
              <Section className="px-10 py-8">
                <Text className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-3 mt-0">
                  Message
                </Text>
                <Section className="bg-gray-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
                  <Text className="text-gray-800 text-base leading-relaxed m-0 whitespace-pre-wrap">
                    {message}
                  </Text>
                </Section>

                <Hr className="border-gray-200 my-6" />

                {/* Sender Info */}
                <Section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                  <Text className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-3 mt-0">
                    Sender Details
                  </Text>
                  <Section className="flex items-center">
                    <Text className="text-gray-700 font-medium m-0">
                      📧 Email:
                    </Text>
                    <Link
                      href={`mailto:${senderEmail}`}
                      className="text-blue-600 font-semibold ml-2 no-underline hover:underline"
                    >
                      {senderEmail}
                    </Link>
                  </Section>
                </Section>

                {/* Action Button */}
                <Section className="text-center mt-8">
                  <Button
                    href={`mailto:${senderEmail}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg no-underline inline-block shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Reply to Message
                  </Button>
                </Section>
              </Section>

              {/* Footer */}
              <Section className="bg-gray-50 px-10 py-6 border-t border-gray-200">
                <Text className="text-gray-500 text-xs text-center m-0 leading-relaxed">
                  This message was sent from your portfolio contact form
                  <br />
                  <Link
                    href="https://yourportfolio.com"
                    className="text-blue-600 no-underline hover:underline"
                  >
                    Visit your portfolio
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
