"use server";
import { storeFeedback } from '@/lib/redis';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import { FeedbackEmail } from '@/components/email/FeedbackEmail';
import { revalidatePath } from 'next/cache';

export async function submitFeedback({ name, email, feedback }: { name: string; email: string; feedback: string }) {
  // Save to Redis
  const fb = await storeFeedback({
    name,
    email,
    message: feedback,
  });

  // Send email notification
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailHtml = await render(
      <FeedbackEmail name={name} email={email} feedback={feedback} />
    );

    const mailOptions = {
      from: email,
      to: [process.env.MAIL_RECEIVER_ADDRESS, email].filter(Boolean).join(","),
      subject: `New Feedback from ${name}`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending feedback email:', error);
    // Optionally, handle email failure (but still return success for DB save)
  }

  revalidatePath('/dashboard/feedback');
  return { success: true };
} 