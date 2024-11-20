import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', href: '#hero' },
    { id: 2, text: 'About', href: '#about' },
    { id: 3, text: 'Project', href: '#projects' },
    { id: 4, text: 'Contact', href: '#' },
  ];

  return (
    <nav className="flex justify-between items-center p-6 bg-gray-100 shadow-md w-full fixed top-0 z-50 dark:bg-gray-900 dark:text-white h-24 mx-auto">
      <h1 className="w-full text-3xl font-bold text-teal-500 m-4">Saliou</h1>

      <div className="flex items-center gap-4">
        <ul className="hidden md:flex gap-6">
          {navItems.map(item => (
            <li
              key={item.id}
              className="rounded-xl m-2 cursor-pointer duration-300 hover:text-teal-500"
            >
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          <h1 className="text-xl font-bold text-teal-500">Saliou</h1>

          {navItems.map(item => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] cursor-pointer duration-300 hover:text-teal-500 text-white border-gray-600"
            >
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;