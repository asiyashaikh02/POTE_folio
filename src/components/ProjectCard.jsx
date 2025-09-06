import React from 'react';
import { Github, ExternalLink, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, showAuthor = true, author = null }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {project.image && (
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        {showAuthor && author && (
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={author.profilePicture}
              alt={author.name}
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600">{author.name}</span>
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">Code</span>
              </a>
            )}
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors duration-200">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Like</span>
            </button>
          </div>
          
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200">
            <span className="text-sm font-medium">View Details</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;