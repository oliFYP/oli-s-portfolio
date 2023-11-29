import React, { useState, useEffect } from "react";
import background from "../videobg/4K_10.mp4";
import { PacmanLoader } from "react-spinners";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div>
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
          <PacmanLoader color="#ffffff" />
        </div>
      ) : (
        <>
          <div className="relative h-screen" style={{ overflow: "hidden" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full hidden sm:block transition-all md:pointer-events-none blur-sm"
              id="video"
            >
              <source src={background} type="video/mp4" />
            </video>

            <div className="absolute sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:h-auto h-full sm:max-w-md bg-black p-8 rounded shadow-md">
              <form className="w-full">
                <h1
                  data-aos="flip-right"
                  className="text-4xl font-bold text-white mb-8"
                >
                  Contact Me!
                </h1>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Your Name
                  </label>
                  <input
                    data-aos="flip-right"
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    data-aos="flip-left"
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    data-aos="flip-right"
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  data-aos="flip-right"
                  type="submit"
                  className="bg-gradient-to-r from-slate-500 to-slate-800 text-white px-4 py-2  rounded-md "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Contact;
