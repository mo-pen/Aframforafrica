import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Wifi, 
  Code, 
  Database,
  Cpu,
  Globe,
  Zap,
  TrendingUp,
  Users,
  Award,
  Play,
  BookOpen,
  Rocket,
  Brain,
  Shield
} from 'lucide-react';

const Technology = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'expert', name: 'Expert' }
  ];

  const techContent = [
    {
      id: 1,
      level: 'beginner',
      title: 'Introduction to Mobile Technology',
      description: 'Understanding smartphones, apps, and mobile internet in the African context',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '30 min',
      category: 'Mobile Tech',
      topics: ['Smartphones', 'Mobile Apps', 'Internet Basics', 'Digital Literacy'],
      quizQuestions: 10,
      projects: 2,
      icon: Smartphone
    },
    {
      id: 2,
      level: 'intermediate',
      title: 'Web Development Fundamentals',
      description: 'Build websites and web applications using HTML, CSS, and JavaScript',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '120 min',
      category: 'Web Development',
      topics: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      quizQuestions: 25,
      projects: 5,
      icon: Code
    },
    {
      id: 3,
      level: 'advanced',
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Explore AI applications and machine learning for African solutions',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '180 min',
      category: 'AI/ML',
      topics: ['Machine Learning', 'Neural Networks', 'Data Science', 'Python'],
      quizQuestions: 30,
      projects: 8,
      icon: Brain
    },
    {
      id: 4,
      level: 'intermediate',
      title: 'Database Management Systems',
      description: 'Learn to design, create, and manage databases for business applications',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '90 min',
      category: 'Database',
      topics: ['SQL', 'Database Design', 'Data Modeling', 'MySQL'],
      quizQuestions: 20,
      projects: 4,
      icon: Database
    },
    {
      id: 5,
      level: 'expert',
      title: 'Cybersecurity for African Businesses',
      description: 'Protect digital assets and implement security best practices',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '150 min',
      category: 'Security',
      topics: ['Network Security', 'Encryption', 'Risk Assessment', 'Compliance'],
      quizQuestions: 35,
      projects: 6,
      icon: Shield
    },
    {
      id: 6,
      level: 'beginner',
      title: 'Digital Marketing & E-commerce',
      description: 'Build online presence and sell products through digital channels',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '60 min',
      category: 'Digital Marketing',
      topics: ['Social Media', 'SEO', 'E-commerce', 'Analytics'],
      quizQuestions: 15,
      projects: 3,
      icon: TrendingUp
    }
  ];

  const filteredContent = selectedLevel === 'all' 
    ? techContent 
    : techContent.filter(content => content.level === selectedLevel);

  const techStats = [
    { label: 'Mobile Penetration', value: '85%', icon: Smartphone, color: 'text-blue-600' },
    { label: 'Internet Users', value: '43%', icon: Globe, color: 'text-green-600' },
    { label: 'Tech Startups', value: '5,200+', icon: Rocket, color: 'text-purple-600' },
    { label: 'Digital Jobs', value: '2.1M', icon: Cpu, color: 'text-orange-600' }
  ];

  const techTrends = [
    {
      trend: 'Fintech Revolution',
      description: 'Mobile money and digital banking transforming financial inclusion',
      growth: '+45%',
      examples: ['M-Pesa', 'Flutterwave', 'Paystack']
    },
    {
      trend: 'AgriTech Innovation',
      description: 'Technology solutions for modern African agriculture',
      growth: '+38%',
      examples: ['Farm Management Apps', 'Drone Monitoring', 'IoT Sensors']
    },
    {
      trend: 'EdTech Expansion',
      description: 'Digital learning platforms reaching remote communities',
      growth: '+52%',
      examples: ['Online Courses', 'Mobile Learning', 'Virtual Classrooms']
    },
    {
      trend: 'HealthTech Growth',
      description: 'Telemedicine and digital health solutions',
      growth: '+41%',
      examples: ['Telemedicine', 'Health Apps', 'Digital Records']
    }
  ];

  return (
    <div className="pt-20 pb-4">
      {/* Header */}
      <section className="px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Technology in Africa
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Master cutting-edge technology skills and drive Africa's digital transformation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {techStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <stat.icon className="h-4 w-4 mr-1" />
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Trends */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
            African Tech Trends 2025
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {techTrends.map((trend, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{trend.trend}</h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                    {trend.growth}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{trend.description}</p>
                <div className="flex flex-wrap gap-2">
                  {trend.examples.map((example, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white text-gray-700 text-xs rounded-full">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Level Filter */}
      <section className="px-4 py-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedLevel === level.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Content */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={content.image}
                    alt={content.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {content.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <content.icon className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Play className="h-4 w-4 text-blue-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{content.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      content.level === 'beginner' ? 'bg-green-100 text-green-700' :
                      content.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      content.level === 'advanced' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {content.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{content.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{content.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{content.quizQuestions} quiz</span>
                    </div>
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 mr-1" />
                      <span>{content.projects} projects</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {content.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {topic}
                        </span>
                      ))}
                      {content.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{content.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Start Course
                    </button>
                    <Link
                      to={`/quiz/technology`}
                      className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      Quiz
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Skills Roadmap */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Technology Learning Roadmap
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-300"></div>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Digital Literacy</h3>
                    <p className="text-gray-600 text-sm">Basic computer skills, internet usage, digital communication</p>
                    <span className="text-xs text-green-600 font-medium">Beginner Level</span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full relative z-10 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full relative z-10 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Programming Basics</h3>
                    <p className="text-gray-600 text-sm">HTML, CSS, JavaScript fundamentals for web development</p>
                    <span className="text-xs text-yellow-600 font-medium">Intermediate Level</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Specialized Skills</h3>
                    <p className="text-gray-600 text-sm">Mobile development, databases, cloud computing</p>
                    <span className="text-xs text-orange-600 font-medium">Advanced Level</span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full relative z-10 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full relative z-10 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation & Leadership</h3>
                    <p className="text-gray-600 text-sm">AI/ML, cybersecurity, tech entrepreneurship</p>
                    <span className="text-xs text-red-600 font-medium">Expert Level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Shape Africa's Digital Future?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of African tech innovators building solutions for tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Start Your Tech Journey
            </Link>
            <Link
              to="/quiz/technology"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              <Brain className="h-5 w-5 mr-2" />
              Test Your Knowledge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;