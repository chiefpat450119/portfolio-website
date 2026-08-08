"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    setIsSubmitting(false);

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  const inputClass =
    "bg-gray-900 border border-slate-800 text-slate-200 placeholder-slate-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-primary-500 transition-colors duration-150";

  return (
    <section
      className="grid md:grid-cols-2 my-12 py-16 gap-12"
      id="contact"
    >
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h2 className="font-heading text-3xl font-bold text-slate-200 tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="text-slate-400 mb-6 max-w-md leading-relaxed text-sm">
          I&apos;m always open to new opportunities and collaborations. Whether
          you have questions, want to discuss a project, or just want to debate
          who the greatest tennis player of all time is — don&apos;t hesitate to
          reach out.
        </p>
        <div className="flex flex-row gap-4">
          <Link
            href="https://www.github.com/chiefpat450119"
            target="_blank"
            aria-label="GitHub"
            className="border border-blue-900 p-2 hover:border-primary-500 transition-colors duration-150"
          >
            <Image src={GithubIcon} alt="GitHub" width={28} height={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/patrickzhou04"
            target="_blank"
            aria-label="LinkedIn"
            className="border border-blue-900 p-2 hover:border-primary-500 transition-colors duration-150"
          >
            <Image src={LinkedInIcon} alt="LinkedIn" width={28} height={28} />
          </Link>
        </div>
      </motion.div>

      <motion.form
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="email" className="text-slate-400 block mb-1.5 text-xs font-medium uppercase tracking-wider">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className={inputClass}
            placeholder="patrick@google.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-slate-400 block mb-1.5 text-xs font-medium uppercase tracking-wider">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className={inputClass}
            placeholder="I hate cilantro."
          />
        </div>
        <div>
          <label htmlFor="message" className="text-slate-400 block mb-1.5 text-xs font-medium uppercase tracking-wider">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            className={inputClass}
            placeholder="I actually really hate cilantro."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || emailSubmitted}
          className="bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-semibold py-2.5 px-6 w-full transition-colors duration-150"
        >
          {isSubmitting ? "Sending..." : emailSubmitted ? "Message Sent!" : "Send Message"}
        </button>
        {emailSubmitted && (
          <p className="text-primary-400 text-sm text-center">
            Thanks! I&apos;ll get back to you soon.
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default EmailSection;
