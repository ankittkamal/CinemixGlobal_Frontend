import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../hooks";

function Navbar() {
  const { toggleTheme } = useTheme();
  const { authInfo, handleLogout } = useAuth();
  const { isLoggedIn } = authInfo;
  return (
    <div className="bg-secondary shadow-sm shadow-gray-500">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <Link to="./">
            <img
              src="./logo.png"
              alt="movie-review-app-logo"
              className="h-10"
            ></img>
          </Link>

          <ul className="flex items-center space-x-4">
            <li>
              <button
                onClick={toggleTheme}
                className="rounded  bg-dark-subtle dark:bg-white p-1"
              >
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
            <li>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-white font-semibold text-lg"
                >
                  Log out
                </button>
              ) : (
                <Link
                  className="text-white font-semibold text-lg"
                  to="/auth/signin"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
