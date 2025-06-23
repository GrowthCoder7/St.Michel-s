import React, { useEffect } from 'react';
import { MapPin, Users, Book, Clock } from 'lucide-react';

// Placeholder for more components to be added as needed

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | ST. MICHEL’S ENGLISH SCHOOL';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About ST. Michel's English School</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Learn about our history, mission, and the values that drive our educational excellence
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg animate-slide-up">
              <Clock size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">35+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Users size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">1,200+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Book size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">120+</h3>
              <p className="text-gray-600">Dedicated Faculty</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <MapPin size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">25</h3>
              <p className="text-gray-600">Acres Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Mission Section */}
      <section id="history" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  St. Michel’s English School, established in 1981 and run under the Devi Education Society®, is one of the most reputed State Board institutions in Kanakapura. With a legacy of excellence in education, we provide a safe, nurturing, and holistic learning environment from Baby Day Care to Class 10, adhering to the State Syllabus.
                </p>
              
              </div>
            </div>
            <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="St. Michel's historic building" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded shadow">
                <p className="text-sm font-medium">Est. 1981</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md animate-slide-up">
              <h3 className="text-2xl font-bold mb-4 text-primary-900">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                St. Michel's is dedicated to providing a comprehensive, challenging education that fosters intellectual curiosity, character development, and social responsibility. We strive to create a supportive learning environment where students can discover their passions, develop their talents, and prepare for success in college and beyond.
              </p>
              <div className="border-l-4 border-accent pl-4 italic text-gray-600">
                "We educate the whole person—mind, body, and spirit—preparing students to thrive in an ever-changing world."
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                We envision St. Michel's as a beacon of educational excellence where students from diverse backgrounds come together to learn, grow, and prepare to make meaningful contributions to society. Our graduates will be known not only for their academic achievements but also for their integrity, leadership, and commitment to serving others.
              </p>
              <div className="border-l-4 border-accent pl-4 italic text-gray-600">
                "To be recognized globally as a school that nurtures future leaders who combine academic excellence with moral purpose."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This is a placeholder for the Leadership section */}
      <section id="leadership" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Our Leadership</h2>
            <p>Meet the dedicated professionals guiding St. Michel's</p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-500">Leadership team content will be added here.</p>
          </div>
        </div>
      </section>

      {/* This is a placeholder for the Facilities section */}
      
    </div>
  );
};

export default AboutPage;