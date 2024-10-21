import { Container } from "../../component/Reusables/Container";
import HeroSection from "../../component/HeroSection/hero-section";
import WhoAreWe from "../../component/WhoAreWe/who-are-we";
import ModernBusiness from "../../component/ModernBusiness/modern-business";
import AboutUs from "../../component/AboutUs/about-us";
import NewsAndLetter from "../../component/NewsAndLetter/news-and-letter";
import NewsAndUpdate from "../../component/NewsAndUpdate/news-and-update";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <AboutUs />
      <WhoAreWe />
      <ModernBusiness />
      <NewsAndLetter />
      <NewsAndUpdate />
    </Container>
  );
};

export default Home;
