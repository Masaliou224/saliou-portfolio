
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full py-4 px-6 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white"
    >
      <div className="flex flex-col md:flex-row justify-around items-center gap-4">
        <div className="text-lg font-medium">
          Mamadou Saliou Diallo
        </div>
        <div>
          <span className="mr-2 text-gray-600 dark:text-white">Social</span>
          <div className="flex gap-4">
          <a 
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20}/>
          </a>
          <a 
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <Github size={20}/>
          </a>
          <a 
            href="mailto:mamadousaliou.diallo.963434@gmail.com"
            className="hover:text-red-600 transition-colors"
          >
            <Mail size={20}/>
          </a>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-gray-500 my-4 w-1/3 mx-auto"/>
      <div className="text-sm text-center mx-auto">
        © {currentYear} Saliou. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;