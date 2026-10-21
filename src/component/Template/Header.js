import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-900 to-blue-600 shadow-lg">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-1 py-6">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-white">MyLogo</h1>

                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Home</Link>
                        </li>

                        <li>
                            <Link to="/about" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">About</Link>
                        </li>

                        <li>
                            <Link to="/contact-us" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/example" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Example</Link>
                        </li>

                        <li>
                            <Link to="/signal" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Signal</Link>
                        </li>

                        <li>
                            <Link to="/usememo" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">UseMemo</Link>
                        </li>

                        <li>
                            <Link to="/useref" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">UseRef</Link>
                        </li>

                        <li>
                            <Link to="/props-drilling" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Props-Drilling</Link>
                        </li>

                        <li>
                            <Link to="/useContext" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">UseContext</Link>
                        </li>

                        <li>
                            <Link to="/redux" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Redux</Link>
                        </li>
                    </ul>
                    <hr />
                    <ul className="flex space-x-8">
                        <li>
                            <Link to="/login" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Login</Link>
                        </li>

                        <li>
                            <Link to="/user-data" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Users</Link>
                        </li>

                        <li>
                            <Link to="/add-user" className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">Add-Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header