import { Suspense, lazy, useEffect, useState } from "react";
import Ablogo from "./assets/Ablogo.png";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const GalleryPage = lazy(() => import("./pages/Gallery"));

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            <img src={Ablogo} alt="Abhinandan logo loading" style={{ width: 140, height: 140, opacity: 1, borderRadius: 16 }} />
          </div>
        ) : (
          <BrowserRouter>
            <Suspense
              fallback={
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
                  <img src={Ablogo} alt="Abhinandan logo loading" style={{ width: 140, height: 140, opacity: 1, borderRadius: 16 }} />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="/about" element={<AboutSection />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
