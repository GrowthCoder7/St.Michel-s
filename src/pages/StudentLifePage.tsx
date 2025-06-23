import React, { useEffect } from 'react';

const StudentLifePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Student Life | Brighton Academy';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Student Life</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover the vibrant community and activities that make Brighton Academy special
          </p>
        </div>
      </section>

      {/* Student Life Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">A Well-Rounded Experience</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At Brighton Academy, we believe that education extends beyond the classroom. Our robust student life program provides opportunities for students to explore their interests, develop their talents, and build lasting friendships.
                </p>
                <p>
                  From arts and athletics to clubs and community service, we offer a wide range of extracurricular activities that complement our academic program. These experiences help students develop important life skills such as leadership, teamwork, and time management.
                </p>
                <p>
                  Our supportive community encourages students to try new things, take healthy risks, and discover their passions. Through these experiences, students develop confidence, resilience, and a sense of belonging.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/8363115/pexels-photo-8363115.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Students in art class" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/8364898/pexels-photo-8364898.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Students in science lab" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/8363110/pexels-photo-8363110.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Students playing basketball" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/8364885/pexels-photo-8364885.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Students in music class" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section id="clubs" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Clubs & Activities</h2>
            <p>Discover your passions and develop new skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Debate Club" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Debate Club</h3>
                <p className="text-gray-700 mb-4">
                  Students develop public speaking skills, critical thinking, and persuasive argument techniques while competing in local and regional tournaments.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full mr-2">Grades 6-12</span>
                  <span>Meets Tuesdays</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Robotics Club" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Robotics Club</h3>
                <p className="text-gray-700 mb-4">
                  Students design, build, and program robots for competition while developing skills in engineering, programming, and teamwork.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full mr-2">Grades 7-12</span>
                  <span>Meets Thursdays</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/7713142/pexels-photo-7713142.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Environmental Club" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Environmental Club</h3>
                <p className="text-gray-700 mb-4">
                  Students promote environmental awareness and sustainability through campus initiatives, community service, and educational projects.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full mr-2">All Grades</span>
                  <span>Meets Wednesdays</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Student Government" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Student Government</h3>
                <p className="text-gray-700 mb-4">
                  Elected representatives plan school events, address student concerns, and develop leadership skills through hands-on experience.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full mr-2">Grades 6-12</span>
                  <span>Meets Mondays</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4050362/pexels-photo-4050362.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Creative Writing Club" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Creative Writing Club</h3>
                <p className="text-gray-700 mb-4">
                  Students explore various writing styles, share their work, provide peer feedback, and collaborate on the school's literary magazine.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full mr-2">All Grades</span>
                  <span>Meets Fridays</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8364890/pexels-photo-8364890.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Model United Nations" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Model United Nations</h3>
                <p className="text-gray-700 mb-4">
                  Students research global issues, represent different countries, and practice diplomacy by participating in simulated UN conferences.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full mr-2">Grades 9-12</span>
                  <span>Meets Tuesdays</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              This is just a sampling of the many clubs and activities available at Brighton Academy. We also encourage students to propose new clubs based on their interests.
            </p>
            <a href="#" className="btn-outline">
              View All Clubs & Activities
            </a>
          </div>
        </div>
      </section>

      {/* Athletics */}
      <section id="sports" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Athletics</h2>
            <p>Building character, teamwork, and physical fitness</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Athletic Philosophy</h3>
                <p className="text-gray-700 mb-6">
                  Brighton Academy's athletic program is designed to complement our academic mission by promoting physical fitness, character development, and sportsmanship. We believe that participation in athletics teaches valuable life lessons such as teamwork, perseverance, and goal-setting.
                </p>
                <p className="text-gray-700 mb-6">
                  Our coaches are experienced educators who prioritize skill development, safety, and positive team culture. They inspire athletes to strive for excellence while maintaining perspective on the broader educational goals of our school.
                </p>
                <p className="text-gray-700">
                  We encourage participation at all levels, from recreational to competitive, and celebrate the effort and growth of each student-athlete. Our teams compete in local and regional leagues, with opportunities for advancement to state-level competitions.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-900 text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Fall Sports</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Soccer (Boys & Girls)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Cross Country</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Volleyball (Girls)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Tennis (Boys & Girls)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-900 text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Winter Sports</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Basketball (Boys & Girls)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Swimming</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Wrestling</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Indoor Track</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-900 text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Spring Sports</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Baseball</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Softball</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Track & Field</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Golf</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Lacrosse (Boys & Girls)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-900 text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Year-Round Activities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Fitness Training</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Intramural Sports</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Yoga & Mindfulness</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>Dance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8364888/pexels-photo-8364888.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Brighton Academy Athletics" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Athletic Facilities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">Modern gymnasium with basketball and volleyball courts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">Indoor swimming pool</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">Fitness center with cardio and strength equipment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">Regulation soccer and baseball fields</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">Tennis courts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">400-meter track</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-accent p-6 rounded-lg text-primary-900">
                  <h3 className="text-xl font-bold mb-3">Athletic Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-900 rounded-full mt-2 mr-2"></span>
                      <span>State Champions - Boys Soccer (2023, 2024)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-900 rounded-full mt-2 mr-2"></span>
                      <span>Regional Champions - Girls Basketball (2024)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-900 rounded-full mt-2 mr-2"></span>
                      <span>Conference Champions - Swimming (2022, 2023, 2024)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-900 rounded-full mt-2 mr-2"></span>
                      <span>State Finalist - Track & Field (2023)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This is a placeholder for Arts Section */}
      <section id="arts" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Arts & Creativity</h2>
            <p>Expressing imagination through visual and performing arts</p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-500">Arts section content will be added here.</p>
          </div>
        </div>
      </section>

      {/* This is a placeholder for Events Section */}
      <section id="events" className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Annual Events & Traditions</h2>
            <p>Celebrating our community throughout the school year</p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-500">Events section content will be added here.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLifePage;