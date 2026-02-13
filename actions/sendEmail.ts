"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactEmail from "@/email/conatct-from-email";
import React from "react";

const _resendApiKey = process.env.RESEND_API_KEY;

export const sendEmail = async (formData: FormData) => {
  if (!_resendApiKey) {
    return {
      error:
        "Missing RESEND_API_KEY. Set RESEND_API_KEY in your environment (e.g. .env.local) or add it to your deployment provider's environment variables.",
    };
  }

  const resend = new Resend(_resendApiKey);
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 50)) {
    return {
      error: "Invalid sender Email",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "message ",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact From <onboarding@resend.dev>",
      to: "mspsanu8@gmail.com",
      subject: `New message from`,
      // text: message as string,
      replyTo: senderEmail as string,
      react: React.createElement(ContactEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
