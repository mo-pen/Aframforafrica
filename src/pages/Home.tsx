import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp,
  MapPin,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Brain
} from 'lucide-react';
import { useUser } from '../context/UserContext';

const Home = () => {
  const { user } = useUser();
  const [stats, setStats] = useState({ students: 0, courses: 0, farmers: 0, tokens: 0 });

  useEffect(() => {
    const targetStats = { students: 50000, courses: 500, farmers: 15000, tokens: 1000000 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setStats({
        students: Math.round(targetStats.students * easeOutQuart),
        courses: Math.round(targetStats.courses * easeOutQuart),
        farmers: Math.round(targetStats.farmers * easeOutQuart),
        tokens: Math.round(targetStats.tokens * easeOutQuart)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Interactive Learning",
      description: "Comprehensive courses on African history, agriculture, and technology",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Award,
      title: "AFRAM Rewards",
      description: "Earn 0.2 AFRAM tokens for each correct quiz answer",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "Farmer Community",
      description: "Connect with farmers across Africa, share knowledge and experiences",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Investment Platform",
      description: "Support African farmers and agricultural projects",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="pt-20 pb-4">
      {/* Hero Section */}
      <section className="px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            African Education Revolution
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Learn Africa's
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Rich Heritage
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Discover African history, master modern agriculture, and build technology skills 
            while earning AFRAM tokens and connecting with farmers across the continent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/courses"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/quiz"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
            >
              Take Quiz
              <Brain className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="flex items-center justify-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            Headquarters: Accra, Ghana, Africa
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.students.toLocaleString()}+</div>
              <div className="text-gray-600 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stats.courses}+</div>
              <div className="text-gray-600 text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.farmers.toLocaleString()}+</div>
              <div className="text-gray-600 text-sm">Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stats.tokens.toLocaleString()}+</div>
              <div className="text-gray-600 text-sm">AFRAM Tokens</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Afram EduTech?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/history"
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl text-center hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              <BookOpen className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">African History</div>
              <div className="text-sm opacity-90">Learn our heritage</div>
            </Link>
            
            <Link
              to="/agriculture"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl text-center hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
            >
              <Globe className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Agriculture</div>
              <div className="text-sm opacity-90">Modern farming</div>
            </Link>
            
            <Link
              to="/farmer-hub"
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl text-center hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              <Users className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Farmer Hub</div>
              <div className="text-sm opacity-90">Connect & chat</div>
            </Link>
            
            <Link
              to="/investment"
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl text-center hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
            >
              <TrendingUp className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Invest</div>
              <div className="text-sm opacity-90">Support farmers</div>
            </Link>
          </div>
        </div>
      </section>

      {/* User Progress */}
      {user && (
        <section className="px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Progress</h3>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{user.aframTokens.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">AFRAM Tokens</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{user.level}</div>
                  <div className="text-sm text-gray-600">Level</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{user.completedQuizzes.length}</div>
                  <div className="text-sm text-gray-600">Quizzes Done</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold">Afram EduTech</span>
          </div>
          <p className="text-gray-300 mb-4">
            Empowering Africa through education, technology, and community
          </p>
          <div className="text-sm text-gray-400">
            <p>Developed by Shaqcor Edtech</p>
            <p>Headquarters: Accra, Ghana, Africa</p>
            <p>&copy; 2025 Afram EduTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;