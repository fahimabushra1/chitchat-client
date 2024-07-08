import { TbCircleLetterCFilled } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { TiHome } from "react-icons/ti";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { BiLogoMessenger } from "react-icons/bi";
const Navbar = () => {
    return (
        <div>
          <div className="navbar max-h-2 bg-[#2DA9DC]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#2DA9DC] rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><TbCircleLetterCFilled className="text-[#071777] text-5xl"/></a>
    <div className="form-control relative">
    <CiSearch className="absolute top-2 right-2" />
      <input type="text" placeholder="Search.." className="input input-bordered max-h-8 w-24 md:w-auto bg-[#D2CEB2]" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a><TiHome className="text-3xl text-[#49F3F0]"  title="Home"/></a></li>
      <li><a><FaUserFriends className="text-3xl text-[#49F3F0] mx-12" title="Friends"/></a></li>
      <li><a><HiOutlineUserGroup className="text-3xl text-[#49F3F0]" title="Groups" /></a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="rounded-full bg-[#7ABAB4] p-2 font-bold mx-4">Find Friends</button>
    <button className="rounded-full bg-[#7ABAB4] p-2"><CgMenuGridR className="text-4xl text-[#49F3F0] p-2" title="Menu" /></button>
    <button className="rounded-full bg-[#7ABAB4] p-2 mx-4"><BiLogoMessenger className="text-3xl text-[#49F3F0]" title="Messenger" /></button>
    <button className="rounded-full bg-[#7ABAB4] p-2"><IoMdNotifications className="text-3xl text-[#49F3F0]" title="Notifications" /></button>
    <button className="rounded-full bg-[#7ABAB4] p-2 mx-4"><CgProfile className="text-3xl text-[#49F3F0]" title="Account" /></button>
  </div>
</div>
        </div>
    );
};

export default Navbar;