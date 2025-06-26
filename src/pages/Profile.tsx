import React, { useState } from 'react';
import { 
  User, 
  Award, 
  TrendingUp, 
  BookOpen, 
  Settings,
  Edit3,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Trophy,
  Target,
  Star
} from 'lucide-react';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    location: 'Accra, Ghana',
    phone: '+233 123 456 789'
  });

  const achievements = [
    {
      id: 1,
      title: "First Quiz Master",
      description: "Completed your first quiz",
      icon: Trophy,
      earned: true,
      date: "2024-12-01"
    },
    {
      id: 2,
      title: "History Scholar",
      description: "Scored 90%+ in African History quiz",
      icon: BookOpen,
      earned: true,
      date: "2024-12-05"
    },
    {
      id: 3,
      title: "Agriculture Expert",
      description: "Completed all agriculture courses",
      icon: Target,
      earned: false,
      progress: 60
    },
    {
      id: 4,
      title: "Community Helper",
      description: "Helped 10 farmers in the hub",
      icon: User,
      earned: false,
      progress: 30
    }
  ];

  const recentActivity = [
    {
      type: "quiz",
      title: "Completed Ancient African Civilizations Quiz",
      score: "8/10",
      tokens: 1.6,
      date: "2 hours ago"
    },
    {
      type: "course",
      title: "Started Modern African Agriculture Course",
      progress: "Lesson 3 of 32",
      date: "1 day ago"
    },
    {
      type: "investment",
      title: "Invested in Cocoa Farming Initiative",
      amount: "$50",
      date: "3 days ago"
    },
    {
      type: "community",
      title: "Posted in Farmer Hub",
      engagement: "12 likes, 5 comments",
      date: "5 days ago"
    }
  ];

  const handleSaveProfile = () => {
    if (user) {
      updateUser({
        name: editForm.name,
        email: editForm.email
      });
    }
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <div className="pt-20 pb-4">
      {/* Profile Header */}
      <section className="px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        className="text-2xl font-bold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg px-3 py-1"
                      />
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                        className="text-gray-600 bg-gray-50 border border-gray-300 rounded-lg px-3 py-1"
                      />
                    </div>
                  ) : (
                    <>
                      <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                      <p className="text-gray-600">{user.email}</p>
                    </>
                  )}
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Accra, Ghana</span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Joined Dec 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                    <span>Edit</span>
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">{user.aframTokens.toFixed(1)}</div>
                <div className="text-sm text-gray-600">AFRAM Tokens</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">{user.level}</div>
                <div className="text-sm text-gray-600">Level</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{user.completedQuizzes.length}</div>
                <div className="text-sm text-gray-600">Quizzes</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">{achievements.filter(a => a.earned).length}</div>
                <div className="text-sm text-gray-600">Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-yellow-500" />
              Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`p-4 rounded-xl border-2 ${
                  achievement.earned 
                    ? 'border-yellow-200 bg-yellow-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      <achievement.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        achievement.earned ? 'text-yellow-800' : 'text-gray-700'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm ${
                        achievement.earned ? 'text-yellow-700' : 'text-gray-600'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.earned ? (
                        <p className="text-xs text-yellow-600 mt-1">
                          Earned on {achievement.date}
                        </p>
                      ) : (
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">
                            {achievement.progress}% complete
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-blue-500" />
              Recent Activity
            </h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'quiz' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'course' ? 'bg-green-100 text-green-600' :
                    activity.type === 'investment' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {activity.type === 'quiz' && <Award className="h-5 w-5" />}
                    {activity.type === 'course' && <BookOpen className="h-5 w-5" />}
                    {activity.type === 'investment' && <TrendingUp className="h-5 w-5" />}
                    {activity.type === 'community' && <User className="h-5 w-5" />}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      {activity.score && <span>Score: {activity.score}</span>}
                      {activity.tokens && <span className="text-green-600">+{activity.tokens} AFRAM</span>}
                      {activity.progress && <span>{activity.progress}</span>}
                      {activity.amount && <span>{activity.amount}</span>}
                      {activity.engagement && <span>{activity.engagement}</span>}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;