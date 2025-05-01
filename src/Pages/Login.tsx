import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="relative bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-700">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl z-0"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Logo/Brand */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-white mb-2">
            Welcome Back
          </h2>
          
          <p className="text-gray-400 text-center mb-8">
            Sign in to continue to your account
          </p>
          
          {/* Google Login Button */}
          <button 
            className={`w-full flex items-center justify-center gap-3 bg-white border ${isHovered ? 'border-indigo-500' : 'border-gray-300'} text-gray-700 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-4`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FcGoogle className="text-2xl" />
            <span className="font-medium">Login with Google</span>
          </button>
          
          {/* Email Login Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="font-medium">Login with Email</span>
          </button>
          
          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-3 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>
          
          {/* Sign Up Link */}
          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to='/register' className="text-indigo-500 hover:text-indigo-400 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;