
import MainLayout from "@/layouts/MainLayout";
import ContactForm from "@/components/Contact/ContactForm";
import CommissionInfo from "@/components/Contact/CommissionInfo";

const Contact = () => {
  return (
    <MainLayout>
      <ContactForm />
      <CommissionInfo />
    </MainLayout>
  );
};

export default Contact;
