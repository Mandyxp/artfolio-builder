
import { Separator } from "@/components/ui/separator";

const AboutContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-serif font-bold text-gray-900">About the Artist</h1>
          <Separator className="w-24 h-1 bg-indigo-500" />
          <p className="text-lg text-gray-700">
            Hello! I'm a passionate artist dedicated to creating meaningful and evocative pieces that connect with viewers on an emotional level.
          </p>
          <p className="text-gray-600">
            My journey as an artist began over a decade ago when I discovered my love for translating the world around me into visual expressions. Since then, I've developed a distinctive style that blends traditional techniques with contemporary approaches.
          </p>
          <p className="text-gray-600">
            I draw inspiration from nature, urban landscapes, human emotions, and the interplay between light and shadow. Each piece I create is a reflection of these influences, filtered through my personal experiences and artistic vision.
          </p>
          <p className="text-gray-600">
            When I'm not in my studio, I enjoy teaching workshops, collaborating with other creatives, and exploring new techniques to continuously evolve my artistic practice.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-ratio-1/1 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=1467&auto=format&fit=crop" 
              alt="Artist portrait" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-indigo-100 rounded-lg p-6 shadow-lg animate-fade-up">
            <p className="text-gray-700 italic">
              "Art is my way of processing the world and sharing that perspective with others. I create to connect, to inspire, and to transform spaces."
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-24">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">My Artistic Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Concept & Inspiration</h3>
            <p className="text-gray-600">
              Every piece begins with an idea or feeling I want to explore. I gather inspiration, create sketches, and develop a vision for the final work.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Creation & Refinement</h3>
            <p className="text-gray-600">
              Working with my chosen medium, I bring the concept to life through careful execution. This phase involves experimentation, problem-solving, and intuitive decisions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Completion & Reflection</h3>
            <p className="text-gray-600">
              As the work nears completion, I step back, reflect, and make final adjustments to ensure the piece communicates my intended vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
