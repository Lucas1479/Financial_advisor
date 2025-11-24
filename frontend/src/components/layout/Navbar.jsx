import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, User, Settings, LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    // TODO: Clear token logic (cookies are cleared by browser on expire, but better to call API)
    // For now just client-side redirect
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-lg">F</div>
          <span className="font-bold text-xl tracking-tight text-slate-900">FinTwin</span>
        </Link>

        {/* Desktop Menu - Right Side */}
        <div className="flex items-center gap-4">
           {/* Profile Dropdown */}
           <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 hover:bg-slate-50 p-2 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">
                  LS
                </div>
                <span className="hidden md:block text-sm font-medium text-slate-700">Lucas</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-4 py-2 border-b border-slate-50 mb-2">
                    <p className="text-xs text-slate-400">Signed in as</p>
                    <p className="text-sm font-medium text-slate-900 truncate">lucas@example.com</p>
                  </div>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                    <User size={16} /> Profile
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                    <Settings size={16} /> Settings
                  </a>
                  <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left mt-1">
                    <LogOut size={16} /> Sign out
                  </button>
                </div>
              )}
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
