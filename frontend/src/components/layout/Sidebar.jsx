import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Target, Activity, BookOpen } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Goals', path: '/goals', icon: Target },
    { name: 'Digital Twin', path: '/simulator', icon: Activity },
    { name: 'Knowledge', path: '/education', icon: BookOpen },
  ];

  return (
    <div className="w-64 h-[calc(100vh-65px)] bg-white border-r border-slate-100 sticky top-[65px] hidden md:flex flex-col p-4">
      <div className="mb-6 px-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Main Menu</p>
      </div>
      
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.path}
              to={item.path} 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive 
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-900'} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-4 bg-slate-50 rounded-xl border border-slate-100">
        <h4 className="text-sm font-semibold text-slate-900 mb-1">Upgrade Plan</h4>
        <p className="text-xs text-slate-500 mb-3">Get advanced AI simulations.</p>
        <button className="w-full bg-white border border-slate-200 text-slate-900 text-xs font-bold py-2 rounded-lg hover:bg-slate-50 transition">
          View Plans
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
