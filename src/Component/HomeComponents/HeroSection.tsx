
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Land to NFT <span className="bg-clip-text bg-gradient-to-r">Transformation</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Seamlessly convert your physical land into digital assets on the blockchain with our secure, transparent platform.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/login" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300 inline-flex items-center justify-center">
              Get started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm hover:bg-opacity-70 text-white border border-gray-700 font-medium rounded-xl transition duration-300 inline-flex items-center justify-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;