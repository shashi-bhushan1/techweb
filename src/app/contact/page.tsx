import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <ContactHeader />
        
        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
