
import { useState } from "react";
import ArtworkCard from "./ArtworkCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Paintings", "Digital", "Sketches", "Sculptures"];

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    description: "A vibrant exploration of color and emotion through abstract forms. This piece reflects the harmony found in chaos.",
    imageSrc: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?q=80&w=1740&auto=format&fit=crop",
    category: "Paintings"
  },
  {
    id: 2,
    title: "Urban Dreams",
    description: "A digital illustration capturing the essence of urban life through a dreamlike lens.",
    imageSrc: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1490&auto=format&fit=crop",
    category: "Digital"
  },
  {
    id: 3,
    title: "Tranquil Waters",
    description: "A serene landscape painting depicting the calming effect of water on the human spirit.",
    imageSrc: "https://images.unsplash.com/photo-1548081087-83c449609a11?q=80&w=1664&auto=format&fit=crop",
    category: "Paintings"
  },
  {
    id: 4,
    title: "Portrait Study",
    description: "A detailed pencil sketch exploring human expression and the subtleties of facial features.",
    imageSrc: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?q=80&w=1490&auto=format&fit=crop",
    category: "Sketches"
  },
  {
    id: 5,
    title: "Organic Form",
    description: "A sculpture exploring the relationship between organic forms and negative space.",
    imageSrc: "https://images.unsplash.com/photo-1621886292650-520f76c747d6?q=80&w=1635&auto=format&fit=crop",
    category: "Sculptures"
  },
  {
    id: 6,
    title: "Futuristic Cityscape",
    description: "A digital artwork imagining the cities of tomorrow, blending technology and nature.",
    imageSrc: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1470&auto=format&fit=crop",
    category: "Digital"
  }
];

const ArtworkGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks = activeCategory === "All" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className={cn(
              "rounded-full",
              activeCategory === category 
                ? "bg-indigo-100 text-indigo-700 border-indigo-300" 
                : "bg-white hover:bg-gray-100"
            )}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtworks.map((artwork) => (
          <div key={artwork.id} className="animate-fade-up">
            <ArtworkCard
              title={artwork.title}
              description={artwork.description}
              imageSrc={artwork.imageSrc}
              category={artwork.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkGrid;
