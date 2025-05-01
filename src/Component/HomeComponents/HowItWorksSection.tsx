import React from 'react';
import { Map, Box, Award } from 'lucide-react';

// Define the props type for StepCard
interface StepCardProps {
  number: string; // or number if you prefer
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Three simple steps to tokenize your land property</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard number="1" icon={<Map />} title="Upload Property Details" description="Connect your wallet and provide your land documents or use our mapping tool." />
            <StepCard number="2" icon={<Box />} title="Generate Digital Asset" description="Our system creates a unique NFT with all legal details and geographic metadata." />
            <StepCard number="3" icon={<Award />} title="Mint & Manage" description="Securely mint your NFT and manage transfers or transactions through our dashboard." />
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description }) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-blue-900/30">{number}</div>
      <div className="bg-gray-900 rounded-xl p-6 text-center relative h-full border border-gray-700">
        {icon}
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;