import React from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  data: ProfileData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 relative z-10">
      <div className="relative group cursor-pointer mb-4">
        {/* Glow effect behind avatar */}
        <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:bg-white/30 transition-all duration-500"></div>
        <img 
          src={data.avatarUrl} 
          alt={data.username}
          className="relative w-28 h-28 rounded-full object-cover border-2 border-white/50 shadow-2xl transition-transform duration-300 group-hover:scale-105"
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