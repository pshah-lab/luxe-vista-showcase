import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoLoader from "@/components/LogoLoader"; // ✅ Import reusable loader

const HeroSection = lazy(() => import("@/components/HeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const TechMarquee = lazy(() => import("@/components/TechMarquee"));
const GallerySection = lazy(() => import("@/components/GallerySection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Suspense fallback={<LogoLoader />}>
          <HeroSection />
          <TechMarquee />
          <AboutSection />
          <GallerySection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;