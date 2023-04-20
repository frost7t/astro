import React from "react";
import { HiOutlineSun, HiOutlineRss,} from "react-icons/hi";
import Btn from "../btn/Btn";


export default function Navbar()
 {
  return (
    <nav className="flex justify-around p-8 items-center">
      <div className="flex space-x-3">
        <img src="img/rocket.png" alt="" className="w-9"/>
        <p>AstrosWind</p>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="">Landing</a>
        </li>
        <li>
          <a href="">Pages</a>
        </li>
        <li>
          <a href="">Widgets</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
      <div className="flex space-x-8 items-center">
        <HiOutlineSun />
        <HiOutlineRss />
        <Btn title="Download" />
      </div>
    </nav>
  );
}
