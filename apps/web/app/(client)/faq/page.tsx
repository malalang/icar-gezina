import Link from 'next/link';
import { HelpCircle, Car, ShieldCheck, Banknote } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you offer financing options?",
      answer: "Yes, we work with all major banks and financial institutions to offer competitive financing rates. Our finance team will assist you in finding the best plan that fits your budget.",
      icon: <Banknote className="w-5 h-5 text-blue-500" />
    },
    {
      question: "Are your vehicles inspected before sale?",
      answer: "Absolutely. Every vehicle in our inventory undergoes a rigorous 116-point inspection by our certified mechanics. We ensure every car meets our strict quality and safety standards before it reaches the showroom.",
      icon: <ShieldCheck className="w-5 h-5 text-green-500" />
    },
    {
      question: "Can I trade in my current vehicle?",
      answer: "Yes! We offer highly competitive trade-in valuations. Simply bring your car in for a quick appraisal, or fill out our online Contact form with your vehicle details to get a preliminary estimate.",
      icon: <Car className="w-5 h-5 text-yellow-500" />
    },
    {
      question: "Do you offer warranties?",
      answer: "We offer various extended warranty options ranging from 1 to 2 years, covering major mechanical and electrical components. Our sales team can guide you through the available packages for your specific vehicle.",
      icon: <HelpCircle className="w-5 h-5 text-purple-500" />
    },
    {
      question: "How do I book a test drive?",
      answer: "You can book a test drive directly from any vehicle's detail page. Just click the 'Book a Test Drive' button, select your preferred date, and submit your details. Our team will verify and confirm your appointment.",
      icon: <Car className="w-5 h-5 text-blue-500" />
    },
    {
      question: "Do you deliver vehicles nationwide?",
      answer: "Yes, we offer nationwide delivery across South Africa. Delivery fees are calculated based on your location. Please speak with our sales advisors for an exact quote.",
      icon: <HelpCircle className="w-5 h-5 text-red-500" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold italic tracking-tight text-slate-900 uppercase">Frequently Asked <span className="text-blue-600">Questions</span></h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm">Find answers to common questions about buying a car, applying for finance, our inspection processes, and more.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 flex items-start gap-4 hover:shadow-md transition">
              <div className="p-3 bg-slate-50 rounded-lg shrink-0 border border-slate-100">
                {faq.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white border border-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold italic uppercase tracking-tight mb-4">Still have <span className="text-blue-500">questions?</span></h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help you with any inquiries you might have regarding our vehicles or services.</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold rounded-lg px-8 py-4 shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition uppercase tracking-widest text-xs">
            Contact Us Now
          </Link>
        </div>

      </div>
    </div>
  );
}
