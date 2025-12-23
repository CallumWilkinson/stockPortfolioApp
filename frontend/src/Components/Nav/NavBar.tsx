import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const NavBar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="relative container mx-auto p-6 text-brand-forest">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="" className="h-12 w-auto" />
          </Link>
          <div className="hidden font-display font-semibold tracking-tight lg:flex">
            <Link
              to="/search"
              className="transition-colors text-brand-forest hover:text-brand-leaf"
            >
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 font-sans">
            <div className="font-medium transition-colors hover:text-brand-leaf">
              Welcome, {user?.userName}
            </div>
            <div
              onClick={logout}
              className="px-8 py-3 font-semibold rounded-lg text-brand-sand bg-brand-leaf transition-colors hover:bg-brand-mint"
            >
              Logout
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 font-sans">
            <Link
              to="/login"
              className="font-medium transition-colors hover:text-brand-leaf"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-semibold rounded-lg text-brand-sand bg-brand-leaf transition-colors hover:bg-brand-mint"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
