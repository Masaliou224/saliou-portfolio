import React from "react"

const Contact = () => {
  return (
    <section id="conatct" className="py-16 text-center dark:bg-gray-700">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Contact Me</h2>
      <form className="mt-8 max-w-lg mx-auto space-y-4">
      <input 
        type="text"
        placeholder="Name"
        className="w-full px-4 py-2 border rounded-lg bg-gray-100  focus:ring-2 focus:ring-teal-500"
        required
      />
      <input 
        type="email"
        placeholder="Email" 
        className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-teal-500"
      />
      <textarea 
        placeholder="Message"
        rows="5"
        className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-teal-500"
      ></textarea>
      <button
        type="submit"
        className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600"
      >
        Send Message
      </button>
      </form>
    </section>
  );
};

export default Contact;