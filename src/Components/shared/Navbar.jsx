import React, { useState } from "react";
import Zarrin from "../Assets/Icons/Zarrin.png";
import { IoSearchOutline } from "react-icons/io5";
import Button from "./Button";
import { Link, useNavigate} from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const NavLinks = [
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];
  const GoToHome = useNavigate();

  return (
    <header className=" bg-white shadow-md py-4 px-6  w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div onClick={() => GoToHome("/")} className="flex items-center gap-2 cursor-pointer">
          <img src={Zarrin} alt="logo" className="w-8 h-8"/>
          <h3 className="text-2xl font-bold">Zarrin</h3>
        </div>

        {/*Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6  ">
        <ul className="flex gap-8 text-[16px] font-semibold cursor-pointer">
          {NavLinks.map((link) => (
            <li>
              <Link to={link.path}>{link.name}</Link>
            </li>
            
          ))}
        </ul>
        <IoSearchOutline className="text-[24px] ml-2" /> 
        <Link to="/contact">
        <Button
          className="bg-[#7c4ee4] text-black px-4 py-2 rounded"
          text="Contact Us"
        /></Link>
        </nav>

        {/*Mobile Menu Toggle */}
        <div className="md:hidden ">
          {menuOpen ? (
            <HiX className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <HiOutlineMenuAlt3
             className="text-3xl cursor-pointer"
             onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded px-4 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {NavLinks.map((link) => (
              <li key={link.name} onClick={() => setMenuOpen(false)}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <IoSearchOutline className="text-[24px]" />
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <Button
              className="bg-[#7c4ee4] text-black px-4 py-2 rounded"
              text="Contact Us"
            />
            </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;


