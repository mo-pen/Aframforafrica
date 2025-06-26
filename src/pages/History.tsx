import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Star, Play, Award, MapPin, Calendar } from 'lucide-react';

const History = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const periods = [
    { id: 'all', name: 'All Periods' },
    { id: 'ancient', name: 'Ancient Africa' },
    { id: 'medieval', name: 'Medieval Period' },
    { id: 'colonial', name: 'Colonial Era' },
    { id: 'modern', name: 'Modern Africa' }
  ];

  const historyContent = [
    {
      id: 1,
      period: 'ancient',
      title: 'Ancient Egyptian Civilization',
      description: 'Discover the magnificent civilization along the Nile River, from pharaohs to pyramids',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '45 min read',
      difficulty: 'Beginner',
      topics: ['Pharaohs', 'Pyramids', 'Hieroglyphics', 'Nile River'],
      quizQuestions: 15
    },
    {
      id: 2,
      period: 'ancient',
      title: 'Kingdom of Kush',
      description: 'Learn about the powerful Nubian kingdom that ruled over Egypt and Sudan',
      image: 'https://images.pexels.com/photos/4348402/pexels-photo-4348402.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '35 min read',
      difficulty: 'Intermediate',
      topics: ['Nubia', 'Iron Age', 'Trade Routes', 'Meroe'],
      quizQuestions: 12
    },
    {
      id: 3,
      period: 'medieval',
      title: 'Mali Empire & Mansa Musa',
      description: 'Explore the golden age of West Africa and the legendary pilgrimage to Mecca',
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '50 min read',
      difficulty: 'Intermediate',
      topics: ['Gold Trade', 'Timbuktu', 'Islamic Culture', 'Trans-Saharan Trade'],
      quizQuestions: 18
    },
    {
      id: 4,
      period: 'medieval',
      title: 'Great Zimbabwe',
      description: 'Uncover the mysteries of the stone city and the Shona civilization',
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '40 min read',
      difficulty: 'Advanced',
      topics: ['Stone Architecture', 'Shona People', 'Trade Networks', 'Archaeology'],
      quizQuestions: 14
    },
    {
      id: 5,
      period: 'colonial',
      title: 'The Scramble for Africa',
      description: 'Understand the European colonization and its impact on African societies',
      image: 'https://images.pexels.com/photos/4348405/pexels-photo-4348405.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '60 min read',
      difficulty: 'Advanced',
      topics: ['Berlin Conference', 'Resistance Movements', 'Colonial Administration', 'Economic Impact'],
      quizQuestions: 20
    },
    {
      id: 6,
      period: 'modern',
      title: 'African Independence Movements',
      description: 'Learn about the struggle for independence and the birth of modern African nations',
      image: 'https://images.pexels.com/photos/4348406/pexels-photo-4348406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '55 min read',
      difficulty: 'Intermediate',
      topics: ['Nationalism', 'Pan-Africanism', 'Independence Leaders', 'Decolonization'],
      quizQuestions: 16
    }
  ];

  const filteredContent = selectedPeriod === 'all' 
    ? historyContent 
    : historyContent.filter(content => content.period === selectedPeriod);

  const historicalFacts = [
    {
      fact: "The Kingdom of Kush ruled Egypt for nearly a century (744-656 BCE)",
      period: "Ancient Africa"
    },
    {
      fact: "Mansa Musa's wealth was so legendary that his pilgrimage to Mecca caused inflation in Egypt",
      period: "Medieval Period"
    },
    {
      fact: "Great Zimbabwe was home to over 18,000 people at its peak",
      period: "Medieval Period"
    },
    {
      fact: "Ethiopia was never fully colonized, maintaining its independence throughout the colonial period",
      period: "Colonial Era"
    }
  ];

  return (
    <div className="pt-20 pb-4">
      {/* Header */}
      <section className="px-4 py-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            African History
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover the rich heritage and magnificent civilizations of Africa
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">5000+</div>
              <div className="text-sm text-gray-600">Years of History</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">54</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">2000+</div>
              <div className="text-sm text-gray-600">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1.3B</div>
              <div className="text-sm text-gray-600">People</div>
            </div>
          </div>
        </div>
      </section>

      {/* Period Filter */}
      <section className="px-4 py-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {periods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedPeriod === period.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {period.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Facts */}
      <section className="px-4 py-6 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Did You Know?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {historicalFacts.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-gray-700 mb-2 leading-relaxed">{item.fact}</p>
                <span className="text-sm text-amber-600 font-medium">{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Content */}
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
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {content.period.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Play className="h-4 w-4 text-amber-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{content.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{content.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{content.difficulty}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{content.quizQuestions} questions</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {content.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
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
                    <button className="flex-1 bg-amber-600 text-white py-3 rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
                      Start Reading
                    </button>
                    <Link
                      to={`/quiz/history`}
                      className="px-6 py-3 border border-amber-600 text-amber-600 rounded-full text-sm font-medium hover:bg-amber-600 hover:text-white transition-colors"
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

      {/* Timeline Preview */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            African History Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-300"></div>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="font-semibold text-gray-900">3100 BCE</h3>
                  <p className="text-gray-600 text-sm">Unification of Ancient Egypt</p>
                </div>
                <div className="w-4 h-4 bg-amber-600 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-amber-600 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="font-semibold text-gray-900">1000 BCE</h3>
                  <p className="text-gray-600 text-sm">Kingdom of Kush rises to power</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="font-semibold text-gray-900">1235 CE</h3>
                  <p className="text-gray-600 text-sm">Mali Empire founded</p>
                </div>
                <div className="w-4 h-4 bg-amber-600 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-amber-600 rounded-full relative z-10"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="font-semibold text-gray-900">1957</h3>
                  <p className="text-gray-600 text-sm">Ghana becomes first African country to gain independence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;