import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Features from "@/components/landing/Features";


function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <Features/>
      
    </>
  );
}

export default LandingPage;