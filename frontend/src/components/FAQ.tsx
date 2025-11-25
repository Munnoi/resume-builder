import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Is Kesume completely free?",
    answer:
      "Yes! Kesume is fully open source with no paywalls, subscriptions, or hidden fees.",
  },
  {
    question: "Do you store my resume data?",
    answer:
      "No. Everything is stored locally in your browser. Your resume stays on your device.",
  },
  {
    question: "Can I download my resume as a PDF?",
    answer: "Absolutely! PDF export is instant and works with every template.",
  },
  {
    question: "Is Kesume ATS-friendly?",
    answer:
      "Yes — every template is optimized to work with Applicant Tracking Systems.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Soft blobs */}
      <div className="absolute top-16 right-16 w-40 h-40 bg-primary/10 blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main text-center mb-12 animate-slide-up">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* Question Row */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>

                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
