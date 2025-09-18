import { Suspense, lazy } from 'react';
import Ablogo from '@/assets/Ablogo.png';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HeroSection = lazy(() => import('@/components/HeroSection'));

const AboutSection = lazy(() => import('@/components/AboutSection'));
const TechMarquee = lazy(() => import('@/components/TechMarquee'));
const GallerySection = lazy(() => import('@/components/GallerySection'));


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Suspense
          fallback={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
              <img src={Ablogo} alt="Abhinandan logo loading" style={{ width: 140, height: 140, opacity: 1, borderRadius: 16 }} />
            </div>
          }
        >
          <HeroSection />
          <TechMarquee/>
          <AboutSection />
          <GallerySection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
