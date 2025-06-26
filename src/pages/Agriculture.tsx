import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Droplets, 
  Sun, 
  Thermometer,
  TrendingUp,
  Users,
  Award,
  Play,
  BookOpen,
  MapPin,
  Calendar,
  Leaf,
  Tractor,
  BarChart3
} from 'lucide-react';

const Agriculture = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'crops', name: 'Crop Production' },
    { id: 'livestock', name: 'Livestock' },
    { id: 'technology', name: 'AgriTech' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'business', name: 'Agribusiness' }
  ];

  const agricultureContent = [
    {
      id: 1,
      category: 'crops',
      title: 'Drought-Resistant Crops for Africa',
      description: 'Learn about climate-adapted varieties that thrive in African conditions',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '40 min',
      difficulty: 'Beginner',
      topics: ['Sorghum', 'Millet', 'Cassava', 'Sweet Potato'],
      quizQuestions: 15,
      practicalTips: 8
    },
    {
      id: 2,
      category: 'technology',
      title: 'Solar-Powered Irrigation Systems',
      description: 'Modern irrigation solutions for sustainable water management',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '35 min',
      difficulty: 'Intermediate',
      topics: ['Solar Technology', 'Water Management', 'Efficiency', 'Cost Analysis'],
      quizQuestions: 12,
      practicalTips: 6
    },
    {
      id: 3,
      category: 'livestock',
      title: 'Cattle Farming in African Climates',
      description: 'Best practices for raising healthy cattle in tropical and arid regions',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '45 min',
      difficulty: 'Intermediate',
      topics: ['Breed Selection', 'Nutrition', 'Disease Prevention', 'Pasture Management'],
      quizQuestions: 18,
      practicalTips: 10
    },
    {
      id: 4,
      category: 'sustainability',
      title: 'Organic Farming Techniques',
      description: 'Sustainable methods for healthy soil and chemical-free production',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '50 min',
      difficulty: 'Advanced',
      topics: ['Composting', 'Natural Pesticides', 'Crop Rotation', 'Soil Health'],
      quizQuestions: 20,
      practicalTips: 12
    },
    {
      id: 5,
      category: 'business',
      title: 'Agricultural Value Chain Management',
      description: 'From farm to market: maximizing profits in agricultural business',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '60 min',
      difficulty: 'Advanced',
      topics: ['Market Analysis', 'Supply Chain', 'Pricing', 'Quality Control'],
      quizQuestions: 16,
      practicalTips: 9
    },
    {
      id: 6,
      category: 'crops',
      title: 'Cocoa Production Excellence',
      description: 'Master the art of growing premium cocoa beans for export markets',
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '55 min',
      difficulty: 'Intermediate',
      topics: ['Cocoa Varieties', 'Fermentation', 'Drying', 'Quality Standards'],
      quizQuestions: 14,
      practicalTips: 11
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? agricultureContent 
    : agricultureContent.filter(content => content.category === selectedCategory);

  const weatherData = [
    { region: 'Northern Ghana', temp: '32°C', humidity: '45%', rainfall: 'Low', season: 'Dry Season' },
    { region: 'Ashanti Region', temp: '28°C', humidity: '75%', rainfall: 'Moderate', season: 'Wet Season' },
    { region: 'Volta Region', temp: '30°C', humidity: '68%', rainfall: 'High', season: 'Wet Season' },
    { region: 'Upper East', temp: '35°C', humidity: '35%', rainfall: 'Very Low', season: 'Dry Season' }
  ];

  const cropCalendar = [
    { crop: 'Maize', plantingSeason: 'April - June', harvestSeason: 'August - October', regions: 'All regions' },
    { crop: 'Rice', plantingSeason: 'May - July', harvestSeason: 'September - November', regions: 'Northern, Volta' },
    { crop: 'Cocoa', plantingSeason: 'April - June', harvestSeason: 'October - February', regions: 'Ashanti, Western' },
    { crop: 'Cassava', plantingSeason: 'March - May', harvestSeason: 'Year-round', regions: 'All regions' }
  ];

  return (
    <div className="pt-20 pb-4">
      {/* Header */}
      <section className="px-4 py-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            African Agriculture
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Master modern farming techniques adapted for African climates and conditions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">60%</div>
              <div className="text-sm text-gray-600">of Population</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">23%</div>
              <div className="text-sm text-gray-600">of GDP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">400M</div>
              <div className="text-sm text-gray-600">Hectares</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">70%</div>
              <div className="text-sm text-gray-600">Food Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Dashboard */}
      <section className="px-4 py-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Sun className="h-6 w-6 mr-2 text-yellow-500" />
            Regional Weather Conditions
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {weatherData.map((data, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">{data.region}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Temperature</span>
                    <span className="font-medium text-orange-600">{data.temp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Humidity</span>
                    <span className="font-medium text-blue-600">{data.humidity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rainfall</span>
                    <span className="font-medium text-green-600">{data.rainfall}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{data.season}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 py-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agriculture Content */}
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
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {content.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Play className="h-4 w-4 text-green-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{content.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{content.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      <span>{content.difficulty}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{content.quizQuestions} quiz</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {content.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
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

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Leaf className="h-4 w-4 mr-1 text-green-500" />
                      <span>{content.practicalTips} practical tips</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-green-600 text-white py-3 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                      Start Learning
                    </button>
                    <Link
                      to={`/quiz/agriculture`}
                      className="px-6 py-3 border border-green-600 text-green-600 rounded-full text-sm font-medium hover:bg-green-600 hover:text-white transition-colors"
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

      {/* Crop Calendar */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center">
            <Calendar className="h-6 w-6 mr-2 text-green-600" />
            Crop Planting Calendar
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Crop</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Planting Season</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Harvest Season</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Regions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cropCalendar.map((crop, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Sprout className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-medium text-gray-900">{crop.crop}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{crop.plantingSeason}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{crop.harvestSeason}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{crop.regions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Quick Farming Tips
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
              <Droplets className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Water Management</h3>
              <p className="text-gray-600 text-sm">
                Use drip irrigation to save up to 50% water while improving crop yields.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
              <Sun className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Soil Health</h3>
              <p className="text-gray-600 text-sm">
                Test soil pH regularly and add organic matter to improve fertility naturally.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <Tractor className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Technology</h3>
              <p className="text-gray-600 text-sm">
                Adopt mobile apps for weather forecasting and market price tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;