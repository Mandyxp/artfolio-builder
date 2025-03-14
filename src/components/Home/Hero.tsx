
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-indigo-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-gray-900">
              <span className="block animate-fade-up">Bringing</span>
              <span className="block text-indigo-600 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                imagination
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: "0.2s" }}>
                to life
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              A collection of unique artwork created to inspire, engage, and transform spaces.
              Each piece tells a story and evokes emotion.
            </p>
            <div className="mt-8 flex gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/gallery"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-lg transform translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1471&auto=format&fit=crop" 
                    alt="Artwork sample" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1470&auto=format&fit=crop" 
                    alt="Artwork sample" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1490&auto=format&fit=crop" 
                    alt="Artwork sample" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg transform translate-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1454&auto=format&fit=crop" 
                    alt="Artwork sample" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
