import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-72">
      <h1 className="text-center text-4xl md:text-4xl font-bold mb-8 text-white">
        Join us Now
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Open Hours and Contact Info */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">Open Hours</h3>
            <ul className="list-none space-y-2 text-gray-300">
              <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Contact Info</h3>
            <ul className="list-none space-y-2 text-gray-300">
              <li><a href="mailto:info@techcompany.com" className="hover:text-yellow-400">info@kgstechcompany.com</a></li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 40 so 16 duong An Phu quan Thu Duc</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Form for Name, Email, and Phone */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white"
                required
              />
            </div>
            <div>
            <button
              type="submit"
              className="w-full py-3 text-lg text-white font-semibold bg-transparent border-2 border-brown-600 text-brown-600 rounded-lg shadow-md hover:bg-brown-600 hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Submit
            </button>


            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
