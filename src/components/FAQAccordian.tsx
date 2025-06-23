import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "When should we apply?",
      answer: "We recommend applying as early as possible as some grades fill quickly. Our priority application deadline is January 15 for the following academic year, but we accept applications on a rolling basis as space permits."
    },
    {
      question: "Is there an application fee?",
      answer: "Yes, there is a non-refundable application fee of $150 per student. This fee covers the cost of processing your application and scheduling assessments."
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, St. Michel's offers need-based financial aid to qualified families. The financial aid application process is separate from the admissions process. We encourage families to apply for aid at the same time they submit their application for admission."
    },
    {
      question: "What are the class sizes?",
      answer: "We maintain small class sizes to ensure personalized attention. Our average class size is 18 students, with a maximum of 22 students per class depending on the grade level."
    },
    {
      question: "How do you make admissions decisions?",
      answer: "Our admissions committee reviews each application holistically, considering academic records, assessment results, recommendations, interviews, and the student's potential fit with our school community. We seek students who will thrive in our challenging academic environment and contribute positively to school life."
    },
    {
      question: "Do you have a waitlist?",
      answer: "Yes, when a grade level reaches capacity, qualified applicants may be placed on a waitlist. If a space becomes available, we will contact waitlisted families in the order determined by the admissions committee."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our admissions process</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}