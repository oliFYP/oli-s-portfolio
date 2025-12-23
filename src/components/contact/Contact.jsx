import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

AOS.init();

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bg-gray-800 p-8 rounded-lg border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <ContactInfo
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                content="oliviergsmith@outlook.com"
              />
              <ContactInfo
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                content="+1 579 372 0590"
              />
              <ContactInfo
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                content="Saint Jean Sur Richelieu, Quebec, Canada"
              />
            </div>
          </div>

          <form
            data-aos="fade-left"
            data-aos-duration="1000"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              data-aos="zoom-in"
              data-aos-duration="1000"
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, content }) {
  return (
    <div className="flex items-center">
      <div className="p-2 bg-indigo-900/50 rounded-lg text-indigo-400 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-100">{title}</h4>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
}
