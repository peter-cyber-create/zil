"use server";
import { storeContact } from '@/lib/redis';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import { ContactEmail } from '@/components/email/ContactEmail';
import { revalidatePath } from 'next/cache';

export async function submitContact({ name, email, message }: { name: string; email: string; message: string }) {
  // Save to Redis
  const contact = await storeContact({
    name,
    email,
    message,
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
      <ContactEmail name={name} email={email} message={message} />
    );

    const mailOptions = {
      from: email,
      to: [process.env.MAIL_RECEIVER_ADDRESS, email].filter(Boolean).join(","),
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending contact email:', error);
    // Optionally, handle email failure (but still return success for DB save)
  }

  revalidatePath('/dashboard/contacts');
  return { success: true };
} 