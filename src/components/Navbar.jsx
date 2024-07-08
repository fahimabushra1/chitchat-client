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
    <div className="form-control">
      <label className="input input-bordered flex items-center max-h-8 bg-[#D2CEB2] gap-2">
  <input type="text" className="grow bg-[#D2CEB2]" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
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