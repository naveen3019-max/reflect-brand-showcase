import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import ProductShowcase from "@/components/ProductShowcase";
import About from "@/components/About";
import StoreLocation from "@/components/StoreLocation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryStrip />
      <ProductShowcase />
      <About />
      <StoreLocation />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
