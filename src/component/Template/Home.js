import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
            <h1 className="text-5xl font-bold text-blue-700 mb-4">
                Welcome to Our Website
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl mb-6">
                We are delighted to have you here. Our platform is designed to provide
                high-quality services, innovative solutions, and a seamless user
                experience. Explore our website to learn more about our mission,
                discover our services, and get in touch with us.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Get Started
            </button>
        </div>
    )
}

export default Home