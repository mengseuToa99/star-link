import React from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  data: ProfileData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 relative z-10">
      <div className="relative group cursor-pointer mb-4">
        
        {/* 1. The Multi-layered Glow Effect */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-white to-cyan-400 opacity-70 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
        
        {/* 2. The Inner Solid Glow (to make the edge look sharp) */}
        <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-sm"></div>

        <img 
          src={data.avatarUrl} 
          alt={data.username}
          className="relative w-28 h-28 rounded-full object-cover border-2 border-white/90 shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <h1 className="text-white text-2xl font-bold mb-1 tracking-wide">
        {data.handle}
      </h1>
      
      <p className="text-gray-300 text-sm max-w-xs font-medium leading-relaxed">
        {data.description}
      </p>
    </div>
  );
};

export default ProfileHeader;