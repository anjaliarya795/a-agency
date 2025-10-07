'use server'
// import nodemailer from 'nodemailer';
// import fs from 'fs';
// import path from 'path';

export async function sendEmail({ name, email, subject, message, file }) {
    // const user = process.env.EMAIL_USER;
    // const pass = process.env.EMAIL_PASS;
    const arrayBuffer = await file.arrayBuffer()

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: { user, pass }
    // });

    const htmlTemplate = `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 0; }
                    .email-container { background-color: #ffffff; margin: 30px auto; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); width: 80%; max-width: 600px; }
                    h2 { color: #333; text-align: center; }
                    .email-content { font-size: 16px; line-height: 1.5; color: #555; }
                    .email-content p { margin: 10px 0; }
                    .email-footer { font-size: 14px; color: #777; text-align: center; margin-top: 20px; }
                    .email-footer a { color: #007bff; text-decoration: none; }
                    .contact-info { background-color: #f8f8f8; padding: 10px; border-radius: 5px; margin-top: 10px; }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <h2>New Contact Us Message</h2>
                    <div class="email-content">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                    <div class="email-footer">
                        <p>If you would like to respond to this message, simply reply to this email.</p>
                        <p>Best regards,</p>
                        <p><strong>Your Website Team</strong></p>
                    </div>
                </div>
            </body>
        </html>
    `;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_TO,
        subject: subject || `New Contact Us Message`,
        text: message,
        html: htmlTemplate,
        attachments: file ? [{
            filename: file.name,
            content: Buffer.from(arrayBuffer)
        }] : []
    };

    try {
        // await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
}
