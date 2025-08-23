import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="px-8 py-12 lg:px-16 text-txt">
      <h2 className="relative text-2xl font-bold mb-6 inline-block">
        Contact
        <span className="block w-1/2 h-[2px] bg-secondary  mt-1"></span>
        <span className="block w-1/3 h-[2px] bg-secondary  mt-1"></span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <p className="text-[--color-text] mb-6">
            I’m always open to discussing new opportunities, collaborations, or
            just chatting about tech. Feel free to reach out through any of the
            following:
          </p>
          <ul className="space-y-4 text-[--color-text]">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-secondary" />
              <a
                href="mailto: ejtechpro@gmail.com"
                className="hover:text-active"
              >
                ejtechpro@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-secondary" />
              <span>+254 792 423 991</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-secondary" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-primary p-6 rounded-xl shadow-md border border-gray-500">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
            autoComplete="off"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-secondary outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-secondary outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                placeholder="Write your message..."
                rows="4"
                className="w-full px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-secondary focus:border-0 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-secondary text-white py-2 rounded-md font-medium hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-sm text-center text-txt">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
