import { Link } from 'react-router-dom';
import { Globe, Box, ArrowRight, Shield, Layers, Map, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Animated Background with Floating Dots and Blue Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
          {/* Blue Grid Lines */}
          <defs>
            <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3B82F6" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          
          {/* Floating Connection Lines */}
          <path d="M0,50 Q150,150 300,100 T600,50" stroke="#3B82F6" strokeWidth="0.5" fill="none" opacity="0.3">
            <animate attributeName="d" 
              values="M0,50 Q150,150 300,100 T600,50;
                     M0,100 Q150,50 300,150 T600,100;
                     M0,50 Q150,150 300,100 T600,50" 
              dur="20s" 
              repeatCount="indefinite" />
          </path>
          
          <path d="M100,200 Q250,100 400,250 T800,200" stroke="#3B82F6" strokeWidth="0.5" fill="none" opacity="0.2">
            <animate attributeName="d" 
              values="M100,200 Q250,100 400,250 T800,200;
                     M100,250 Q250,200 400,100 T800,250;
                     M100,200 Q250,100 400,250 T800,200" 
              dur="25s" 
              repeatCount="indefinite" />
          </path>
          
          {/* Floating Dots */}
          <circle cx="10%" cy="10%" r="2" fill="#60A5FA">
            <animate attributeName="cx" values="10%;30%;20%;10%" dur="30s" repeatCount="indefinite" />
            <animate attributeName="cy" values="10%;30%;40%;10%" dur="25s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="80%" cy="20%" r="3" fill="#60A5FA">
            <animate attributeName="cx" values="80%;60%;70%;80%" dur="35s" repeatCount="indefinite" />
            <animate attributeName="cy" values="20%;40%;30%;20%" dur="30s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="7s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="30%" cy="85%" r="2.5" fill="#818CF8">
            <animate attributeName="cx" values="30%;50%;40%;30%" dur="40s" repeatCount="indefinite" />
            <animate attributeName="cy" values="85%;70%;80%;85%" dur="35s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="70%" cy="90%" r="2" fill="#60A5FA">
            <animate attributeName="cx" values="70%;90%;80%;70%" dur="28s" repeatCount="indefinite" />
            <animate attributeName="cy" values="90%;70%;80%;90%" dur="32s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="20%" cy="40%" r="1.5" fill="#93C5FD">
            <animate attributeName="cx" values="20%;10%;15%;20%" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="40%;60%;50%;40%" dur="18s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="85%" cy="60%" r="2" fill="#818CF8">
            <animate attributeName="cx" values="85%;95%;90%;85%" dur="22s" repeatCount="indefinite" />
            <animate attributeName="cy" values="60%;40%;50%;60%" dur="24s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="7s" repeatCount="indefinite" />
          </circle>
          
          {/* Animated Connecting Lines */}
          <line x1="10%" y1="10%" x2="80%" y2="20%" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="x1" values="10%;30%;20%;10%" dur="30s" repeatCount="indefinite" />
            <animate attributeName="y1" values="10%;30%;40%;10%" dur="25s" repeatCount="indefinite" />
            <animate attributeName="x2" values="80%;60%;70%;80%" dur="35s" repeatCount="indefinite" />
            <animate attributeName="y2" values="20%;40%;30%;20%" dur="30s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="8s" repeatCount="indefinite" />
          </line>
          
          <line x1="80%" y1="20%" x2="30%" y2="85%" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="x1" values="80%;60%;70%;80%" dur="35s" repeatCount="indefinite" />
            <animate attributeName="y1" values="20%;40%;30%;20%" dur="30s" repeatCount="indefinite" />
            <animate attributeName="x2" values="30%;50%;40%;30%" dur="40s" repeatCount="indefinite" />
            <animate attributeName="y2" values="85%;70%;80%;85%" dur="35s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="10s" repeatCount="indefinite" />
          </line>
          
          <line x1="30%" y1="85%" x2="70%" y2="90%" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="x1" values="30%;50%;40%;30%" dur="40s" repeatCount="indefinite" />
            <animate attributeName="y1" values="85%;70%;80%;85%" dur="35s" repeatCount="indefinite" />
            <animate attributeName="x2" values="70%;90%;80%;70%" dur="28s" repeatCount="indefinite" />
            <animate attributeName="y2" values="90%;70%;80%;90%" dur="32s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="7s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjQiPjxwYXRoIGQ9Ik0yOS41IDI5LjVoMXYxaC0xem0xMCAwaDF2MWgtMXptMTAgMGgxdjFoLTF6TTI5LjUgMzkuNWgxdjFoLTF6bTEwIDBoMXYxaC0xem0xMCAwaDF2MWgtMXoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              Land to NFT <span className=" bg-clip-text bg-gradient-to-r">Transformation</span>
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
        {/* Floating Dots in Hero Section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
            <circle cx="5%" cy="10%" r="3" fill="#60A5FA">
              <animate attributeName="cx" values="5%;25%;15%;5%" dur="30s" repeatCount="indefinite" />
              <animate attributeName="cy" values="10%;30%;20%;10%" dur="25s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="15%" cy="20%" r="4" fill="#60A5FA">
              <animate attributeName="cx" values="15%;35%;25%;15%" dur="35s" repeatCount="indefinite" />
              <animate attributeName="cy" values="20%;40%;30%;20%" dur="30s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="7s" repeatCount="indefinite" />
            </circle>
            <circle cx="25%" cy="30%" r="3.5" fill="#818CF8">
              <animate attributeName="cx" values="25%;45%;35%;25%" dur="40s" repeatCount="indefinite" />
              <animate attributeName="cy" values="30%;50%;40%;30%" dur="35s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="35%" cy="40%" r="4" fill="#60A5FA">
              <animate attributeName="cx" values="35%;55%;45%;35%" dur="28s" repeatCount="indefinite" />
              <animate attributeName="cy" values="40%;60%;50%;40%" dur="22s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="45%" cy="50%" r="3" fill="#93C5FD">
              <animate attributeName="cx" values="45%;65%;55%;45%" dur="32s" repeatCount="indefinite" />
              <animate attributeName="cy" values="50%;70%;60%;50%" dur="30s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="55%" cy="60%" r="4" fill="#818CF8">
              <animate attributeName="cx" values="55%;75%;65%;55%" dur="40s" repeatCount="indefinite" />
              <animate attributeName="cy" values="60%;80%;70%;60%" dur="35s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="65%" cy="70%" r="3" fill="#60A5FA">
              <animate attributeName="cx" values="65%;85%;75%;65%" dur="38s" repeatCount="indefinite" />
              <animate attributeName="cy" values="70%;90%;80%;70%" dur="30s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="75%" cy="80%" r="4" fill="#93C5FD">
              <animate attributeName="cx" values="75%;95%;85%;75%" dur="30s" repeatCount="indefinite" />
              <animate attributeName="cy" values="80%;100%;90%;80%" dur="25s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="85%" cy="90%" r="3" fill="#60A5FA">
              <animate attributeName="cx" values="85%;100%;90%;85%" dur="35s" repeatCount="indefinite" />
              <animate attributeName="cy" values="90%;70%;80%;90%" dur="30s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="7s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>

      {/* Features Section - Card-based with icons */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Platform</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our comprehensive solution makes land tokenization accessible and secure for everyone</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
              <div className="bg-blue-600 p-3 rounded-xl inline-block mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Smart Polygon Mapping</h3>
              <p className="text-gray-400">Advanced algorithms create precise digital boundaries of your land for blockchain representation.</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
              <div className="bg-blue-600 p-3 rounded-xl inline-block mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Secure NFT Creation</h3>
              <p className="text-gray-400">ERC-721 tokens with tamper-proof metadata ensuring ownership authenticity and property details.</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
              <div className="bg-blue-600 p-3 rounded-xl inline-block mb-4">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Multi-Chain Support</h3>
              <p className="text-gray-400">Mint and transfer your land NFTs across multiple blockchain networks for maximum flexibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Timeline style */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Three simple steps to tokenize your land property</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-blue-900/30">1</div>
                <div className="bg-gray-900 rounded-xl p-6 text-center relative h-full border border-gray-700">
                  <Map className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Upload Property Details</h3>
                  <p className="text-gray-400">Connect your wallet and provide your land documents or use our mapping tool.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-blue-900/30">2</div>
                <div className="bg-gray-900 rounded-xl p-6 text-center relative h-full border border-gray-700">
                  <Box className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Generate Digital Asset</h3>
                  <p className="text-gray-400">Our system creates a unique NFT with all legal details and geographic metadata.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-blue-900/30">3</div>
                <div className="bg-gray-900 rounded-xl p-6 text-center relative h-full border border-gray-700">
                  <Award className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Mint & Manage</h3>
                  <p className="text-gray-400">Securely mint your NFT and manage transfers or transactions through our dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Benefits Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Land NFT Ecosystem</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience a revolutionary approach to property ownership and management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group">
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 h-full transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="bg-blue-600 p-3 rounded-xl inline-block mb-4">
                  <Box className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Tokenized Assets</h3>
                <p className="text-gray-400">Convert physical property into digital tokens with legal recognition and blockchain security</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 h-full transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="bg-indigo-600 p-3 rounded-xl inline-block mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Transparent Ownership</h3>
                <p className="text-gray-400">Immutable blockchain records with cryptographic proof of ownership and property history</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 h-full transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="bg-purple-600 p-3 rounded-xl inline-block mb-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Fractional Investment</h3>
                <p className="text-gray-400">Split valuable properties into affordable shares enabling wider market participation</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 h-full transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="bg-blue-600 p-3 rounded-xl inline-block mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Global Access</h3>
                <p className="text-gray-400">Buy, sell and trade land assets instantly across borders without traditional barriers</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          </div>
          
          {/* Interactive Map Preview */}
          <div className="mt-16 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
            <div className="relative bg-gray-800 rounded-xl p-2 overflow-hidden">
              <div className="aspect-video w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden relative">
                {/* World Map with Pulse Points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-3xl opacity-30">
                    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                      <path d="M174,21L166,23L159,35L163,44L170,49L176,61L186,65L186,73L175,85L179,96L201,102L205,96L211,97L224,88L226,81L217,66L216,54L214,47L206,42L208,28L201,16L195,16L188,14L174,21Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M276,31L279,43L278,59L285,78L296,82L307,89L319,88L335,79L348,69L349,62L340,54L333,52L319,52L312,39L294,30L276,31Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M378,69L375,78L385,93L392,106L406,110L411,118L415,130L425,134L443,133L452,129L446,120L441,112L443,98L450,87L448,74L442,65L435,61L424,63L420,71L408,71L397,66L378,69Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M522,53L513,65L517,77L524,84L534,87L545,80L543,67L534,57L522,53Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M598,58L589,62L584,72L590,85L608,88L628,81L631,71L622,60L611,58L598,58Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M178,134L164,133L152,139L147,152L151,166L154,172L175,179L187,179L190,169L182,159L185,147L178,134Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M276,136L266,134L260,144L262,156L273,163L285,159L287,148L285,140L276,136Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M520,150L507,156L496,168L494,181L513,192L530,190L543,179L543,166L534,159L520,150Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M188,230L175,227L165,235L162,248L166,261L180,266L193,260L198,245L194,237L188,230Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M294,214L278,221L264,228L255,238L266,249L280,251L290,243L302,240L321,242L337,247L347,242L340,230L324,225L315,221L313,208L301,202L294,214Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M428,217L412,224L405,239L412,251L425,247L435,242L441,229L437,219L428,217Z" fill="#3b82f6" opacity="0.2" />
                      <path d="M590,280L578,284L570,294L573,305L585,308L595,304L600,297L598,288L590,280Z" fill="#3b82f6" opacity="0.2" />
                      
                      {/* Pulse Points */}
                      <circle cx="200" cy="96" r="6" fill="#3b82f6" opacity="0.8">
                        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="290" cy="140" r="6" fill="#8b5cf6" opacity="0.8">
                        <animate attributeName="r" values="6;10;6" dur="2.3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="425" cy="134" r="6" fill="#3b82f6" opacity="0.8">
                        <animate attributeName="r" values="6;10;6" dur="1.7s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.7s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="520" cy="150" r="6" fill="#8b5cf6" opacity="0.8">
                        <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="320" cy="240" r="6" fill="#3b82f6" opacity="0.8">
                        <animate attributeName="r" values="6;10;6" dur="1.9s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.9s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="590" cy="280" r="6" fill="#8b5cf6" opacity="0.8">
                        <animate attributeName="r" values="6;10;6" dur="2.1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.1s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                </div>
                
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Global NFT Land Registry</h3>
                    <p className="text-blue-300 max-w-md mx-auto">Properties being tokenized worldwide on our platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;