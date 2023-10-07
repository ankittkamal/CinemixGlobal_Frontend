import React from "react";
import { BsFillSunFill } from "react-icons/bs";
function Navbar() {
  return (
    <div className="bg-secondary">
      <div className=" text-white max-w-screen-xl mx-auto p-2">
        <div className="flex justify-between items-center">
          <img src="./logo.png" alt="" className="h-10"></img>
          <ul className="flex items-center space-x-4">
            <li>
              <button className="rounded  bg-dark-subtle p-1">
                <BsFillSunFill className="text-secondary" size={24} />
              </button>
            </li>
            <li>
              <input
                type="text"
                className="border-2 border-dark-subtle p-1 bg-transparent text-xl outline-none focus:border-white transition text-white rounded-xl"
                placeholder="search..."
              ></input>
            </li>
            <li className="text-white font-semibold text-lg">Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
