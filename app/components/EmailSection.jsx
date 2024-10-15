"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.5,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        className="z-10"
      >
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m always looking for new opportunities and people to
          collaborate with. Whether you have questions or just want to discuss
          your favourite tennis player, don&apos;t hesitate to reach out!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com/chiefpat450119">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/patrickzhou04">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </motion.div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <motion.div
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          className="mb-6"
        >
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium "
          >
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="patrick@google.com"
          />
        </motion.div>
        <motion.div
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="I hate cilantro."
          />
        </motion.div>
        <motion.div
          className="mb-6"
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ delay: 0.4 }}
        >
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="I actually really hate cilantro."
          />
        </motion.div>
        <motion.button
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ delay: 0.6 }}
          type="submit"
          className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message :D
        </motion.button>
        {emailSubmitted && (
          <p className="text-green-400 text-sm mt-2">
            Email sent successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default EmailSection;
