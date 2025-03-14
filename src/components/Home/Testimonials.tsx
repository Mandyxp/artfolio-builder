
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    content: "Working with this artist was a delight. They perfectly captured the vision I had for my home and created a piece that has become the focal point of our living room.",
    name: "Sarah Johnson",
    role: "Interior Designer",
    avatar: "SJ"
  },
  {
    id: 2,
    content: "The commissioned artwork exceeded all my expectations. Not only was the artist professional and responsive throughout the process, but they also delivered a stunning piece that captured exactly what I wanted.",
    name: "Michael Chen",
    role: "Art Collector",
    avatar: "MC"
  },
  {
    id: 3,
    content: "I've purchased multiple pieces for my office space, and the quality and creativity of the work is exceptional. Our clients always comment on the unique artwork.",
    name: "Emma Rodriguez",
    role: "Business Owner",
    avatar: "ER"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            What clients and collectors are saying about my work and collaborative process
          </p>
        </div>
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm h-full flex flex-col">
                    <div className="flex-1">
                      <div className="text-indigo-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.content}"</p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <Avatar className="h-10 w-10 border border-indigo-100">
                        <AvatarImage src="" alt={testimonial.name} />
                        <AvatarFallback className="bg-indigo-100 text-indigo-800">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
