import { Section } from "../../Reusables/Container";
import { gallery } from "./lists";

const Gallery = () => {
  return (
    <Section className="h-screen flex flex-col justify-center">
      <p>Gallery</p>
      <div className="grid grid-cols-3">
        {gallery.map((chi, idx) => (
          <img key={idx} src={chi} alt="gallery-image" />
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
