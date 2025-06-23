import React, { useState, useEffect } from 'react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/8363143/pexels-photo-8363143.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Campus Life',
    title: 'Student Activities',
    description: 'Students engaging in various activities around campus.'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/5211446/pexels-photo-5211446.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Academics',
    title: 'Science Laboratory',
    description: 'Students conducting experiments in our state-of-the-art science lab.'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/8363101/pexels-photo-8363101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Sports',
    title: 'Athletics Program',
    description: 'Our student athletes competing in various sports events.'
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Arts',
    title: 'Creative Expression',
    description: 'Students expressing themselves through various artistic mediums.'
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/5905502/pexels-photo-5905502.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Events',
    title: 'School Celebrations',
    description: 'Special events and celebrations throughout the school year.'
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Campus Life',
    title: 'Library Resources',
    description: 'Our well-stocked library provides resources for research and reading.'
  },
  {
    id: '7',
    image: 'https://images.pexels.com/photos/8364891/pexels-photo-8364891.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Academics',
    title: 'Classroom Engagement',
    description: 'Interactive learning in our engaging classroom environments.'
  },
  {
    id: '8',
    image: 'https://images.pexels.com/photos/8364884/pexels-photo-8364884.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Arts',
    title: 'Music Program',
    description: 'Students developing their musical talents in our comprehensive music program.'
  },
  {
    id: '9',
    image: 'https://images.pexels.com/photos/8365108/pexels-photo-8365108.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Campus Life',
    title: 'Outdoor Learning',
    description: 'Students enjoying our beautiful campus during outdoor learning activities.'
  },
  {
    id: '10',
    image: 'https://images.pexels.com/photos/8363144/pexels-photo-8363144.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Events',
    title: 'Graduation Ceremony',
    description: 'Celebrating our seniors during the annual graduation ceremony.'
  },
  {
    id: '11',
    image: 'https://images.pexels.com/photos/8364888/pexels-photo-8364888.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Sports',
    title: 'Physical Education',
    description: 'Students participating in physical education activities.'
  },
  {
    id: '12',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Academics',
    title: 'Debate Club',
    description: 'Students developing public speaking and critical thinking skills in Debate Club.'
  },
];

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const categories = ['All', 'Campus Life', 'Academics', 'Sports', 'Arts', 'Events'];

  useEffect(() => {
    document.title = 'Gallery | Brighton Academy';
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Photo Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A visual journey through life at Brighton Academy
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-white">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-primary-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedItem(item)}
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

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full max-h-screen" onClick={e => e.stopPropagation()}>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full max-h-[70vh] object-contain"
                />
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:text-primary-900 transition-colors"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-primary-900">{selectedItem.title}</h3>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-gray-700">{selectedItem.description}</p>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 flex justify-between">
                <button 
                  className="text-gray-600 hover:text-primary-900 transition-colors"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
                    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                    setSelectedItem(filteredItems[prevIndex]);
                  }}
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <span className="text-sm text-gray-500">
                  {filteredItems.findIndex(item => item.id === selectedItem.id) + 1} of {filteredItems.length}
                </span>
                
                <button 
                  className="text-gray-600 hover:text-primary-900 transition-colors"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
                    const nextIndex = (currentIndex + 1) % filteredItems.length;
                    setSelectedItem(filteredItems[nextIndex]);
                  }}
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;