import MainLayout from '../components/layout/MainLayout';
import { Plus, TrendingUp, AlertCircle, ArrowUpRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Financial Health</h1>
            <p className="text-slate-500 mt-1">Welcome back, Lucas. Here's your financial overview.</p>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-800 transition flex items-center gap-2 shadow-lg shadow-slate-900/10">
            <Plus size={16} />
            New Goal
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <TrendingUp size={20} />
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <ArrowUpRight size={12} /> +1.2%
              </span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-1">Total Net Worth</div>
            <div className="text-3xl font-bold text-slate-900">$124,592</div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                <TargetIcon />
              </div>
              <span className="text-xs font-medium text-slate-500">4 on track</span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-1">Goal Completion</div>
            <div className="text-3xl font-bold text-slate-900">68%</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <AlertCircle size={20} />
              </div>
              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Urgent</span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-1">Next Milestone</div>
            <div className="text-3xl font-bold text-slate-900">15 Days</div>
            <div className="text-xs text-slate-400 mt-1">Emergency Fund Goal</div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Wealth Projection</h2>
                <p className="text-sm text-slate-500">Shadow Ledger vs. Actual</p>
              </div>
              <button className="text-sm text-slate-600 hover:text-slate-900 font-medium border border-slate-200 px-3 py-1 rounded-lg">
                Sync Balance
              </button>
            </div>
            
            {/* Placeholder Chart */}
            <div className="h-80 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
              <TrendingUp size={48} className="mb-4 opacity-50" />
              <span className="text-sm font-medium">Interactive Wealth Chart (Recharts)</span>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6">
             {/* Alert Card */}
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
              <h3 className="font-bold text-orange-800 flex items-center gap-2 mb-2">
                <AlertCircle size={18} />
                Action Required
              </h3>
              <p className="text-sm text-orange-700 mb-4">You are <strong>$200 behind</strong> on your KiwiSaver contribution for this month.</p>
              <button className="w-full bg-white border border-orange-200 text-orange-700 text-xs font-bold py-2 rounded-lg hover:bg-orange-100 transition">
                Update Contribution
              </button>
            </div>

            {/* Goal List */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Active Goals</h3>
              <div className="space-y-5">
                <GoalItem name="First Home" progress={45} status="On Track" color="green" />
                <GoalItem name="Europe Trip" progress={20} status="At Risk" color="orange" />
                <GoalItem name="New Car" progress={70} status="On Track" color="green" />
              </div>
              <button className="w-full mt-6 text-sm text-slate-600 hover:text-slate-900 font-medium py-2 border-t border-slate-100">
                View All Goals
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Helper Components
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const GoalItem = ({ name, progress, status, color }) => {
  const statusColors = {
    green: "text-green-600 bg-green-50",
    orange: "text-orange-600 bg-orange-50",
  };
  
  const barColors = {
    green: "bg-green-500",
    orange: "bg-orange-500",
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-slate-700">{name}</span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[color]}`}>{status}</span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${barColors[color]}`} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Dashboard;
