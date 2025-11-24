import { ArrowRight, Home, TrendingUp, Plus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative z-10 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Tagline / Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold mb-8 animate-fade-in opacity-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          AI-Powered Financial Engine v1.0
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 text-slate-900 animate-fade-in delay-100 opacity-0">
          Build wealth,<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">without the guesswork.</span>
        </h1>

        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in delay-200 opacity-0">
          Create a digital twin of your financial future. Simulate goals, optimize KiwiSaver, and receive independent, data-driven advice.
        </p>

        {/* CTAs */}
        <div className="flex justify-center gap-4 mb-24 animate-fade-in delay-300 opacity-0">
          <a href="/register" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:scale-105 transition-all duration-200 shadow-xl shadow-slate-900/10 flex items-center gap-2">
            Start Simulation
            <ArrowRight className="w-5 h-5" />
          </a>
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
            View Demo
          </button>
        </div>

        {/* The Clean 3D Mockup */}
        <div className="perspective-container max-w-6xl mx-auto animate-fade-in delay-300 opacity-0">
          <div className="tilt-card bg-white border border-slate-200 rounded-2xl p-1.5 shadow-2xl relative">
            {/* Window Frame */}
            <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
              {/* Browser Header */}
              <div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <div className="ml-auto flex gap-3">
                  <div className="w-20 h-2 bg-slate-100 rounded-full"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-12 h-[600px] bg-slate-50">
                {/* Sidebar */}
                <div className="col-span-2 bg-white border-r border-slate-100 p-4 hidden md:flex flex-col gap-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg mb-4"></div>
                  <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                  <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                  <div className="mt-auto h-12 w-full bg-slate-50 rounded-lg border border-slate-100"></div>
                </div>

                {/* Main Area */}
                <div className="col-span-12 md:col-span-10 p-8">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="text-sm text-slate-400 font-medium mb-1">Total Projection</div>
                      <div className="text-4xl font-bold text-slate-900">$1,240,500</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">10Y</div>
                      <div className="px-3 py-1 bg-slate-900 text-white rounded-md text-xs font-medium">30Y</div>
                    </div>
                  </div>

                  {/* Chart Area (Clean Lines) */}
                  <div className="h-64 w-full bg-white rounded-xl border border-slate-100 p-6 mb-6 relative overflow-hidden shadow-sm">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                      <div className="w-full h-px bg-slate-50"></div>
                      <div className="w-full h-px bg-slate-50"></div>
                      <div className="w-full h-px bg-slate-50"></div>
                      <div className="w-full h-px bg-slate-50"></div>
                    </div>

                    {/* The Graph (CSS Bars) */}
                    <div className="absolute bottom-6 left-6 right-6 top-12 flex items-end gap-1">
                      <div className="flex-1 bg-slate-100 h-[20%] rounded-sm"></div>
                      <div className="flex-1 bg-slate-100 h-[25%] rounded-sm"></div>
                      <div className="flex-1 bg-slate-100 h-[30%] rounded-sm"></div>
                      <div className="flex-1 bg-slate-200 h-[40%] rounded-sm"></div>
                      <div className="flex-1 bg-slate-200 h-[45%] rounded-sm"></div>
                      <div className="flex-1 bg-slate-300 h-[55%] rounded-sm"></div>
                      <div className="flex-1 bg-slate-400 h-[65%] rounded-sm"></div>
                      <div className="flex-1 bg-slate-600 h-[80%] rounded-sm"></div>
                      <div className="flex-1 bg-slate-800 h-[95%] rounded-sm relative group">
                         {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Goal Reached
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Cards */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                        <Home className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-semibold">Housing</div>
                      <div className="text-xs text-slate-400 mt-1">On track (+2%)</div>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-3">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-semibold">KiwiSaver</div>
                      <div className="text-xs text-slate-400 mt-1">Aggressive Fund</div>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center cursor-pointer hover:bg-slate-50 transition">
                      <div className="w-8 h-8 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-2">
                        <Plus className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-medium text-slate-500">Add Goal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
