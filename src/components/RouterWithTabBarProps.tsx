import React, { ReactNode } from 'react';
import { ReactComponent as TicketIcon } from '@assets/icons/Ticket.svg';
import { ReactComponent as FilledStarIcon } from '@assets/icons/FilledStar.svg';

interface RouterWithTabBarProps {
  children: ReactNode;
}

const RouterWithTabBar: React.FC<RouterWithTabBarProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <div className="bg-white w-full flex fixed left-0 bottom-0 border border-[#F4F4F4}">
        <button className="flex flex-col items-center flex-1 p-6">
          <TicketIcon />
          전시회
        </button>
        <button className="flex flex-col items-center flex-1 p-6">
          <FilledStarIcon />
          찜목록
        </button>
      </div>
    </div>
  );
};

export default RouterWithTabBar;
