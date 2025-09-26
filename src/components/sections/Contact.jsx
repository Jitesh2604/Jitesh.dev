import ContactForm from "../contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
      <ContactForm />
      <div className="text-center mt-6">
        <p>Email: <a href="mailto:yourname@example.com" className="text-purple-400">yourname@example.com</a></p>
        <p>Phone: <a href="tel:+919876543210" className="text-purple-400">+91-9876543210</a></p>
      </div>
    </section>
  );
};

export default Contact;
