import React from 'react';
import { MapPin, Users, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Badge from './Badge';

const StudentCard = ({ student, variant = 'default' }) => {
  if (variant === 'compact') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center space-x-3">
          <img
            src={student.profilePicture}
            alt={student.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{student.name}</h3>
            <p className="text-sm text-gray-500 truncate">{student.branch}</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Users className="h-4 w-4" />
            <span>{student.followers}</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {student.badges?.slice(0, 2).map((badge, index) => (
            <Badge key={index} name={badge} size="xs" />
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600"></div>
        <img
          src={student.profilePicture}
          alt={student.name}
          className="absolute -bottom-8 left-6 h-16 w-16 rounded-full border-4 border-white object-cover"
        />
      </div>
      
      <div className="pt-10 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
            <p className="text-sm text-gray-500">{student.branch} • {student.year}</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Users className="h-4 w-4" />
            <span>{student.followers} followers</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">{student.bio}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {student.skills?.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
          {student.skills?.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
              +{student.skills.length - 3} more
            </span>
          )}
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {student.badges?.slice(0, 2).map((badge, index) => (
            <Badge key={index} name={badge} size="sm" />
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <span className="font-medium">{student.projects?.length || 0}</span>
              <span>Projects</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-medium">{student.achievements?.length || 0}</span>
              <span>Achievements</span>
            </div>
          </div>
          
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200">
            <span className="text-sm font-medium">View Profile</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentCard;