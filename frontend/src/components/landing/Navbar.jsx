import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-lg">F</div>
        <span className="font-bold text-xl tracking-tight text-slate-900">FinTwin</span>
      </div>

      <div className="hidden md:flex gap-8 text-slate-500 text-sm font-medium">
        <a href="#" className="hover:text-slate-900 transition-colors">Simulators</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Methodology</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
      </div>

      <div className="hidden md:flex gap-3">
        <a href="/login" className="text-slate-600 hover:text-slate-900 px-4 py-2 text-sm font-medium transition">Log in</a>
        <a href="/register" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20">Get Started</a>
      </div>

      <div className="md:hidden">
         <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden border-t border-slate-100">
            <a href="#" className="text-slate-600 font-medium">Simulators</a>
            <a href="#" className="text-slate-600 font-medium">Methodology</a>
            <a href="#" className="text-slate-600 font-medium">Pricing</a>
            <hr className="border-slate-100" />
            <a href="/login" className="text-slate-600 font-medium">Log in</a>
            <a href="/register" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center">Get Started</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
