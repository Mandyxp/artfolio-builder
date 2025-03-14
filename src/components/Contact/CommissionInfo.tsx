
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommissionInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Commission Process</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Interested in commissioning a custom piece? Here's how the process works.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium">
                Initial Consultation
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We'll begin with a detailed discussion about your vision, preferences, space considerations, 
                and budget. This can take place via email, phone, or video call. The goal is to understand 
                exactly what you're looking for and how I can create something that exceeds your expectations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                Proposal and Concept Sketches
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Based on our consultation, I'll provide a detailed proposal outlining the concept, 
                materials, dimensions, timeline, and cost. I'll also create preliminary sketches or 
                digital mockups to give you a visual idea of the final piece. We'll collaborate until 
                the concept aligns perfectly with your vision.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium">
                Contract and Deposit
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Once we've agreed on the concept and details, I'll send a commission contract outlining 
                all specifications, timeline, payment schedule, and policies. A non-refundable deposit 
                (typically 50% of the total cost) is required to secure your place in my commission schedule 
                and begin work.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium">
                Creation Process and Updates
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                I'll begin creating your piece according to the agreed timeline. Throughout the process, 
                I'll share progress updates and images at key stages. This gives you the opportunity to 
                provide feedback and ensures the piece is developing according to your expectations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-medium">
                Completion and Delivery
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Upon completion, I'll send final images for your approval. Once approved, the remaining 
                balance is due before delivery or shipping. Depending on the size and nature of the piece, 
                we'll arrange for secure shipping, delivery, or installation as needed. Each piece comes 
                with a certificate of authenticity and care instructions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to get started?</h3>
            <p className="text-gray-600 mb-6">
              Reach out through the contact form above to begin discussing your custom artwork.
            </p>
            <p className="text-sm text-gray-500">
              *Please note that commission wait times vary depending on current workload, 
              typically ranging from 4-12 weeks. For time-sensitive projects, please mention 
              your deadline in your initial inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionInfo;
