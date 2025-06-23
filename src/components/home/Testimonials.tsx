import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emma Johnson',
    role: 'Parent',
    content: 'Brighton Academy has provided my child with an exceptional educational experience. The dedicated teachers and challenging curriculum have fostered a love of learning that extends beyond the classroom.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Alumni, Class of 2020',
    content: 'My years at Brighton Academy shaped me into the person I am today. The school\'s emphasis on both academic excellence and character development prepared me well for college and beyond.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '3',
    name: 'Sophia Rodriguez',
    role: 'Student, Grade 11',
    content: 'I\'ve found a supportive community at Brighton Academy that encourages me to pursue my passions. The teachers truly care about our success and provide personalized guidance to help us reach our goals.',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 rounded-full bg-accent/5 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-primary-100/10 -bottom-40 -right-40"></div>
      </div>

      <div className="container relative">
        <div className="section-title">
          <h2>What People Say About Us</h2>
          <p>Hear from our community of students, parents, and alumni</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative py-10">
            <Quote size={60} className="absolute text-accent/20 top-0 left-0 transform -translate-x-1/4 -translate-y-1/4" />
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`transition-opacity duration-700 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
              >
                <div className="text-center">
                  <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mb-3"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-accent w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;