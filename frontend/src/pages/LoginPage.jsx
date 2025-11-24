import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import api from '../utils/api';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post('/users/login', formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
       {/* Background Decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
      
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative z-10">
        <div className="p-8">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-lg">F</div>
              <span className="font-bold text-xl tracking-tight text-slate-900">FinTwin</span>
            </Link>
            <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
            <p className="text-slate-500 mt-2">Enter your credentials to access your account.</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-xs font-medium text-slate-600 hover:text-slate-900">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              disabled={isLoading}
              className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
              {!isLoading && <ArrowRight size={16} />}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-slate-900 hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
