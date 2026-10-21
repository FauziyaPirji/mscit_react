import React from "react"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white mt-10">

            {/* Bottom Section */}
            <div className="border-t border-blue-400 text-center py-4 text-sm">
                © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer