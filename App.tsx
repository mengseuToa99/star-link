import React from 'react';
import StarryBackground from './components/StarryBackground';
import ProfileHeader from './components/ProfileHeader';
import LinkButton from './components/LinkButton';
import { PROFILE_DATA, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <StarryBackground />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen py-16 px-4">
        
        {/* Main Card / Layout Constraint */}
        <div className="w-full max-w-md mx-auto">
          
          {/* Profile Section */}
          <ProfileHeader data={PROFILE_DATA} />

          {/* Links Section */}
          <div className="w-full mt-6 space-y-4">
            {SOCIAL_LINKS.map((link) => (
              <LinkButton key={link.id} link={link} />
            ))}
          </div>

          {/* Footer / Copyright (Optional but nice) */}
          <div className="mt-12 text-center">
             <p className="text-white/30 text-xs font-semibold tracking-widest uppercase">
               {/* © 2024 StarLink */}
             </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default App;