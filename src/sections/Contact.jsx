import React from "react";
import { Mail, Send, MapPin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16 flex items-center"
    >
      <div className="w-full">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-serif text-text md:text-4xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="mt-3 max-w-xl text-gray-400">
            Have a question, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Let's talk
              </h3>

              <p className="mt-3 max-w-md leading-7 text-gray-400">
                I'm always open to discussing new projects, internship
                opportunities, collaborations, or interesting ideas.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center gap-4 text-gray-300 transition hover:text-white"
            >
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <Mail size={22} />
              </div>

              <span>yourmail@gmail.com</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 text-gray-300">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <MapPin size={22} />
              </div>

              <span>Nepal</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8"
          >
            <div className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;