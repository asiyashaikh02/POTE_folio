import React from 'react';
import { Plus, Award, BookOpen, Users, TrendingUp, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { currentUser, students } from '../data/mockData';
import Badge from '../components/Badge';
import ProjectCard from '../components/ProjectCard';

const DashboardPage = () => {
  const stats = [
    { label: 'Profile Views', value: '234', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Project Likes', value: '89', change: '+8%', icon: TrendingUp, color: 'green' },
    { label: 'Achievements', value: currentUser.achievements?.length || 0, change: '+2', icon: Award, color: 'yellow' },
    { label: 'Followers', value: currentUser.followers, change: '+5', icon: Users, color: 'purple' }
  ];

  const recentActivities = [
    { type: 'achievement', message: 'You earned a new badge: Top Performer', time: '2 hours ago' },
    { type: 'project', message: 'Your project EduConnect received 5 new likes', time: '5 hours ago' },
    { type: 'profile', message: 'Your profile was viewed by 12 recruiters', time: '1 day ago' },
    { type: 'connection', message: '3 new students started following you', time: '2 days ago' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {currentUser.name}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here's what's happening with your profile today.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Achievement</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Profile Summary and Recent Activity */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="relative">
              <div className="h-24 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <img
                src={currentUser.profilePicture}
                alt={currentUser.name}
                className="absolute -bottom-8 left-6 h-16 w-16 rounded-full border-4 border-white object-cover"
              />
            </div>
            
            <div className="pt-10 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{currentUser.name}</h3>
                  <p className="text-sm text-gray-500">{currentUser.branch}</p>
                  <p className="text-sm text-gray-500">{currentUser.year}</p>
                </div>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{currentUser.bio}</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>Profile Completion</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {currentUser.badges?.map((badge, index) => (
                  <Badge key={index} name={badge} size="sm" />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-gray-100">
                <div>
                  <p className="text-lg font-bold text-gray-900">{currentUser.projects?.length || 0}</p>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">{currentUser.followers}</p>
                  <p className="text-sm text-gray-500">Followers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`
                    w-2 h-2 rounded-full mt-2 flex-shrink-0
                    ${activity.type === 'achievement' ? 'bg-yellow-400' : 
                      activity.type === 'project' ? 'bg-blue-400' : 
                      activity.type === 'profile' ? 'bg-green-400' : 'bg-purple-400'}
                  `}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-6 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
              View all activities →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Your Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Projects</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200 flex items-center space-x-1">
            <Plus className="h-4 w-4" />
            <span>Add Project</span>
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUser.projects?.map((project) => (
            <ProjectCard key={project.id} project={project} showAuthor={false} />
          ))}
          
          {/* Add Project Card */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center hover:border-gray-400 hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
            <Plus className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Add New Project</h3>
            <p className="text-sm text-gray-500 text-center">Showcase your latest work and technical skills</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
            <Award className="h-8 w-8 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Add Achievement</h4>
            <p className="text-sm text-gray-500">Share your latest accomplishment</p>
          </button>
          
          <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
            <BookOpen className="h-8 w-8 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Upload Project</h4>
            <p className="text-sm text-gray-500">Showcase your technical work</p>
          </button>
          
          <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-left">
            <Users className="h-8 w-8 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Find Collaborators</h4>
            <p className="text-sm text-gray-500">Connect with like-minded peers</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;