import React from 'react';
import { SocialLink } from '../types';

interface LinkButtonProps {
  link: SocialLink;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 block w-full mb-4 group"
    >
      <div className="
        relative
        flex items-center 
        w-full p-4 
        bg-white 
        rounded-full 
        shadow-lg 
        transform transition-all duration-300 
        hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1
        active:scale-95 active:translate-y-0
      ">
        {/* Icon Container */}
        <div className="absolute left-4 p-2 bg-black rounded-full text-white">
            <Icon size={20} />
        </div>

        {/* Text Container - Centered */}
        <div className="flex-1 text-center">
            <span className="text-black font-extrabold text-lg tracking-wide">
                {link.label}
            </span>
        </div>
        
        {/* Visual Balance Spacer (Invisible) to help center text perfectly if needed */}
        {/* <div className="w-10"></div> */}
      </div>
    </a>
  );
};

export default LinkButton;