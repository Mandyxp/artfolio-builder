
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ArtworkCard from "../Gallery/ArtworkCard";

const featuredArtworks = [
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
  }
];

const FeaturedWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Featured Works</h2>
            <p className="mt-2 text-gray-600">
              A curated selection of my latest and most notable pieces
            </p>
          </div>
          <Link 
            to="/gallery" 
            className="text-indigo-600 hover:text-indigo-800 flex items-center group"
          >
            View all works
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArtworks.map((artwork, index) => (
            <div 
              key={artwork.id} 
              className="animate-fade-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
    </section>
  );
};

export default FeaturedWorks;
