import React, { useState } from 'react';
import { CONTACT } from '../PROJECT/constants';
import { motion } from 'framer-motion';

const Contect = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "80aabc5e-20ba-479e-9dee-8d35559fb77d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult("Submission failed. Please try again.");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center tracking-tight"
        >
          <a
            href="https://www.google.com/maps/place/RAN+Web+%26+App+(Logo)Design+and+development/@10.7681943,79.1304927,17z/data=!3m1!4b1!4m6!3m5!1s0x3baab900069dc935:0x56b8927cbc9d1cd!8m2!3d10.768189!4d79.133073!16s%2Fg%2F11w3tbhtsw?entry=ttu"
            className="my-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT.address}
          </a>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="mailto:support@example.com" className="my-4">{CONTACT.email}</a>
        </motion.div>
        <motion.form
          onSubmit={onSubmit}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-lg shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message"
              name="message"
              rows="5"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
            <span>{result}</span>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contect;
