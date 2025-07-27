import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center space-x-4 px-[4rem] py-6">
      <div className="logo">
        <img src={logo} alt="ICP" className="h-10" />
      </div>
      <div className="grow flex justify-center space-x-8 text-lg">
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
