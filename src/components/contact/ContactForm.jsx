import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(() => setStatus("Message sent!"), () => setStatus("Error sending message."));
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto">
      <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700" required />
      <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700" required />
      <textarea name="message" placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700" required />
      <button type="submit" className="px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600">Send</button>
      {status && <p className="mt-2 text-sm text-gray-400">{status}</p>}
    </form>
  );
};

export default ContactForm;
