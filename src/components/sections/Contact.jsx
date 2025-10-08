import ContactForm from "../contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
      <ContactForm />
      <div className="text-center mt-6">
        <p>Email: <a href="mailto:Jiteshpal2604@gmail.com" className="text-purple-400">Jiteshpal2604@gmail.com</a></p>
        <p>Phone: <a href="tel:+919540045400" className="text-purple-400">+91-9540045400</a></p>
      </div>
    </section>
  );
};

export default Contact;
