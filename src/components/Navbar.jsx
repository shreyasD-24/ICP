import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center space-x-4 text-lg">
      <div className="">Logo</div>
      <div className="grow flex justify-center space-x-6">
        <div>Product</div>
        <div>Services</div>
        <div>About us</div>
        <div>Research</div>
      </div>
      <a
        href="#"
        className="bg-black text-white rounded-[28px] p-2 px-6 text-md"
      >
        Get Started
      </a>
    </nav>
  );
}

export default Navbar;
