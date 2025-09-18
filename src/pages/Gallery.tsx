import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <GallerySection fullPage />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;


