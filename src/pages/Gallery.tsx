
import MainLayout from "@/layouts/MainLayout";
import ArtworkGrid from "@/components/Gallery/ArtworkGrid";

const Gallery = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Artwork Gallery</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my collection of original artwork, each piece created with passion and purpose
          </p>
        </div>
        
        <ArtworkGrid />
      </div>
    </MainLayout>
  );
};

export default Gallery;
