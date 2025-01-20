import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-none">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="images/logo.png" alt="" />
          </Link>
          <form className="d-flex" role="search">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
