import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Welcome: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5905507/pexels-photo-5905507.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Principal of St. Michel's" 
                className="rounded-lg shadow-xl max-w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-primary-900">Established in 1985</p>
                <p className="text-2xl font-bold text-primary-900">35+ Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome from the Principal</h2>
              
              <div className="mb-6 text-gray-700 space-y-4">
                <p>
                  Welcome to St. Michel's, where we foster a community of learning, growth, and achievement. For over 35 years, we have been dedicated to providing exceptional education that prepares students for success in college and beyond.
                </p>
                <p>
                  Our approach combines academic rigor with character development, ensuring that our graduates are not only knowledgeable but also compassionate and responsible citizens. Our dedicated faculty and staff create a supportive environment where students can discover their passions and develop their talents.
                </p>
                <p>
                  At St. Michel's, we believe that education extends beyond the classroom. Through our comprehensive programs in arts, athletics, and community service, we offer students diverse opportunities to explore their interests and build well-rounded skill sets.
                </p>
              </div>
              
              <div className="flex items-center mb-8">
                <img 
                  src="https://images.pexels.com/photos/5212686/pexels-photo-5212686.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Dr. Sarah Mitchell" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Dr. Sarah Mitchell</h4>
                  <p className="text-gray-600">Principal, St. Michel's</p>
                </div>
              </div>
              
              <Link to="/about" className="inline-flex items-center text-primary-700 font-medium hover:text-primary-900 transition-colors">
                Learn more about our school
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;