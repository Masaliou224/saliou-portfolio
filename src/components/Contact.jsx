import React, { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault(); 
    send(
      "service_mh6t30b",
      "template_4xeh8pj",
      toSend,
      "Cnydribx9dFw6wvvC"
    )
      .then((response) => {
        alert("Message sent successfully!");
        setToSend({
          from_name:'',
          to_name:'',
          message:'',
          reply_to:''
        });
      }) 
      .catch((err) => {
        alert("Failed...", err);
      }) ;
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="conatct" className="py-16 text-center dark:bg-gray-700">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Contact Me</h2>
      <form onSubmit={onSubmit} className="mt-8 max-w-lg mx-auto space-y-4">
      <input 
        type="text"
        name="from_name"
        placeholder="Name"
        value={toSend.from_name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg bg-gray-100  focus:ring-2 focus:ring-teal-500"
        required
      />
      <input 
        type="email"
        name="reply_to"
        placeholder="Email" 
        value={toSend.reply_to}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-teal-500"
      />
      <textarea 
        name="message"
        placeholder="Message"
        value={toSend.message}
        onChange={handleChange}
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