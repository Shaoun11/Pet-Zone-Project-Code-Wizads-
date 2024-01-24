"use client";
import Banner from "./Components/Banner";
import BestPet from "./Components/BestPet";

import Contact from "./Components/Contact";
import FAQSection from "./Components/FAQ";
import Gallery from "./Components/Gallery";


export default function Home() {
  return (
    <main >
    <Banner></Banner>
    <BestPet></BestPet>
   
    <Gallery></Gallery>
    <FAQSection></FAQSection>
    <Contact></Contact>
    </main>
  );
}
