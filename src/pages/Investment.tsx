import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  MapPin, 
  Calendar,
  Target,
  CheckCircle,
  Clock,
  Sprout,
  ArrowRight,
  Heart,
  Star
} from 'lucide-react';

const Investment = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedAmount, setSelectedAmount] = useState(50);

  const projects = [
    {
      id: 1,
      title: "Sustainable Cocoa Farming Initiative",
      farmer: "Kwame Asante Cooperative",
      location: "Ashanti Region, Ghana",
      image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Help 50 cocoa farmers transition to sustainable farming practices with new equipment and training.",
      targetAmount: 25000,
      raisedAmount: 18500,
      investors: 127,
      daysLeft: 15,
      expectedReturn: "12-15%",
      riskLevel: "Medium",
      category: "Agriculture",
      featured: true
    },
    {
      id: 2,
      title: "Solar-Powered Irrigation System",
      farmer: "Northern Ghana Farmers Union",
      location: "Northern Region, Ghana",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Install solar-powered irrigation systems to help farmers grow crops year-round despite dry seasons.",
      targetAmount: 40000,
      raisedAmount: 12800,
      investors: 89,
      daysLeft: 28,
      expectedReturn: "10-12%",
      riskLevel: "Low",
      category: "Technology"
    },
    {
      id: 3,
      title: "Organic Vegetable Greenhouse Project",
      farmer: "Amina Hassan & Partners",
      location: "Greater Accra, Ghana",
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      description: "Build modern greenhouses for year-round organic vegetable production to supply local markets.",
      targetAmount: 15000,
      raisedAmount: 8900,
      investors: 64,
      daysLeft: 22,
      expectedReturn: "15-18%",
      riskLevel: "Medium",
      category: "Agriculture"
    }
  ];

  const myInvestments = [
    {
      project: "Sustainable Cocoa Farming Initiative",
      amount: 200,
      date: "2024-12-15",
      status: "Active",
      returns: 24.50
    },
    {
      project: "Rice Processing Equipment",
      amount: 150,
      date: "2024-11-28",
      status: "Completed",
      returns: 18.75
    }
  ];

  const investmentAmounts = [25, 50, 100, 200, 500, 1000];

  const handleInvest = (projectId: number) => {
    // Investment logic here
    alert(`Investment of $${selectedAmount} submitted for project ${projectId}`);
  };

  return (
    <div className="pt-20 pb-4">
      {/* Header */}
      <section className="px-4 py-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Investment Platform
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Support African farmers and agricultural projects while earning returns
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$2.1M</div>
              <div className="text-sm text-gray-600">Total Invested</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1,247</div>
              <div className="text-sm text-gray-600">Investors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">89</div>
              <div className="text-sm text-gray-600">Projects Funded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-4 py-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab('projects')}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === 'projects'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Investment Projects
            </button>
            <button
              onClick={() => setActiveTab('my-investments')}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === 'my-investments'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Investments
            </button>
            <button
              onClick={() => setActiveTab('how-it-works')}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === 'how-it-works'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {projects.map((project) => {
                const progressPercentage = (project.raisedAmount / project.targetAmount) * 100;
                
                return (
                  <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {project.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-center">
                        <Star className="h-4 w-4 inline mr-2" />
                        Featured Project
                      </div>
                    )}
                    
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                {project.category}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                project.riskLevel === 'Low' ? 'bg-green-100 text-green-700' :
                                project.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {project.riskLevel} Risk
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-2">{project.farmer}</p>
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{project.location}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">{project.expectedReturn}</div>
                            <div className="text-sm text-gray-600">Expected Return</div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              ${project.raisedAmount.toLocaleString()} raised
                            </span>
                            <span className="text-sm text-gray-600">
                              ${project.targetAmount.toLocaleString()} goal
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${progressPercentage}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {progressPercentage.toFixed(1)}% funded
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{project.investors} investors</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{project.daysLeft} days left</span>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => handleInvest(project.id)}
                            className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center"
                          >
                            Invest Now
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Investment Amount Selector */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Investment Amount</h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {investmentAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-3 rounded-xl border-2 font-medium transition-colors ${
                        selectedAmount === amount
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="text-center text-sm text-gray-600">
                  Selected: <span className="font-semibold text-green-600">${selectedAmount}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'my-investments' && (
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">My Investment Portfolio</h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">$350</div>
                    <div className="text-sm text-gray-600">Total Invested</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">$43.25</div>
                    <div className="text-sm text-gray-600">Total Returns</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">12.4%</div>
                    <div className="text-sm text-gray-600">Avg. Return</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {myInvestments.map((investment, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{investment.project}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          investment.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {investment.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div>
                          <span>Invested: ${investment.amount}</span>
                          <span className="mx-2">•</span>
                          <span>Date: {investment.date}</span>
                        </div>
                        <div className="text-green-600 font-medium">
                          Returns: +${investment.returns}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'how-it-works' && (
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  How Investment Works
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">1. Choose Project</h4>
                    <p className="text-gray-600 text-sm">
                      Browse verified agricultural projects and select ones that align with your investment goals.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">2. Invest Securely</h4>
                    <p className="text-gray-600 text-sm">
                      Make your investment through our secure platform. Minimum investment starts at $25.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">3. Earn Returns</h4>
                    <p className="text-gray-600 text-sm">
                      Receive regular updates and earn returns as the agricultural projects succeed and grow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Investment Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Support sustainable agriculture in Africa</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Earn competitive returns (8-18% annually)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Direct impact on farmer communities</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Transparent project tracking and updates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Low minimum investment requirements</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Investment;