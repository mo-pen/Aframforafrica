import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Star, Play, Award } from 'lucide-react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'history', name: 'African History' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'technology', name: 'Technology' },
    { id: 'culture', name: 'Culture' },
    { id: 'economics', name: 'Economics' }
  ];

  const courses = [
    {
      id: 1,
      category: 'history',
      title: 'Ancient African Civilizations',
      description: 'Explore the great kingdoms of Africa: Egypt, Kush, Mali, and Songhai',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '6 weeks',
      students: 12500,
      rating: 4.9,
      lessons: 24,
      quizzes: 6
    },
    {
      id: 2,
      category: 'agriculture',
      title: 'Modern African Agriculture',
      description: 'Sustainable farming techniques and crop management for African climates',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '8 weeks',
      students: 8900,
      rating: 4.8,
      lessons: 32,
      quizzes: 8
    },
    {
      id: 3,
      category: 'technology',
      title: 'Mobile App Development',
      description: 'Build mobile applications for African markets and communities',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '12 weeks',
      students: 6700,
      rating: 4.7,
      lessons: 48,
      quizzes: 12
    },
    {
      id: 4,
      category: 'culture',
      title: 'African Languages & Literature',
      description: 'Discover the rich linguistic heritage and oral traditions of Africa',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '10 weeks',
      students: 5400,
      rating: 4.9,
      lessons: 30,
      quizzes: 10
    },
    {
      id: 5,
      category: 'economics',
      title: 'African Economic Development',
      description: 'Understanding trade, resources, and economic growth in Africa',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '8 weeks',
      students: 7200,
      rating: 4.6,
      lessons: 28,
      quizzes: 7
    },
    {
      id: 6,
      category: 'agriculture',
      title: 'Livestock Management in Africa',
      description: 'Best practices for raising cattle, goats, and poultry in African conditions',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '6 weeks',
      students: 4800,
      rating: 4.8,
      lessons: 20,
      quizzes: 5
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="pt-20 pb-4">
      {/* Header */}
      <section className="px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Comprehensive education covering African heritage, modern agriculture, and cutting-edge technology
          </p>
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
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Play className="h-4 w-4 text-blue-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{course.quizzes} quizzes</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Start Course
                    </button>
                    <Link
                      to={`/quiz/${course.category}`}
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

      {/* Course Stats */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Course Statistics</h3>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{courses.length}</div>
                <div className="text-sm text-gray-600">Total Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {courses.reduce((sum, course) => sum + course.students, 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {courses.reduce((sum, course) => sum + course.quizzes, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Quizzes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;