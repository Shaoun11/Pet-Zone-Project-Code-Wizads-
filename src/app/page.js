"use client";
import Accessories from "./Components/Accessories";
import Banner from "./Components/Banner";
import BestPet from "./Components/BestPet";

import Contact from "./Components/Contact";
import FAQSection from "./Components/FAQ";
import FeturedAccecories from "./Components/FeturedAccecories";
import Gallery from "./Components/Gallery";
import OurServices from "./Components/OurService";


export default function Home() {
  return (
    <main >
    <Banner></Banner>
    <BestPet></BestPet>

<FeturedAccecories></FeturedAccecories>
    <OurServices></OurServices>
    <Gallery></Gallery>
    <FAQSection></FAQSection>
    <Contact></Contact>
    </main>
  );
}
