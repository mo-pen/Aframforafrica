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
  Brain,
  Sprout
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
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Award,
      title: "AFRAM Rewards",
      description: "Earn 0.2 AFRAM tokens for each correct quiz answer",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: Users,
      title: "Farmer Community",
      description: "Connect with farmers across Africa, share knowledge and experiences",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Investment Platform",
      description: "Support African farmers and agricultural projects",
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <div className="pt-20 pb-4">
      {/* Hero Section */}
      <section className="px-4 py-8 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-amber-500/20 to-orange-500/30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-green-100/90 backdrop-blur-sm rounded-full text-green-800 text-sm font-medium mb-6 shadow-lg">
            <Sprout className="h-4 w-4 mr-2" />
            African Education Revolution
          </div>
          
          <h1 className="text-4xl font-bold text-green-900 mb-4 leading-tight">
            Learn Africa's
            <span className="bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
              {' '}Rich Heritage
            </span>
          </h1>
          
          <p className="text-lg text-green-800 mb-8 leading-relaxed bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            Discover African history, master modern agriculture, and build technology skills 
            while earning AFRAM tokens and connecting with farmers across the continent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/courses"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/quiz"
              className="border-2 border-green-600 text-green-600 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center shadow-lg"
            >
              Take Quiz
              <Brain className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="flex items-center justify-center text-sm text-green-800 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <MapPin className="h-4 w-4 mr-1" />
            Headquarters: Accra, Ghana, Africa
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.students.toLocaleString()}+</div>
              <div className="text-green-700 text-sm font-medium">Students</div>
            </div>
            <div className="text-center bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">{stats.courses}+</div>
              <div className="text-amber-700 text-sm font-medium">Courses</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stats.farmers.toLocaleString()}+</div>
              <div className="text-orange-700 text-sm font-medium">Farmers</div>
            </div>
            <div className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stats.tokens.toLocaleString()}+</div>
              <div className="text-emerald-700 text-sm font-medium">AFRAM Tokens</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-8 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
            Why Choose Afram EduTech?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-green-100">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">{feature.title}</h3>
                <p className="text-green-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 py-8 bg-white/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-green-900 mb-6">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/history"
              className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-2xl text-center hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <BookOpen className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">African History</div>
              <div className="text-sm opacity-90">Learn our heritage</div>
            </Link>
            
            <Link
              to="/agriculture"
              className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl text-center hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Sprout className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Agriculture</div>
              <div className="text-sm opacity-90">Modern farming</div>
            </Link>
            
            <Link
              to="/farmer-hub"
              className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 rounded-2xl text-center hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Users className="h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Farmer Hub</div>
              <div className="text-sm opacity-90">Connect & chat</div>
            </Link>
            
            <Link
              to="/investment"
              className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl text-center hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
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
        <section className="px-4 py-8 relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Your Progress</h3>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">{user.aframTokens.toFixed(1)}</div>
                  <div className="text-sm text-green-700 font-medium">AFRAM Tokens</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-amber-600">{user.level}</div>
                  <div className="text-sm text-amber-700 font-medium">Level</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">{user.completedQuizzes.length}</div>
                  <div className="text-sm text-orange-700 font-medium">Quizzes Done</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-4 py-8 bg-gradient-to-br from-green-800 to-green-900 text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <BookOpen className="h-6 w-6 text-green-200" />
            </div>
            <span className="text-lg font-bold">Afram EduTech</span>
          </div>
          <p className="text-green-200 mb-4">
            Empowering Africa through education, technology, and community
          </p>
          <div className="text-sm text-green-300">
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