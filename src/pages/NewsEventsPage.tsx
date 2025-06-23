import React, { useState, useEffect } from 'react';
import { Calendar, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { NewsItem, Event } from '../types';

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'St. Michel\'s Wins National Science Competition',
    date: 'May 15, 2025',
    excerpt: 'Our students brought home the first place trophy in the National Science Olympiad, showcasing exceptional talent and dedication.',
    category: 'Achievement',
    image: 'https://images.pexels.com/photos/8197559/pexels-photo-8197559.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '2',
    title: 'New Arts Center Opening This Fall',
    date: 'April 30, 2025',
    excerpt: 'We\'re excited to announce the opening of our state-of-the-art performing arts center, enhancing our vibrant arts program.',
    category: 'Facilities',
    image: 'https://images.pexels.com/photos/6147076/pexels-photo-6147076.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '3',
    title: 'Annual Sports Day Scheduled for June',
    date: 'April 22, 2025',
    excerpt: 'Mark your calendars for our Annual Sports Day, featuring exciting competitions and activities for all grade levels.',
    category: 'Events',
    image: 'https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '4',
    title: 'Brighton Students Excel in Mathematics Competition',
    date: 'April 15, 2025',
    excerpt: 'Our mathematics team secured top positions in the Regional Mathematics Competition, demonstrating exceptional problem-solving skills.',
    category: 'Achievement',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '5',
    title: 'Parent-Teacher Conference Week Approaching',
    date: 'April 10, 2025',
    excerpt: 'Join us for our spring Parent-Teacher Conferences to discuss your child\'s progress and plans for the upcoming academic year.',
    category: 'Announcements',
    image: 'https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '6',
    title: 'Summer Programs Registration Now Open',
    date: 'April 5, 2025',
    excerpt: 'Explore our diverse summer enrichment programs designed to engage students in academic, athletic, and creative pursuits during the break.',
    category: 'Announcements',
    image: 'https://images.pexels.com/photos/8364153/pexels-photo-8364153.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '7',
    title: 'St. Michel\'s Hosts International Exchange Students',
    date: 'March 28, 2025',
    excerpt: 'We welcomed exchange students from three countries this month, enriching our school community with diverse perspectives and cultures.',
    category: 'Campus Life',
    image: 'https://images.pexels.com/photos/5905510/pexels-photo-5905510.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '8',
    title: 'Theater Department Announces Spring Production',
    date: 'March 20, 2025',
    excerpt: 'Our talented drama students will present "A Midsummer Night\'s Dream" this May. Tickets will be available starting next month.',
    category: 'Arts',
    image: 'https://images.pexels.com/photos/6122033/pexels-photo-6122033.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Parent-Teacher Conferences',
    date: 'May 2-3, 2025',
    time: '3:00 PM - 7:00 PM',
    location: 'All Classrooms',
    description: 'Schedule appointments to meet with your child\'s teachers and discuss academic progress.'
  },
  {
    id: '2',
    title: 'Spring Concert',
    date: 'May 12, 2025',
    time: '7:00 PM',
    location: 'Auditorium',
    description: 'Join us for an evening of music featuring performances by our band, orchestra, and choir.'
  },
  {
    id: '3',
    title: 'Science Fair',
    date: 'May 18, 2025',
    time: '9:00 AM - 2:00 PM',
    location: 'Gymnasium',
    description: 'Students will present their research projects and scientific investigations.'
  },
  {
    id: '4',
    title: 'Annual Sports Day',
    date: 'June 5, 2025',
    time: '10:00 AM - 3:00 PM',
    location: 'Sports Fields',
    description: 'A day of athletic competitions and activities for all grade levels.'
  },
  {
    id: '5',
    title: 'Graduation Ceremony',
    date: 'June 15, 2025',
    time: '5:00 PM',
    location: 'Main Quad',
    description: 'Celebrating our graduating seniors as they prepare for their next chapter.'
  }
];

const NewsEventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const itemsPerPage = 6;
  
  const categories = ['All', 'Achievement', 'Events', 'Announcements', 'Facilities', 'Campus Life', 'Arts'];

  useEffect(() => {
    document.title = 'News & Events | St. Michel\'s';
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredNews(newsItems);
    } else {
      setFilteredNews(newsItems.filter(item => item.category === activeCategory));
    }
    setCurrentPage(1);
  }, [activeCategory]);

  const toggleEvent = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">News & Events</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest news and upcoming events at St. Michel's
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-8 py-3 text-sm font-medium rounded-l-md ${
                  activeTab === 'news' 
                    ? 'bg-primary-900 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                News & Announcements
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-8 py-3 text-sm font-medium rounded-r-md ${
                  activeTab === 'events' 
                    ? 'bg-primary-900 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      {activeTab === 'news' && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="flex flex-wrap justify-center mb-10 gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {currentItems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      id={item.id}
                      className="card group animate-slide-up" 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-accent text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <Calendar size={14} className="mr-1" />
                          {item.date}
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-700 transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {item.excerpt}
                        </p>
                        
                        <button className="inline-flex items-center text-primary-700 font-medium hover:text-primary-900 transition-colors">
                          Read more
                          <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-md ${
                          currentPage === 1 
                            ? 'text-gray-400 cursor-not-allowed' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-label="Previous page"
                      >
                        <ArrowLeft size={16} />
                      </button>
                      
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={`w-10 h-10 rounded-md ${
                            currentPage === index + 1
                              ? 'bg-primary-900 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-md ${
                          currentPage === totalPages 
                            ? 'text-gray-400 cursor-not-allowed' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-label="Next page"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No news found for this category.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Events Content */}
      {activeTab === 'events' && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div 
                      key={event.id} 
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        className="w-full text-left"
                        onClick={() => toggleEvent(event.id)}
                      >
                        <div className="p-6 flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <div className="text-gray-600 mt-1">{event.date}</div>
                          </div>
                          <ChevronDown
                            size={20}
                            className={`transform transition-transform duration-300 ${
                              expandedEvent === event.id ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>
                      
                      <div
                        className={`transition-all duration-300 ${
                          expandedEvent === event.id ? 'max-h-96' : 'max-h-0'
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="text-sm font-medium text-gray-500">Time</div>
                              <div className="text-gray-900">{event.time}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-500">Location</div>
                              <div className="text-gray-900">{event.location}</div>
                            </div>
                          </div>
                          <p className="text-gray-700">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                  <div className="bg-primary-900 text-white p-4">
                    <h3 className="text-xl font-bold">Academic Calendar</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold mb-4">Upcoming Important Dates</h4>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          MAY 2-3
                        </div>
                        <div>
                          <p className="font-medium">Parent-Teacher Conferences</p>
                          <p className="text-sm text-gray-600">3:00 PM - 7:00 PM</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          MAY 12
                        </div>
                        <div>
                          <p className="font-medium">Spring Concert</p>
                          <p className="text-sm text-gray-600">7:00 PM</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          MAY 18
                        </div>
                        <div>
                          <p className="font-medium">Science Fair</p>
                          <p className="text-sm text-gray-600">9:00 AM - 2:00 PM</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          MAY 25-27
                        </div>
                        <div>
                          <p className="font-medium">Memorial Day Weekend</p>
                          <p className="text-sm text-gray-600">No School</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          JUN 5
                        </div>
                        <div>
                          <p className="font-medium">Annual Sports Day</p>
                          <p className="text-sm text-gray-600">10:00 AM - 3:00 PM</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          JUN 15
                        </div>
                        <div>
                          <p className="font-medium">Graduation Ceremony</p>
                          <p className="text-sm text-gray-600">5:00 PM</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          JUN 18
                        </div>
                        <div>
                          <p className="font-medium">Last Day of School</p>
                          <p className="text-sm text-gray-600">Early Dismissal at 12:00 PM</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="w-full btn-outline">
                        View Full Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsEventsPage;