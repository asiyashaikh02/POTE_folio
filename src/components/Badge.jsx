import React from 'react';
import { Award, Star, Trophy, Lightbulb, Target, Zap, Crown, BookOpen } from 'lucide-react';

const badgeIcons = {
  'Top Performer': Trophy,
  'Innovator': Lightbulb,
  'Research Scholar': BookOpen,
  'Tech Leader': Star,
  'Design Excellence': Award,
  'Creative Thinker': Zap,
  'Green Innovator': Target,
  'Sustainability Champion': Target,
  'Rising Star': Star,
  'Data Science Expert': Crown
};

const badgeColors = {
  'Top Performer': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Innovator': 'bg-purple-100 text-purple-800 border-purple-200',
  'Research Scholar': 'bg-blue-100 text-blue-800 border-blue-200',
  'Tech Leader': 'bg-green-100 text-green-800 border-green-200',
  'Design Excellence': 'bg-pink-100 text-pink-800 border-pink-200',
  'Creative Thinker': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'Green Innovator': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Sustainability Champion': 'bg-teal-100 text-teal-800 border-teal-200',
  'Rising Star': 'bg-orange-100 text-orange-800 border-orange-200',
  'Data Science Expert': 'bg-cyan-100 text-cyan-800 border-cyan-200'
};

const Badge = ({ name, size = 'sm' }) => {
  const Icon = badgeIcons[name] || Award;
  const colorClass = badgeColors[name] || 'bg-gray-100 text-gray-800 border-gray-200';
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    xs: 'h-3 w-3',
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <span className={`
      inline-flex items-center space-x-1 rounded-full border font-medium
      ${colorClass} ${sizeClasses[size]}
    `}>
      <Icon className={iconSizes[size]} />
      <span>{name}</span>
    </span>
  );
};

export default Badge;