import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

AOS.init();

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-sm font-semibold text-white shadow-lg">
              Let's Connect
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Contact Information
                </h3>
              </div>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  content="oliviergsmith@outlook.com"
                  gradient="from-emerald-600 to-emerald-800"
                  delay={0.2}
                />
                <ContactInfo
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  content="+1 579 372 0590"
                  gradient="from-teal-600 to-teal-800"
                  delay={0.3}
                />
                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="Location"
                  content="Saint Jean Sur Richelieu, Quebec, Canada"
                  gradient="from-cyan-600 to-cyan-800"
                  delay={0.4}
                />
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-gray-100 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-gray-100 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-gray-100 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group/button relative w-full py-4 overflow-hidden rounded-xl font-semibold text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <Send className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                  Send Message
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, content, gradient, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group/info flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-700/30 hover:border-emerald-500/50 transition-all duration-300"
    >
      <div
        className={`p-3 bg-gradient-to-r ${gradient} rounded-xl text-white shadow-lg group-hover/info:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-300">{content}</p>
      </div>
    </motion.div>
  );
}
