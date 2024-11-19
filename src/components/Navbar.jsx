import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-100 shadow-md fixed w-full top-0 z-50 dark:bg-gray-900 dark:text-white">
      <h1 className="text-xl font-bold text-teal-500">Saliou</h1>
      <div className="flex items-center gap-4">
        <ul className="flex gap-6">
        <li><a href="#hero" className="hover:text-teal-500">Home</a></li>
          <li><a href="#about" className="hover:text-teal-500">About</a></li>
          <li><a href="#projects" className="hover:text-teal-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-500">Contact</a></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;