
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Home/Hero";
import FeaturedWorks from "@/components/Home/FeaturedWorks";
import Testimonials from "@/components/Home/Testimonials";
import CTASection from "@/components/Home/CTASection";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturedWorks />
      <Testimonials />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
