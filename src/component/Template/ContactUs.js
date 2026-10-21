import React from "react";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
                    Contact Us
                </h1>

                <p className="text-center text-gray-600 mb-10">
                    We'd love to hear from you! Fill out the form below and we'll get back
                    to you as soon as possible.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                            Get in Touch
                        </h2>

                        <p className="text-gray-700 mb-3">
                            <span className="font-semibold">📍 Address:</span>
                            <br />
                            123 Main Street, Ahmedabad, Gujarat, India
                        </p>

                        <p className="text-gray-700 mb-3">
                            <span className="font-semibold">📞 Phone:</span>
                            <br />
                            +91 98765 43210
                        </p>

                        <p className="text-gray-700 mb-3">
                            <span className="font-semibold">📧 Email:</span>
                            <br />
                            info@example.com
                        </p>

                        <p className="text-gray-700">
                            <span className="font-semibold">🕒 Working Hours:</span>
                            <br />
                            Monday – Saturday
                            <br />
                            9:00 AM – 6:00 PM
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;