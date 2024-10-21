import GetInTouch from "../../component/Contact/GetInTouch/get-in-touch";
import ContactHeroSection from "../../component/Contact/HeroSection/hero-section";
import { Container } from "../../component/Reusables/Container";

const Contact = () => {
  return (
    <Container>
      <ContactHeroSection />
      <GetInTouch />
    </Container>
  );
};

export default Contact;
