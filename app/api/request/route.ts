import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { pickup, dropoff, name, email } = body;

        // Validate input
        if (!pickup || !dropoff || !name || !email) {
            return NextResponse.json(
                { error: 'All fields (Name, Email, Pickup, Dropoff) are required.' },
                { status: 400 }
            );
        }

        // Send admin notification email using Resend
        const { data, error } = await resend.emails.send({
            from: 'RideApp <onboarding@resend.dev>',
            to: ['nithinjosephs@gmail.com'],
            subject: 'New Ride Request - RideApp',
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #7c3aed;">New Ride Request</h2>
          <p><strong>Passenger Name:</strong> ${name}</p>
          <p><strong>Passenger Email:</strong> ${email}</p>
          <p><strong>Pickup Location:</strong> ${pickup}</p>
          <p><strong>Drop-off Location:</strong> ${dropoff}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <br/>
          <p>Please arrange a driver for this request.</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend admin email error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Send confirmation email to the passenger
        const { error: passengerEmailError } = await resend.emails.send({
            from: 'RideApp <onboarding@resend.dev>',
            to: [email],
            subject: 'Your Ride Request Has Been Received - RideApp',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0;">
          <div style="background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🚗 RideApp</h1>
          </div>
          <div style="background: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #1f2937; margin-top: 0;">Hi ${name},</h2>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Thank you for requesting a ride! We've received your request and it is currently being confirmed.
            </p>
            <div style="background: #f3f4f6; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h3 style="color: #7c3aed; margin-top: 0;">Trip Details</h3>
              <p style="margin: 8px 0; color: #374151;"><strong>📍 Pickup:</strong> ${pickup}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>📍 Drop-off:</strong> ${dropoff}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>🕐 Requested at:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              We are currently checking driver availability in your area. You will receive another notification once your ride has been confirmed and a driver has been assigned.
            </p>
            <p style="color: #4b5563; font-size: 14px; margin-top: 24px;">
              If you have any questions, feel free to reach out to our support team.
            </p>
          </div>
          <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} RideApp. All rights reserved.</p>
          </div>
        </div>
      `,
        });

        if (passengerEmailError) {
            console.error('Resend passenger email error:', passengerEmailError);
            // Don't fail the whole request if passenger email fails — admin was already notified
            console.warn('Passenger confirmation email failed, but ride request was still processed.');
        }

        return NextResponse.json({ success: true, message: 'Ride request sent successfully!', data });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { error: 'Failed to process request.' },
            { status: 500 }
        );
    }
}
