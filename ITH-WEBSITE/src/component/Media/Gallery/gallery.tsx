import { Section } from "../../Reusables/Container";
import { gallery } from "./lists";

const Gallery = () => {
  return (
    <Section className="h-screen flex flex-col justify-center">
      <p>Gallery</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((chi, idx) => (
          <div
            key={idx}
            className={`relative ${idx === 0 ? "row-span-2" : ""}`}
          >
            <img
              src={chi}
              alt={`gallery-image-${idx}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
