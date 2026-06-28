import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          NestSphere
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>

          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Login
        </Link>

      </div>
    </header>
  );
}

export default Navbar;