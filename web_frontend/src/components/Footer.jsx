import React from 'react';
import '../index.css'; 

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Telegram", url: "https://telegram.org" },
    { name: "Discord", url: "https://discord.com" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 mt-10">
      <div className="flex flex-col items-center space-y-4">
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300 text-sm md:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>

        
        <div className="border-t border-gray-700 w-full max-w-4xl mt-4"></div>

        
        <div className="text-xs text-gray-400">
          © 2025 Tech Vitals | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
