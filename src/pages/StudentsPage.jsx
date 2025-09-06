import React, { useState } from 'react';
import { Search, Filter, Users, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { students, branches, years } from '../data/mockData';
import StudentCard from '../components/StudentCard';

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'compact'

  const filteredStudents = students.filter(student => {
    const matchesSearch = searchTerm === '' || 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      student.badges.some(badge => badge.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesBranch = selectedBranch === '' || student.branch === selectedBranch;
    const matchesYear = selectedYear === '' || student.year === selectedYear;
    
    return matchesSearch && matchesBranch && matchesYear;
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'followers') {
      return b.followers - a.followers;
    } else if (sortBy === 'projects') {
      return (b.projects?.length || 0) - (a.projects?.length || 0);
    } else if (sortBy === 'achievements') {
      return (b.achievements?.length || 0) - (a.achievements?.length || 0);
    }
    return 0;
  });

  const topPerformers = students
    .filter(student => student.badges.includes('Top Performer'))
    .slice(0, 3);

  const stats = [
    { label: 'Total Students', value: students.length, icon: Users, color: 'blue' },
    { label: 'Top Performers', value: topPerformers.length, icon: Star, color: 'yellow' },
    { label: 'Total Projects', value: students.reduce((sum, s) => sum + (s.projects?.length || 0), 0), icon: Award, color: 'green' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Students Directory</h1>
        <p className="text-gray-600">Connect with talented students from PR Pote Patil College</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Top Performers Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="h-5 w-5 text-yellow-500 mr-2" />
          Top Performers This Month
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {topPerformers.map((student) => (
            <StudentCard key={student.id} student={student} variant="compact" />
          ))}
        </div>
      </motion.div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name, skills, or badges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                viewMode === 'compact' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap gap-3">
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Branches</option>
            {branches.map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="name">Sort by Name</option>
            <option value="followers">Most Followers</option>
            <option value="projects">Most Projects</option>
            <option value="achievements">Most Achievements</option>
          </select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Showing {sortedStudents.length} of {students.length} students</span>
        {(searchTerm || selectedBranch || selectedYear) && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedBranch('');
              setSelectedYear('');
            }}
            className="text-blue-600 hover:text-blue-700"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Students Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-4"
      }>
        {sortedStudents.length > 0 ? (
          sortedStudents.map((student) => (
            <StudentCard 
              key={student.id} 
              student={student} 
              variant={viewMode === 'compact' ? 'compact' : 'default'} 
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find students.</p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {sortedStudents.length > 0 && sortedStudents.length >= 9 && (
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Load More Students
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;