import { useState } from 'react';
import { Search } from 'lucide-react';

const MapSidebar = () => {
  const [activeTab, setActiveTab] = useState('marketplace');
  
  return (
    <div className="flex h-screen w-full">
      {/* Main Map Area - Left Side */}
      <div className="w-1/2 h-full relative bg-green-100">
        <div className="absolute top-4 left-4 bg-white p-2 rounded-md shadow-md z-10">
          <h2 className="text-lg font-semibold text-green-600">Let's Mint</h2>
          <p className="text-sm text-gray-500">Select a plot to get started</p>
        </div>
        
        <div className="h-full w-full">
          {/* Map Placeholder - Would be replaced with actual map component */}
          <div className="h-full w-full bg-green-200 flex items-center justify-center">
            <span className="text-lg text-gray-700">Interactive Map Area</span>
          </div>
        </div>
        
        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow-md">+</button>
          <button className="bg-white p-2 rounded-full shadow-md">-</button>
        </div>
      </div>
      
      {/* Sidebar - Right Side */}
      <div className="w-1/2 h-full flex flex-col bg-white">
        {/* Top Navigation Bar */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex gap-2">
            <button className="bg-black text-white px-4 py-2 rounded-md">Mint</button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-2 border rounded-md w-64"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="flex gap-2">
            {/* Navigation Icons */}
            <span className="p-2">🏠</span>
            <span className="p-2">👤</span>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'marketplace' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('marketplace')}
            >
              Marketplace
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'collection' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('collection')}
            >
              My Collection
            </button>
          </div>
          
          {/* Search Area */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-2 border rounded-md w-full"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Empty State */}
          <div className="text-center text-gray-500 py-12">
            <p>No items found in the marketplace</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSidebar;