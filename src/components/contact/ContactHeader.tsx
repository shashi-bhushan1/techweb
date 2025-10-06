import Heading from "@/components/ui/Heading";

export default function ContactHeader() {
  return (
    <div className="text-center mb-16">
      <Heading level={1} className="mb-6">Get in Touch</Heading>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        We&apos;d love to hear from you. Whether you have a question about our services, need technical support, or just want to say hello, our team is ready to assist you.
      </p>
    </div>
  );
}
