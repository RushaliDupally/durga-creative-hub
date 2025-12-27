import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gallery1 from "@/assets/teaching.jpeg";
import gallery2 from "@/assets/students.jpeg";
import gallery3 from "@/assets/sareeDraping.jpeg";
import gallery4 from "@/assets/office.jpeg";
import gallery5 from "@/assets/tailoringMachines.jpeg";
import gallery6 from "@/assets/momentos.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, alt: "Fashion Designing - Theoritical class" },
    { src: gallery2, alt: "Fashion Design Workshop" },
    { src: gallery3, alt: "Saree Draping Workshop" },
    { src: gallery4, alt: "Office room" },
    { src: gallery5, alt: "Tailoring Room" },
    { src: gallery6, alt: "Achievements" },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a glimpse into our vibrant learning environment and the creative work of our
            talented students
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-primary-foreground font-medium p-4 w-full">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img src={selectedImage} alt="Gallery Image" className="w-full h-auto" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
