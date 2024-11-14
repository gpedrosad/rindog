import { useState } from "react";
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


// Componente de menú
function Menu() {
  return (
    <div className="sticky top-0 flex justify-between items-center w-full p-4 bg-white z-10">
      <button className="text-[#173B33] focus:outline-none">
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-[#173B33]"></div>
          <div className="w-6 h-0.5 bg-[#173B33]"></div>
          <div className="w-6 h-0.5 bg-[#173B33]"></div>
        </div>
      </button>
      <span className="text-[#173B33] font-semibold">Log in</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner promocional */}
      <div className="w-full bg-[#173B33] text-white py-4 px-6 text-center">
        ¡Te han regalado un 50% de descuento en tu primera compra!{" "}
        <a href="#" className="underline font-bold hover:no-underline">
          CANJÉALO AHORA
        </a>
      </div>

      {/* Menú */}
      <Menu />
      <Hero/>

      {/* Sección de PlanSteps */}
      <PlanSteps />
      <Reviews/>
      <FreshApproach/>
      <EasierForYou/>
      <Benefits/>
      <DrivenByScience/>
      <CostumersSaying/>
      <InstagramPost/>
      <ReviewCard/>
      <Footer/>
    </div>
  );
}