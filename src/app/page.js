"use client";

import Banner from "./Components/Banner";
import BestPet from "./Components/BestPet";
import BookingAccouncement from "./Components/BookingAccouncement";

import Contact from "./Components/Contact";
import FAQSection from "./Components/FAQ";
import FacebookMsg from "./Components/FacebookMsg";
import FeturedAccecories from "./Components/FeturedAccecories";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Navber from "./Components/Header";
import OurServices from "./Components/OurService";
import PetCare from "./Components/PetCare";
import SubNavbar from "./Components/SubNav";

export default function Home() {
  return (
    <main>

      <SubNavbar></SubNavbar>
      <hr className="h-px bg-red-200 border-0 "></hr>
      <Navber></Navber>
      <Banner></Banner>
      <BestPet></BestPet>

      <FeturedAccecories></FeturedAccecories>
      <BookingAccouncement></BookingAccouncement>
      <PetCare></PetCare>
      <OurServices></OurServices>
      <Gallery></Gallery>
      <FAQSection></FAQSection>
      <Contact></Contact>
      <Footer></Footer>
      <FacebookMsg></FacebookMsg>
    </main>
  );
}
