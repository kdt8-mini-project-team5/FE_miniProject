import Header from '@/components/Header/Header';
import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-concrete">
      <nav className="mx-auto border-b-[1px] rounded-lg h-20 bg-white">
        <div className="mx-auto w-innerWidth h-full flex items-center ">
          <Header />
        </div>
      </nav>
      {children}
    </div>
  );
}

export default layout;
