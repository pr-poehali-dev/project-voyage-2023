import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Reviews from "@/components/Reviews";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Reviews />
      <MapSection />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;