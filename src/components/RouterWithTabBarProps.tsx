import React, { ReactNode } from 'react';

interface RouterWithTabBarProps {
  children: ReactNode;
}

const RouterWithTabBar: React.FC<RouterWithTabBarProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <div className="bg-black text-white w-full flex fixed left-0 bottom-0">
        <button className="flex-1 text-center p-6">전시회</button>
        <button className="flex-1 text-center p-6">찜목록</button>
      </div>
    </div>
  );
};

export default RouterWithTabBar;
