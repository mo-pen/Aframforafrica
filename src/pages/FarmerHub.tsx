import React, { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Plus, 
  Heart, 
  Share2, 
  MapPin, 
  Calendar,
  Sprout,
  TrendingUp,
  Camera,
  Send
} from 'lucide-react';

const FarmerHub = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [newPost, setNewPost] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const posts = [
    {
      id: 1,
      author: "Kwame Asante",
      location: "Ashanti Region, Ghana",
      time: "2 hours ago",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content: "Just harvested my first batch of drought-resistant maize! The new seeds from the agricultural program are amazing. Yield increased by 40% compared to last season. 🌽",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      likes: 24,
      comments: 8,
      category: "Success Story"
    },
    {
      id: 2,
      author: "Amina Hassan",
      location: "Northern Region, Ghana",
      time: "5 hours ago",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content: "Looking for advice on organic pest control for tomatoes. Has anyone tried neem oil? My crops are being affected by whiteflies.",
      likes: 12,
      comments: 15,
      category: "Help Needed"
    },
    {
      id: 3,
      author: "Joseph Mensah",
      location: "Eastern Region, Ghana",
      time: "1 day ago",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content: "Excited to share that our cooperative just received funding for a new irrigation system! This will help 50 farmers in our community. Thank you to all investors who supported us! 💧",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      likes: 45,
      comments: 12,
      category: "Community Update"
    }
  ];

  const farmers = [
    {
      name: "Kwame Asante",
      location: "Ashanti Region",
      specialty: "Maize & Cassava",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      online: true
    },
    {
      name: "Amina Hassan",
      location: "Northern Region",
      specialty: "Vegetables",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      online: true
    },
    {
      name: "Joseph Mensah",
      location: "Eastern Region",
      specialty: "Rice & Yam",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      online: false
    }
  ];

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      // Add new post logic here
      setNewPost('');
      setShowNewPost(false);
    }
  };

  return (
    <div className="pt-20 pb-4">
      {/* Header */}
      <section className="px-4 py-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Farmer Hub</h1>
          <p className="text-gray-600">Connect, share, and learn with farmers across Africa</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-4 py-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab('feed')}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === 'feed'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Community Feed
            </button>
            <button
              onClick={() => setActiveTab('farmers')}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === 'farmers'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Find Farmers
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === 'chat'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Messages
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {activeTab === 'feed' && (
            <div className="space-y-6">
              {/* New Post Button */}
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <button
                  onClick={() => setShowNewPost(!showNewPost)}
                  className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-green-400 hover:bg-green-50 transition-colors"
                >
                  <Plus className="h-5 w-5 text-green-600" />
                  <span className="text-green-600 font-medium">Share your farming experience</span>
                </button>

                {showNewPost && (
                  <div className="mt-4 space-y-4">
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="What's happening on your farm today?"
                      className="w-full p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                      rows={4}
                    />
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                        <Camera className="h-5 w-5" />
                        <span>Add Photo</span>
                      </button>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => setShowNewPost(false)}
                          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handlePostSubmit}
                          className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2"
                        >
                          <Send className="h-4 w-4" />
                          <span>Post</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Posts */}
              {posts.map((post) => (
                <div key={post.id} className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{post.author}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{post.location}</span>
                        <span>•</span>
                        <Calendar className="h-4 w-4" />
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post content"
                      className="w-full h-64 object-cover rounded-xl mb-4"
                    />
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="h-5 w-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'farmers' && (
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect with Farmers</h3>
                <div className="space-y-4">
                  {farmers.map((farmer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={farmer.avatar}
                            alt={farmer.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          {farmer.online && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{farmer.name}</h4>
                          <p className="text-sm text-gray-600">{farmer.specialty}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{farmer.location}</span>
                          </div>
                        </div>
                      </div>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Messages Yet</h3>
                <p className="text-gray-600 mb-6">
                  Start connecting with farmers to begin conversations
                </p>
                <button
                  onClick={() => setActiveTab('farmers')}
                  className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  Find Farmers to Chat
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FarmerHub;