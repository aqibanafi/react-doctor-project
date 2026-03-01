import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 font-sans">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-[#1D7AFC] rounded-full p-2">
            {/* Plus Icon logic */}
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <span className="text-3xl font-bold text-black">Phudu</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
          <a href="#" className="text-gray-600 hover:text-black transition-colors text-lg">Home</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors text-lg">My-Bookings</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors text-lg">Blogs</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors text-lg">Contact Us</a>
        </nav>

        {/* Divider Line */}
        <div className="w-full max-w-5xl border-t border-gray-200 mb-10"></div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-6">
          {/* Facebook */}
          <a href="#" className="transition-transform hover:scale-110">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-9 h-9" />
          </a>
          
          {/* X (Twitter) */}
          <a href="#" className="transition-transform hover:scale-110 bg-black rounded-full p-2 flex items-center justify-center w-9 h-9">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-white w-5 h-5">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="transition-transform hover:scale-110">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-9 h-9" />
          </a>

          {/* YouTube */}
          <a href="#" className="transition-transform hover:scale-110">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-9 h-9" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;