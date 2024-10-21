import { Container } from "../../component/Reusables/Container";
import { MediaHeroSection, MediaRecentNews } from "../../component/Media";
import Gallery from "../../component/Media/Gallery/gallery";

const Media = () => {
  return (
    <Container>
      <MediaHeroSection />
      <MediaRecentNews />
      <Gallery />
    </Container>
  );
};

export default Media;
