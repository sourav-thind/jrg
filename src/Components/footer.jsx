const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-4 px-4">
        <div className="container mx-auto">
          {/* Mobile View */}
          <div className="sm:hidden text-center">
            <p className="text-lg font-semibold">JRG Birmingham</p>
            <p className="text-sm mt-1">Expert Bedroom, Bathroom & Kitchen Fittings</p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer">
                <img src="/tiktok-icon.svg" alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
          </div>
  
          <div className="hidden md:flex justify-between items-start">
           
            <div className="w-1/3 mt-6">
              <p className="text-lg font-semibold">JRG Birmingham</p>
              <p className="text-sm mt-1">Expert Bedroom, Bathroom & Kitchen Fittings</p>
              <div className="mt-6 space-x-10">
              <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6 inline" />
              </a>
              <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer">
                <img src="/tiktok-icon.svg" alt="TikTok" className="w-6 h-6 inline" />
              </a>
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
  