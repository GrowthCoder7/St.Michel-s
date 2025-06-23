import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GalleryItem } from '../../types';

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/8363143/pexels-photo-8363143.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Campus Life',
    title: 'Student Activities',
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/5211446/pexels-photo-5211446.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Academics',
    title: 'Science Laboratory',
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/8363101/pexels-photo-8363101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Sports',
    title: 'Athletics Program',
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Arts',
    title: 'Creative Expression',
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/5905502/pexels-photo-5905502.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Events',
    title: 'School Celebrations',
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Campus Life',
    title: 'Library Resources',
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Our School Gallery</h2>
          <p>Take a visual journey through life at Brighton Academy</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-lg shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-semibold text-white mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-outline inline-flex items-center">
            View Full Gallery
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;