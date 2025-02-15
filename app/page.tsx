import Banner from "./components/Banner";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import GreatReasons from "./components/WhyUsReasons";
import CallToAction from "./components/CallToAction";
import BrandsWeRepair from "./components/Brands";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Services />
      <AboutUs />
      <BrandsWeRepair />
      <ContactUs />
      <GreatReasons />
      <CallToAction />
      <Testimonials />
      <FAQ />
      {/* ... rest of your page content */}
    </main>
  );
}
