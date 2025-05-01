
import AnimatedBackground from '../Component/HomeComponents/AnimatedBackground';
import HeroSection from '../Component/HomeComponents/HeroSection';
import FeaturesSection from '../Component/HomeComponents/FeaturesSection';
import HowItWorksSection from '../Component/HomeComponents/HowItWorksSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      <AnimatedBackground />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </div>
  );
};

export default Home;