import React, { ReactNode } from 'react';
import { ReactComponent as TicketIcon } from '@assets/icons/Ticket.svg';
import { ReactComponent as FilledStarIcon } from '@assets/icons/FilledStar.svg';
import { Link, useLocation } from 'react-router-dom';

interface RouterWithTabBarProps {
  children: ReactNode;
}

const RouterWithTabBar: React.FC<RouterWithTabBarProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="relative">
      {children}
      <div className="bg-white w-full flex fixed left-0 bottom-0 border border-[#F4F4F4} text-xs">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 flex-1 p-6 ${
            pathname !== '/' && 'text-gray-400'
          }`}
        >
          <TicketIcon />
          전시회
        </Link>
        <Link
          to="/picked"
          className={`flex flex-col items-center gap-1 flex-1 p-6 ${
            pathname !== '/picked' && 'text-gray-400'
          }`}
        >
          <FilledStarIcon />
          찜목록
        </Link>
      </div>
    </div>
  );
};

export default RouterWithTabBar;
