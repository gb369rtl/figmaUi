import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import aja from "./assets/Landing logo.png";

export function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const pages = ["home", "about", "services", "community", "shanta foundation"];
  const currentPage = location.pathname.replace("/", "") || "home";
  const visibleTabs = pages.filter(page => page !== currentPage);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="ml-4">
          <img src={aja} alt="aja" className="max-w-32 sm:max-w-40" />
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black mr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8 font-semibold text-3xl text-black mr-10">
          {visibleTabs.map(page => (
            <Link key={page} to={`/${page === "home" ? "" : page}`} className="hover:underline">
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full left-0 top-28 p-4 flex flex-col items-center space-y-4">
          {visibleTabs.map(page => (
            <Link
              key={page}
              to={`/${page === "home" ? "" : page}`}
              className="text-lg font-semibold text-black hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
