import LandingPage from "./components/LandingPage";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MasterContent from "./components/MasterContent";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <MasterContent />
        <ServiceSection />
        <FeaturesSection  />
      </main>
      
      <LandingPage />
    </div>
  );
}

export default App;
