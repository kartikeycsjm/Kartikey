'use server'
import { transporter } from "@/emailconfig"
export async function sendMail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  try {
    await transporter.sendMail({
      from: 'kartikeymishracsjm@gmail.com',
      to: 'kartikeymgkp@gmail.com',
      subject: 'Contact Form Submission',
      html: `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
              <h2 style="color: #4CAF50;">Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <h3 style="color: #4CAF50;">Message</h3>
              <p>${message}</p>
            </div>
          `,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return { message: 'message sent successfully' }
  } catch (error) {
    return {
      message: 'message sending failed',
      error: (error as Error).message
    }
  }
}