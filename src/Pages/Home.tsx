import { Link } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import { Globe, Box, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Transform Your Land into NFTs
            </h1>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Our platform converts your land into digital assets on the blockchain, creating unique NFTs you can mint and transfer seamlessly.
            </p>
            <Link to="/login" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-lg transition duration-300 inline-flex items-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
              <Globe className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Polygon Conversion</h3>
              <p className="text-blue-100">Convert your land into precise polygons for accurate representation on the blockchain.</p>
            </div>
            
            <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
              <Box className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">NFT Creation</h3>
              <p className="text-blue-100">Create unique NFTs that represent your land, ensuring ownership and authenticity.</p>
            </div>
            
            <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
              <ArrowRight className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Mint & Transfer</h3>
              <p className="text-blue-100">Mint your NFTs and transfer them easily, leveraging the power of blockchain technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Map Your Property</h3>
                  <p className="text-blue-100">Upload your property boundaries or use our mapping tool to define your land area.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Generate NFT</h3>
                  <p className="text-blue-100">Our system creates a unique digital token representing your land with all ownership details.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure & Transfer</h3>
                  <p className="text-blue-100">Mint your land NFT to the blockchain and transfer ownership with secure transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Land?</h2>
          <Link  to='/login' className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-lg transition duration-300 inline-block mt-4">
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;