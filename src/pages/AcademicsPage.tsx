import React, { useEffect } from "react";

const AcademicsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Academics | St. Michel's";
  }, []);

  return (
    <div className="w-[110vw] md:w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Academics
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our rigorous curriculum and innovative approach to
            education
          </p>
        </div>
      </section>

      {/* Academics Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Academic Excellence</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At St. Michel's, we foster a learning environment that
                  encourages intellectual curiosity, critical thinking, and
                  academic excellence. Our comprehensive curriculum is designed
                  to challenge students at every level while providing the
                  support they need to succeed.
                </p>
                <p>
                  Our academic program is built on a strong foundation in core
                  subjects including mathematics, science, language arts, social
                  studies, and foreign languages. We complement these with
                  enriching experiences in the arts, physical education, and
                  technology.
                </p>
                <p>
                  With small class sizes and dedicated faculty, we provide
                  personalized attention that allows each student to develop
                  their unique talents and interests. Our teachers are not just
                  instructors but mentors who guide students on their
                  educational journey.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img
                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-accent p-3 rounded-lg shadow-lg">
                <p className="text-lg font-bold text-primary-900">8:1</p>
                <p className="text-sm font-medium text-primary-900">
                  Student-Teacher Ratio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Curriculum</h2>
            <p>Comprehensive education across all grade levels</p>
          </div>

          <div className="space-y-12">
            {/* Elementary School */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary-900">
                  Elementary School (K-5)
                </h3>
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                  Building a Strong Foundation
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                Our elementary program nurtures young minds through engaging,
                hands-on learning experiences. We focus on developing
                fundamental skills while fostering a love of learning that will
                last a lifetime.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">Language Arts</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Phonics and reading foundations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Comprehensive reading program</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Writing across genres</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Grammar and vocabulary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Public speaking</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">Mathematics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Number sense and operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Algebraic thinking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Geometry and measurement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Data analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Problem-solving strategies</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">Science</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Life sciences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Earth and space sciences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Physical sciences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Engineering and technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Hands-on experiments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle School */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary-900">
                  Middle School (6-8)
                </h3>
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                  Developing Critical Thinkers
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                Our middle school program bridges the elementary and high school
                years, providing students with increasing independence while
                maintaining necessary guidance. We focus on developing critical
                thinking skills and preparing students for more advanced
                coursework.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">English</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Literature analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Expository and creative writing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Research skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Vocabulary development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Public speaking and debate</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">Mathematics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Pre-Algebra</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Algebra I</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Geometry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Advanced math for qualified students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Math competitions</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">Science</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Life Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Earth Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Physical Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Laboratory skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Science fair projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary-900">
                  High School (9-12)
                </h3>
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                  Preparing for College and Beyond
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                Our high school program prepares students for success in college
                and beyond. We offer a rigorous college preparatory curriculum
                with a wide range of courses, including honors and Advanced
                Placement options. Our comprehensive approach ensures students
                develop the knowledge, skills, and character needed for future
                success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">English</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>World Literature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>American Literature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>British Literature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>AP English Language</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>AP English Literature</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">Mathematics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Algebra II</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Precalculus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>AP Calculus AB & BC</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>AP Statistics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Computer Science</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-3">Science</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Biology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Chemistry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Physics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>AP Biology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>AP Chemistry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>AP Physics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>Environmental Science</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This is a placeholder for Programs Section */}
      <section id="programs" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Special Programs</h2>
            <p>
              Enriching educational opportunities beyond the core curriculum
            </p>
          </div>

          <div className="text-center py-12">
            <p className="text-gray-500">
              Special programs content will be added here.
            </p>
          </div>
        </div>
      </section>

      {/* This is a placeholder for Calendar Section */}
      {/* <section id="calendar" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Academic Calendar</h2>
            <p>Important dates for the school year</p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-500">Academic calendar content will be added here.</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AcademicsPage;
