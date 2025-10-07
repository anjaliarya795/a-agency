'use client'

import { contact } from "@/constants/data";
import React, { useState } from "react";
import { sendEmail } from '@/app/utils/sendMail';
import CommonAnimation from "@/components/shared/CommonAnimation";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState<File|null>(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e:any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
            setFile(selectedFile);
        } else {
            alert('File size must be 5MB or less.');
        }
    };

    async function handleSubmit() {
        if (!name || !email || !subject || !message || !file) {
            alert('All fields are required including file upload.');
            return;
        }

        const data = {
            name,
            email,
            subject,
            message,
            file,
        };

        try {
            // setLoading(true);
            // await sendEmail(data);
            setSuccessMessage('Your message has been sent successfully!');

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setFile(null);
            setLoading(false);

            setTimeout(() => setSuccessMessage(''), 10000);
        } catch (error) {
            setLoading(false);
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    }

    return (
        <CommonAnimation className="flex flex-col items-center justify-center p-6 md:w-[80%] max-w-xl w-[90%] mx-auto">
            <div className="flex flex-col items-center gap-2 mt-4">
                <span className="text-secondary text-center text-2xl border-b-2 border-secondary">Contact Us</span>
                <h1 className="text-3xl font-bold text-black mt-2">Contact For Any Query</h1>
                <p className="text-slate-700 text-center mt-2 text-base">
                    We’re here to support your recruitment needs. Contact us through the form, or call us at <span className="font-semibold">{contact.phone}</span> or email <span className="font-semibold">{contact.mail}</span>. We look forward to hearing from you!
                </p>
            </div>

            <div className="mt-6 w-full bg-white shadow-md rounded-lg p-6 space-y-4">
                {successMessage && (
                    <div className="bg-primary-100 text-primary py-2 px-4 rounded-md mb-4">
                        {successMessage}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Your Name"
                        className="p-3 border rounded-md w-full focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Your Email"
                        className="p-3 border rounded-md w-full focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                </div>
                <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    type="text"
                    placeholder="Subject"
                    className="p-3 border rounded-md w-full focus:ring-2 focus:ring-primary-500 outline-none"
                />
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="Message"
                    className="p-3 border rounded-md w-full h-32 focus:ring-2 focus:ring-primary-500 outline-none"
                ></textarea>

                <div className="flex items-start gap-2 flex-col">
                    <input
                        type="file"
                        id="fileUpload"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <label
                        htmlFor="fileUpload"
                        className="p-3 border rounded-md w-full border-primary text-primary hover:text-white text-center cursor-pointer hover:bg-primary/90 transition"
                    >
                        Upload File (Max 5MB)
                    </label>
                    {file && <p className="text-sm text-slate-600">{file.name}</p>}
                </div>

                <button
                    disabled={loading}
                    onClick={handleSubmit}
                    className={`w-full ${loading ? 'bg-primary/80 cursor-not-allowed' : 'bg-primary hover:bg-primary'} text-white py-3 rounded-md font-semibold transition`}
                >
                    {loading ? 'Sending Message ...' : 'Send Message'}
                </button>
            </div>
        </CommonAnimation>
    );
};

export default ContactForm;
