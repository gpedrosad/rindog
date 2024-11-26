import Image from "next/image";
import PlanSteps from "./components/PlanSteps";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import CostumersSaying from "./components/CostumersSaying";
import FreshApproach from "./components/FreshApproach";
import DrivenByScience from "./components/DrivenByScience";
import InstagramPost from "./components/InstagramPost";
import ReviewCard from "./components/ReviewCard";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import EasierForYou from "./components/EasierForYou";
import CreatePlanBanner from "./components/CreatePlanBanner";
import MenuBar from "./components/MenuBar";
import PromoBanner from "./components/PromoBanner"; // Importar el nuevo componente
import Featuring from "./components/Featuring";
import Plate from "./components/Plate";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner promocional */}
      <PromoBanner />

      {/* Menú */}
      <MenuBar />

      {/* Componente Hero con un ID para detectar el scroll */}
      <div id="hero">
        <Hero />
      </div>
      <Featuring/>

      {/* Sección de PlanSteps */}
      <PlanSteps />
      <Reviews />
      <Plate/>
      <FreshApproach />
      <EasierForYou />
      <Benefits />
      <DrivenByScience />
      <CostumersSaying />
      <CreatePlanBanner />
      <Carousel/>
      <Footer />
    </div>
  );
}