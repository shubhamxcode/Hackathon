import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="text-3xl font-extrabold text-white hover:text-blue-400 transition duration-300 tracking-wide"
        >
          Gamify
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-4">
        <Link
          to="/map"
          className="bg-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Go to Map
        </Link>
        <Link
          to="/login"
          className="bg-gray-700 px-5 py-2 rounded-md font-medium hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
