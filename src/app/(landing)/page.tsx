import Hero from "./components/Hero";
import TopNavBar from "@/components/TopNavBar";
import Features from "./components/Features";
import FAQs from "./components/FAQs";
// import Portfolio from './components/Portfolio'
import Pricing from "./components/Pricing";
// import Services from './components/Services'
// import Since from './components/Since'
// import Blogs from './components/Blogs'
// import ServicesMarquee from '@/components/ServicesMarquee'

const Landing = () => {
  return (
    <>
      <TopNavBar
        position="fixed"
        menuItems={[
          "home",
          "features",
          "faq",
          // 'portfolio',
          "pricing",
          // 'service',
        ]}
      />

      <Hero />

      <Features />

      <FAQs />

      {/* <Portfolio /> */}

      <Pricing />

      {/* <Services /> */}

      {/* <ServicesMarquee /> */}

      {/* <Since /> */}

      {/* <Blogs /> */}
    </>
  );
};

export default Landing;
