import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl">
          My Brand
        </Link>
        <div>
          <Link to="/" className="mx-2">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
