import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Map from "../components/Map/map";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <TrustBar/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <BeforeAfter/>
      <Testimonials/>
      <Gallery/>
      <FAQ/>
      <Contact/>
      <Map/>
      <Footer/>
    </>
  );
};

export default Home;