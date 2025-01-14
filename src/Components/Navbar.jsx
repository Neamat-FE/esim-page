import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-none">
        <div className="container">
          <a className="navbar-brand">
            <img src="images/logo.png" alt="" />
          </a>
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
