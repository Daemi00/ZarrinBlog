import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const navigate = useNavigate();
  const handleExternalClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-0 pb-0 px-0 border-t border-primary-200 dark:border-gray-700">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto pt-10 pb-6">
        <div className="flex gap-4 items-center mb-6 ">
          <img
          src={require("../Assets/Icons/Zarrin.png")}
          alt=""
          className="h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto object-contain cursor-pointer "
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "auto" });
          }}
          />
          <h1 className="text-3xl font-bold">Zarrin</h1>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
          {[
            { path: "/", name: "Home" },
            { path: "/blog", name: "Blog" },
            { path: "/about", name: "About" },
            { path: "/contact", name: "Contact Us" },
          ].map((link) => (
            <NavLink
              key={link.path + link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-800  font-medium transition-colors duration-200 py-1 px-2 hover:text-primary-600` +
                (isActive ? " text-primary-600 " : "")
              }
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-[#7c4ee4] hover:bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold w-9 h-9 transition-colors duration-200"
            onClick={handleExternalClick}
          >
            FB
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-[#7c4ee4] hover:bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold w-9 h-9 transition-colors duration-200"
            onClick={handleExternalClick}
          >
            IG
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-[#7c4ee4] hover:bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold w-9 h-9 transition-colors duration-200"
            onClick={handleExternalClick}
          >
            LN
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="bg-[#7c4ee4] hover:bg-primary-700 text-white rounded-full flex items-center justify-center text-sm font-bold w-9 h-9 transition-colors duration-200"
            onClick={handleExternalClick}
          >
            YT
          </a>
        </div>

        {/* divider */}
        <div className="w-full mb-2 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
          <hr className="border-t border-primary-200 " />
        </div>
        {/* copyright */}
        <div className="text-center font-normal text-gray-700 text-sm pb-4 mt-4">
          Copyright Ideapeel Inc © {currentYear}. All Right Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
