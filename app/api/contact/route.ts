import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const file = formData.get('file') as File | null;

        // Validate input
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'All fields (First Name, Last Name, Email, Message) are required.' },
                { status: 400 }
            );
        }

        const fullName = `${firstName} ${lastName}`;

        // Prepare file attachment if present
        const attachments: { filename: string; content: string }[] = [];
        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            attachments.push({
                filename: file.name,
                content: buffer.toString('base64'),
            });
        }

        // Send admin notification email
        const { error: adminError } = await resend.emails.send({
            from: 'RideApp <onboarding@resend.dev>',
            to: ['nithinjosephs@gmail.com'],
            subject: `New Contact Form Submission - ${fullName}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0;">
          <div style="background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">📬 New Contact Form Message</h1>
          </div>
          <div style="background: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #1f2937; margin-top: 0;">From: ${fullName}</h2>
            <div style="background: #f3f4f6; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <p style="margin: 8px 0; color: #374151;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>👤 Name:</strong> ${fullName}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>🕐 Submitted:</strong> ${new Date().toLocaleString()}</p>
              ${file && file.size > 0 ? `<p style="margin: 8px 0; color: #374151;"><strong>📎 Attachment:</strong> ${file.name} (${(file.size / 1024).toFixed(1)} KB)</p>` : ''}
            </div>
            <h3 style="color: #7c3aed;">Message</h3>
            <div style="background: #faf5ff; border-left: 4px solid #7c3aed; padding: 16px; border-radius: 0 8px 8px 0;">
              <p style="color: #374151; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
          <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} RideApp. All rights reserved.</p>
          </div>
        </div>
      `,
            attachments: attachments.length > 0 ? attachments : undefined,
        });

        if (adminError) {
            console.error('Admin email error:', adminError);
            return NextResponse.json({ error: adminError.message }, { status: 500 });
        }

        // Send confirmation email to the user
        const { error: userError } = await resend.emails.send({
            from: 'RideApp <onboarding@resend.dev>',
            to: [email],
            subject: 'We Received Your Message - RideApp',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0;">
          <div style="background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🚗 RideApp</h1>
          </div>
          <div style="background: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #1f2937; margin-top: 0;">Hi ${firstName},</h2>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to us! We've received your message and our support team will review it shortly.
            </p>
            <div style="background: #f3f4f6; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h3 style="color: #7c3aed; margin-top: 0;">Your Message Summary</h3>
              <p style="margin: 8px 0; color: #374151;"><strong>Subject:</strong> Contact Form Inquiry</p>
              <p style="margin: 8px 0; color: #374151;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              ${file && file.size > 0 ? `<p style="margin: 8px 0; color: #374151;"><strong>📎 Attachment:</strong> ${file.name}</p>` : ''}
            </div>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              We typically respond within 24-48 hours. If your matter is urgent, feel free to reply directly to this email.
            </p>
          </div>
          <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} RideApp. All rights reserved.</p>
          </div>
        </div>
      `,
        });

        if (userError) {
            console.error('User confirmation email error:', userError);
            console.warn('User confirmation email failed, but contact form was still processed.');
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Failed to process your message.' },
            { status: 500 }
        );
    }
}
