import { NavLink, useLocation } from 'react-router-dom';
import { User, ShoppingBag, Sparkles } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  // Hide navigation on loading screen
  if (location.pathname === '/loading') {
    return null;
  }

  return (
    <nav className="fixed bottom-0 w-full bg-slate-800 border-t border-slate-700 z-10">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around py-3">
          <NavLink 
            to="/person" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <User size={24} />
            <span className="text-xs mt-1">사람</span>
          </NavLink>
          
          <NavLink 
            to="/clothing" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <ShoppingBag size={24} />
            <span className="text-xs mt-1">옷</span>
          </NavLink>
          
          <NavLink 
            to="/results" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Sparkles size={24} />
            <span className="text-xs mt-1">결과</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;