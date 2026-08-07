import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, BarChart3, User } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const navItems = [
    { to: '/home', label: 'Trang chủ', icon: Home },
    { to: '/units', label: 'Bài học', icon: Layers },
    { to: '/report', label: 'Báo cáo', icon: BarChart3 },
    { to: '/login', label: 'Tài khoản', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 shadow-lg">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl transition-all ${
                  isActive
                    ? 'text-indigo-600 font-extrabold bg-indigo-50'
                    : 'text-slate-500 font-semibold hover:text-slate-800'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
