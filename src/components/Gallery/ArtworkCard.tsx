
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ArtworkCardProps {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
}

const ArtworkCard = ({ title, description, imageSrc, category }: ArtworkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AspectRatio ratio={3/4} className="bg-gray-100">
            <img 
              src={imageSrc} 
              alt={title} 
              className={cn(
                "object-cover w-full h-full transition-transform duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            />
            <div className={cn(
              "absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}>
              <span className="text-xs font-medium text-indigo-300 uppercase tracking-wider">
                {category}
              </span>
              <h3 className="mt-1 text-lg font-medium text-white">{title}</h3>
              <p className="mt-1 text-sm text-gray-300 line-clamp-2">
                {description}
              </p>
            </div>
          </AspectRatio>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-md overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">
                {category}
              </span>
              <h2 className="mt-2 text-2xl font-serif font-semibold text-gray-900">{title}</h2>
              <p className="mt-4 text-gray-600">
                {description}
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Inquire About This Piece
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkCard;
