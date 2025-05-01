import React from 'react';
import { Globe, Shield, Layers } from 'lucide-react';

// Define the props type for FeatureCard
interface FeatureCardProps {
  icon: React.ReactNode; // Type for the icon prop
  title: string;         // Type for the title prop
  description: string;   // Type for the description prop
}

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Platform</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our comprehensive solution makes land tokenization accessible and secure for everyone</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<Globe />} title="Smart Polygon Mapping" description="Advanced algorithms create precise digital boundaries of your land for blockchain representation." />
          <FeatureCard icon={<Shield />} title="Secure NFT Creation" description="ERC-721 tokens with tamper-proof metadata ensuring ownership authenticity and property details." />
          <FeatureCard icon={<Layers />} title="Multi-Chain Support" description="Mint and transfer your land NFTs across multiple blockchain networks for maximum flexibility." />
        </div>
      </div>
    </section>
  );
};

// Update the FeatureCard component to use the defined props type
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
      <div className="bg-blue-600 p-3 rounded-xl inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeaturesSection;