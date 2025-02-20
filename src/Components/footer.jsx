import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white py-4 px-4">
            <div className="container mx-auto">
                {/* Mobile View */}
                <div className="sm:hidden text-center">
                    <p className="text-lg font-semibold">JRG Birmingham</p>
                    <p className="text-sm mt-1">Expert Bedroom, Bathroom & Kitchen Fittings</p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-4">
                    <a href=""><FaInstagram className="h-6 w-6" /></a>
                    <a href="https://www.tiktok.com/@jrgkitchenbedroom"> <FaTiktok className="h-6 w-6" /></a>

                    </div>
                </div>

                <div className="hidden md:flex justify-between items-start">

                    <div className="w-1/3 mt-6">
                        <p className="text-lg font-semibold">JRG Birmingham</p>
                        <p className="text-sm mt-1">Expert Bedroom, Bathroom & Kitchen Fittings</p>
                        <div className="mt-6 flex space-x-8 w-full justify-center">
                            <a href=""><FaInstagram className="h-8 w-8" /></a>
                            <a href=""> <FaTiktok className="h-8 w-8" /></a>
                        </div>
                    </div>

                    {/* Right Section - Links */}
                    <div className="w-2/3 flex flex-col justify-end space-y-3 text-sm mt-6">
                        <a href="/about" className="hover:underline">About</a>
                        <a href="/services" className="hover:underline">Services</a>
                        <a href="/projects" className="hover:underline">Projects</a>
                        <a href="/contact" className="hover:underline">Contact</a>

                    </div>
                </div>

                {/* Copyright - Same for Both */}
                <p className="text-xs text-center mt-4 opacity-75">
                    &copy; {new Date().getFullYear()} JRG Birmingham. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
