import React, { useEffect } from "react";
import FAQAccordion from "../components/FAQAccordian";
import Calendar from "../components/Calendar";

const timelineItems = [
  {
    title: "1. Inquiry",
    description:
      "Begin your journey by submitting an inquiry form or contacting our admissions office. We'll provide information about our programs and answer your initial questions.",
    items: [
      "Basic contact information",
      "Student's grade level of interest",
      "Preferred start date",
    ],
    side: "left",
    label: "What You Need:",
  },
  {
    title: "2. Application",
    description:
      "Submit a formal application along with the required documents. Our admissions team will review your application to ensure it's complete.",
    items: [
      "Completed application form",
      "Application fee",
      "Student's academic records",
      "Teacher recommendations",
    ],
    side: "right",
    label: "What You Need:",
  },
  {
    title: "3. Assessment",
    description:
      "Students will complete grade-appropriate assessments to help us understand their academic strengths and areas for growth. This ensures proper placement in our programs.",
    items: [
      "Grade-level assessment in core subjects",
      "Approximately 1-2 hours depending on grade",
      "No special preparation required",
    ],
    side: "left",
    label: "What to Expect:",
  },
  {
    title: "4. Campus Visit",
    description:
      "Schedule a visit to tour our campus, meet with faculty, and experience our learning environment. This is also an opportunity for an in-person interview.",
    items: [
      "Tour of campus facilities",
      "Meeting with administrators and faculty",
      "Student interview (for older students)",
      "Parent interview",
    ],
    side: "right",
    label: "What to Expect:",
  },
  {
    title: "5. Decision & Enrollment",
    description:
      "After reviewing all components of your application, we will notify you of our admission decision. Upon acceptance, you'll receive enrollment information to secure your place.",
    items: [
      "Complete enrollment contract",
      "Pay enrollment deposit",
      "Submit health forms and final records",
      "Attend new student orientation",
    ],
    side: "left",
    label: "Next Steps:",
  },
];

const AdmissionsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Admissions | St. Michel's";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Admissions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join our community of learners and begin your journey at St.
            Michel's
          </p>
        </div>
      </section>

      {/* Admissions Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Welcome to St. Michel's Admissions
            </h2>
            <p className="text-gray-700 mb-8">
              Thank you for your interest in St. Michel's. We are committed to
              providing an exceptional educational experience that nurtures
              intellectual curiosity, character development, and a love of
              learning. Our admissions process is designed to identify students
              who will thrive in our challenging and supportive environment.
            </p>
            <div className="flex justify-center">
              <a href="#apply" className="btn-primary mr-4">
                Apply Now
              </a>
              <a href="#process" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section id="process" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Admissions Process</h2>
            <p>A step-by-step guide to joining the ST. Michel's family</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>

              <div className="space-y-20 relative">
                {timelineItems.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step Indicator */}
                    <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent border-4 border-white items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>

                    {/* Line connecting steps */}
                    {index !== 0 && (
                      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0" />
                    )}

                    <div className="md:flex md:items-center mt-12 md:mt-0">
                      {/* Text Section */}
                      <div
                        className={`md:w-1/2 px-4 ${
                          step.side === "left"
                            ? "md:pr-12 md:text-right"
                            : "md:pl-12 md:order-2"
                        }`}
                      >
                        <h3 className="text-2xl font-bold text-primary-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>

                      {/* Spacer for mobile step indicator */}
                      <div className="h-14 md:hidden" />

                      {/* Card Section */}
                      <div
                        className={`md:w-1/2 px-4 mt-6 md:mt-0 ${
                          step.side === "left"
                            ? "md:pl-12"
                            : "md:pr-12 md:order-1"
                        }`}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h4 className="font-semibold mb-2">{step.label}</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {step.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Admission Requirements</h2>
            <p>What we look for in prospective students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-4">Early Years Education</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>Baby Day Care</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>Baby Class</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>LKG & UKG</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>
                    Nurturing through play, storytelling, and basic
                    literacy/numeracy activities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>
                    Dedicated Nursery Play Area for motor skill development and
                    joyful learning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>Parent interview</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-4">
                Primary to High School (1-10)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>Completed application form</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>
                    State syllabus with a focus on academic foundation and
                    co-curricular development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>
                    Spacious and well-ventilated classrooms with digital
                    learning aids
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                  <span>
                    Regular assessments, activity-based learning, and individual
                    attention
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Tuition & Fees</h2>
            <p>Investment in your child's future</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-900 text-white px-6 py-4">
                <h3 className="text-xl font-bold">2025-2026 Academic Year</h3>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 font-semibold">Grade Level</th>
                        <th className="py-3 px-4 font-semibold">
                          Annual Tuition
                        </th>
                        <th className="py-3 px-4 font-semibold">
                          Application Fee
                        </th>
                        <th className="py-3 px-4 font-semibold">
                          Enrollment Deposit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Kindergarten</td>
                        <td className="py-3 px-4">$18,500</td>
                        <td className="py-3 px-4">$150</td>
                        <td className="py-3 px-4">$1,500</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Grades 1-5</td>
                        <td className="py-3 px-4">$20,500</td>
                        <td className="py-3 px-4">$150</td>
                        <td className="py-3 px-4">$1,500</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Grades 6-8</td>
                        <td className="py-3 px-4">$22,800</td>
                        <td className="py-3 px-4">$150</td>
                        <td className="py-3 px-4">$2,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Grades 9-12</td>
                        <td className="py-3 px-4">$25,600</td>
                        <td className="py-3 px-4">$150</td>
                        <td className="py-3 px-4">$2,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 space-y-4 text-gray-700">
                  <h4 className="font-semibold">Additional Fees</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>
                        <strong>Technology Fee:</strong> $500 per year (includes
                        device program for grades 6-12)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>
                        <strong>Activity Fee:</strong> $350 per year (covers
                        field trips, special events, and materials)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>
                        <strong>New Student Fee:</strong> $750 (one-time fee for
                        new students)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Payment Plans</h4>
                  <p className="text-gray-700 mb-4">
                    St. Michel's offers flexible payment options to accommodate
                    families' financial planning:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>
                        <strong>Annual Plan:</strong> Full payment due by August
                        1 (2% discount)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>
                        <strong>Semester Plan:</strong> Two payments due August
                        1 and January 1
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>
                        <strong>Monthly Plan:</strong> Ten monthly payments
                        (August-May)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Financial Aid</h4>
                  <p className="text-gray-700">
                    St. Michel's is committed to making quality education
                    accessible. Limited financial aid is available based on
                    demonstrated need. Please contact our admissions office for
                    more information about our financial aid application
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Academic Calendar</h2>
          </div>

          <div className="text-center">
            <Calendar />
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section id="apply" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Apply Now</h2>
            <p>Begin your journey at St. Michel's</p>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="studentName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Student's Full Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter student's name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="birthdate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gradeLevel"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Applying for Grade
                  </label>
                  <select
                    id="gradeLevel"
                    name="gradeLevel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select grade level</option>
                    <option value="K">Kindergarten</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="schoolYear"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Academic Year
                  </label>
                  <select
                    id="schoolYear"
                    name="schoolYear"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="2025-2026">2025-2026</option>
                    <option value="2026-2027">2026-2027</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter parent/guardian name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentSchool"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Current School
                  </label>
                  <input
                    type="text"
                    id="currentSchool"
                    name="currentSchool"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter current school"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Please share any additional information that might be helpful for your application"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I understand that this is an initial inquiry form and that a
                  formal application will be required to complete the admissions
                  process.
                </label>
              </div>

              <div>
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />
      {/* <section className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our admissions process</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">When should we apply?</h3>
              <p className="text-gray-700">
                We recommend applying as early as possible as some grades fill quickly. Our priority application deadline is January 15 for the following academic year, but we accept applications on a rolling basis as space permits.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Is there an application fee?</h3>
              <p className="text-gray-700">
                Yes, there is a non-refundable application fee of $150 per student. This fee covers the cost of processing your application and scheduling assessments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do you offer financial aid?</h3>
              <p className="text-gray-700">
                Yes, St. Michel's offers need-based financial aid to qualified families. The financial aid application process is separate from the admissions process. We encourage families to apply for aid at the same time they submit their application for admission.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What are the class sizes?</h3>
              <p className="text-gray-700">
                We maintain small class sizes to ensure personalized attention. Our average class size is 18 students, with a maximum of 22 students per class depending on the grade level.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do you make admissions decisions?</h3>
              <p className="text-gray-700">
                Our admissions committee reviews each application holistically, considering academic records, assessment results, recommendations, interviews, and the student's potential fit with our school community. We seek students who will thrive in our challenging academic environment and contribute positively to school life.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do you have a waitlist?</h3>
              <p className="text-gray-700">
                Yes, when a grade level reaches capacity, qualified applicants may be placed on a waitlist. If a space becomes available, we will contact waitlisted families in the order determined by the admissions committee.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AdmissionsPage;
