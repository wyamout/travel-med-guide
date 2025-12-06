import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProcedurePage from "./pages/ProcedurePage";
import ProceduresListPage from "./pages/ProceduresListPage";
import HospitalsListPage from "./pages/HospitalsListPage";
import HospitalPage from "./pages/HospitalPage";
import HospitalSurgeonsPage from "./pages/HospitalSurgeonsPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import SurgeonsPage from "./pages/SurgeonsPage";
import ScrollToTop from "./components/utils/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Main Pages */}
            <Route path="/procedures" element={<ProceduresListPage />} />
            <Route path="/hospitals" element={<HospitalsListPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/prices" element={<PricingPage />} />
            <Route path="/surgeons" element={<SurgeonsPage />} />
            
            {/* Category Pages */}
            <Route path="/face" element={<CategoryPage />} />
            <Route path="/breast" element={<CategoryPage />} />
            <Route path="/body" element={<CategoryPage />} />
            <Route path="/srs" element={<CategoryPage />} />
            
            {/* Procedure Pages */}
            <Route path="/procedures/:slug" element={<ProcedurePage />} />
            <Route path="/face/:slug" element={<ProcedurePage />} />
            <Route path="/breast/:slug" element={<ProcedurePage />} />
            <Route path="/body/:slug" element={<ProcedurePage />} />
            <Route path="/srs/:slug" element={<ProcedurePage />} />
            <Route path="/other/:slug" element={<ProcedurePage />} />
            
            {/* Hospital Pages */}
            <Route path="/hospitals/:slug" element={<HospitalPage />} />
            
            {/* Hospital Pages by Location */}
            <Route path="/bangkok/:slug" element={<HospitalPage />} />
            <Route path="/bangkok/:slug/surgeons" element={<HospitalSurgeonsPage />} />
            <Route path="/phuket/:slug" element={<HospitalPage />} />
            <Route path="/phuket/:slug/surgeons" element={<HospitalSurgeonsPage />} />
            <Route path="/samui/:slug" element={<HospitalPage />} />
            <Route path="/samui/:slug/surgeons" element={<HospitalSurgeonsPage />} />
            <Route path="/pattaya/:slug" element={<HospitalPage />} />
            <Route path="/pattaya/:slug/surgeons" element={<HospitalSurgeonsPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
