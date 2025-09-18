import { lazy, Suspense } from 'react';
const Navbar = lazy(() => import('@/components/Navbar'));
const HeroSection = lazy(() => import('@/components/HeroSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const Footer = lazy(() => import('@/components/Footer'));
const TechMarquee = lazy(() => import('@/components/TechMarquee'));
const GallerySection = lazy(() => import('@/components/GallerySection'));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div />}> 
        <Navbar />
      </Suspense>
      <main>
        <Suspense fallback={<div style={{ height: 400 }} />}> 
          <HeroSection />
        </Suspense>
        <Suspense fallback={<div style={{ height: 200 }} />}> 
          <TechMarquee/>
        </Suspense>
        <Suspense fallback={<div style={{ height: 400 }} />}> 
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div style={{ height: 600 }} />}> 
          <GallerySection />
        </Suspense>
      </main>
      <Suspense fallback={<div />}> 
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
