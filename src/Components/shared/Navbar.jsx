import Zarrin from "../Assets/Icons/Zarrin.png";
import { IoSearchOutline } from "react-icons/io5";
import Button from "./Button";
import { Link, useNavigate} from "react-router-dom";

const Navbar = () => {
  const NavLinks = [
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];
  const GoToHome = useNavigate();

  return (
    <div className=" flex justify-between items-center py-5 px-9 bg-white shadow-md">
      <div onClick={() => GoToHome("/")} className="flex items-center gap-2">
        <img src={Zarrin} alt="logo" />
        <h3 className="text-3xl font-bold">Zarrin</h3>
      </div>
      <nav className="flex items-center gap-6 ">
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
    </div>
  );
};

export default Navbar;


