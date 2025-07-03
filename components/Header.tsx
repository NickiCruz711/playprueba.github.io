
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-b from-neutral-800 to-[#121212] p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-8">
            <img 
              src="https://ia600700.us.archive.org/10/items/logo-horizontal-blanco-07/logo%20horizontal%20blanco-07.png" 
              alt="Logo"
              className="h-10"
            />
        </div>
        <div className="relative h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden bg-neutral-900">
            <img 
                src="https://images.pexels.com/photos/3642351/pexels-photo-3642351.jpeg" 
                alt="A concert with a large crowd and stage lights"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 h-full flex items-center justify-center p-4">
                 <img 
                    src="https://archive.org/download/lema-01/lema-01.png" 
                    alt="Lema: La música vuelve a ser tuya"
                    className="w-auto h-16 sm:h-20 md:h-24"
                />
            </div>
        </div>
    </header>
  );
};
