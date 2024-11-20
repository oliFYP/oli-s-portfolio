import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/TopBar2";
import SidePanel from "../components/SidePanel2";
import { BeatLoader } from "react-spinners";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [isLoading, setLoading] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const form = useRef();
  const navigate = useNavigate();
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const navigateToHome = () => {
    navigate("/");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_nl8zo8b",
        "template_ihj2onj",
        form.current,
        "XC6mSz84G-bDBAYYc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setFormSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section>
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex align-center justify-center items-center bg-black">
          <BeatLoader color="#ffffff" />
        </div>
      ) : (
        <>
          <div
            className="relative h-screen w-screen bg-black"
            style={{ overflow: "hidden", zIndex: 200 }}
          >
            ,
            <Topbar
              isSidePanelOpen={isSidePanelOpen}
              toggleSidePanel={toggleSidePanel}
            />{" "}
            {isSidePanelOpen && (
              <SidePanel
                isSidePanelOpen={isSidePanelOpen}
                toggleSidePanel={toggleSidePanel}
              />
            )}
            <div className="absolute sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:h-auto h-full sm:max-w-md bg-black p-8 rounded shadow-md">
              {isFormSubmitted ? (
                <div className="sm:mt-0 mt-[50%] text-white font-bold text-center">
                  <p>Message sent!</p>
                  <button
                    onClick={navigateToHome}
                    className="bg-white text-black font-bold px-4 py-2 rounded-md mt-4"
                  >
                    Back to Home
                  </button>
                </div>
              ) : (
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="w-full border-white"
                >
                  <h1
                    data-aos="flip-right"
                    className="text-4xl font-bold text-white mb-8"
                    style={{ fontFamily: "Titillium" }}
                  >
                    Contact Me!
                  </h1>
                  <div
                    className="mb-4"
                    style={{ fontFamily: "Titillium-bold" }}
                  >
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
                      name="user_name"
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
                      data-aos-offset="0"
                      type="email"
                      id="email"
                      name="user_email"
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
                      data-aos-offset="0"
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="How can I help you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    value="send"
                    className="bg-white font-bold text-black px-4 py-2 rounded-md"
                    style={{ fontFamily: "Titillium-bold" }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="object-cover relative">
            <Footer />
          </div>
        </>
      )}
    </section>
  );
}

export default Contact;
