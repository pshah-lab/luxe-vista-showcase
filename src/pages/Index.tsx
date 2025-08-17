import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import TechMarquee from '@/components/TechMarquee';
import GallerySection from '@/components/GallerySection';
import LuxuryColorShowcase from '@/components/LuxuryColorShowcase';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* <FeaturedProjects /> */}
        {/* <LuxuryColorShowcase /> */}
        <TechMarquee/>
        <AboutSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
