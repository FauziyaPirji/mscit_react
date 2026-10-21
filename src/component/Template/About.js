import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10">
                <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
                    About Us
                </h1>

                <p className="text-gray-700 text-lg leading-8 mb-6">
                    Welcome to our website! We are committed to delivering quality
                    services and creating innovative solutions that meet the needs of our
                    users. Our goal is to provide a simple, efficient, and user-friendly
                    experience for everyone who visits our platform.
                </p>

                <p className="text-gray-700 text-lg leading-8 mb-6">
                    Our team is passionate about technology and continuously works to
                    improve our services. We believe in innovation, reliability, and
                    customer satisfaction. Every feature is designed with the user in
                    mind, ensuring a smooth and enjoyable experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="bg-blue-100 rounded-lg p-6 text-center shadow">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                            Our Mission
                        </h2>
                        <p className="text-gray-700">
                            To provide high-quality, reliable, and innovative digital
                            solutions that make life easier.
                        </p>
                    </div>

                    <div className="bg-blue-100 rounded-lg p-6 text-center shadow">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                            Our Vision
                        </h2>
                        <p className="text-gray-700">
                            To become a trusted platform recognized for excellence,
                            creativity, and customer satisfaction.
                        </p>
                    </div>

                    <div className="bg-blue-100 rounded-lg p-6 text-center shadow">
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                            Our Values
                        </h2>
                        <p className="text-gray-700">
                            Integrity, innovation, teamwork, and commitment to delivering the
                            best possible experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;