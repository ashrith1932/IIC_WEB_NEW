import { Cpu, Rocket, Globe, Users, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const features = [
  { icon: Cpu, title: "Cutting Edge", desc: "Experience the latest in AI, Robotics and Web3 technology.", color: "#6366f1" },
  { icon: Rocket, title: "Innovation", desc: "Push your boundaries and build solutions for real-world problems.", color: "#8b5cf6" },
  { icon: Globe, title: "Global Network", desc: "Connect with experts and enthusiasts from across the globe.", color: "#ec4899" },
  { icon: Users, title: "Collaboration", desc: "Work in teams to create impactful products and experiences.", color: "#f59e0b" },
];

const journeyPoints = [
  { title: "Opening Ceremony", time: "Day 1 - 9:00 AM", icon: Sparkles, highlight: true },
  { title: "Hackathon Kickoff", time: "Day 1 - 11:00 AM", icon: Zap },
  { title: "Workshops & Talks", time: "Day 2 - 10:00 AM", icon: Target },
  { title: "Project Showcase", time: "Day 3 - 2:00 PM", icon: TrendingUp },
  { title: "Grand Finale", time: "Day 3 - 6:00 PM", icon: Sparkles, highlight: true },
];

export default function About2() {
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % journeyPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 px-6 overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-300 text-sm font-semibold tracking-wider uppercase">About TechNova</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-6">
            REDEFINING THE{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              DIGITAL FRONTIER
            </span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            TECHNOVA is more than just a tech fest. It's a sanctuary for builders,
            thinkers, and creators who dare to challenge the status quo.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { value: "10+", label: "Events", gradient: "from-purple-500 to-pink-500" },
            { value: "5k+", label: "Attendees", gradient: "from-pink-500 to-orange-500" },
            { value: "500+", label: "Participants", gradient: "from-orange-500 to-yellow-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-card group relative bg-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <span className={`block text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </span>
                <span className="text-zinc-400 font-semibold uppercase tracking-wider text-sm">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Path - Curved Timeline */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Journey</span> Awaits
          </h3>
          
          <div className="relative">
            {/* SVG Curved Path */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ height: "300px" }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <path
                d="M 50 150 Q 250 50, 450 150 T 850 150 Q 1050 50, 1250 150"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                className="animate-dash"
                opacity="0.4"
              />
            </svg>

            {/* Journey Points */}
            <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              {journeyPoints.map((point, i) => {
                const Icon = point.icon;
                const isActive = i === activePoint;
                const offset = i % 2 === 0 ? "mt-0" : "mt-32";
                
                return (
                  <div
                    key={i}
                    className={`journey-point ${offset} relative cursor-pointer group`}
                    onMouseEnter={() => setActivePoint(i)}
                  >
                    {/* Connecting dot */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${i % 2 === 0 ? '-translate-y-8' : 'translate-y-8 top-auto bottom-0'}`}>
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow-lg shadow-purple-500/50' 
                          : 'bg-zinc-700 group-hover:bg-zinc-600'
                      }`}></div>
                    </div>

                    {/* Card */}
                    <div className={`relative bg-zinc-800/80 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 ${
                      isActive 
                        ? 'border-purple-500 shadow-2xl shadow-purple-500/20 scale-105' 
                        : 'border-zinc-700/50 hover:border-zinc-600 hover:scale-102'
                    } ${point.highlight ? 'bg-gradient-to-br from-zinc-800/90 to-purple-900/20' : ''}`}>
                      <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                          : 'bg-zinc-700/50 group-hover:bg-zinc-700'
                      }`}>
                        <Icon className={`w-7 h-7 transition-all duration-500 ${
                          isActive ? 'text-white scale-110' : 'text-zinc-400 group-hover:text-zinc-300'
                        }`} />
                      </div>
                      <h4 className={`text-lg font-bold mb-2 transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                      }`}>
                        {point.title}
                      </h4>
                      <p className="text-zinc-500 text-sm font-medium">{point.time}</p>
                      
                      {point.highlight && (
                        <div className="absolute -top-3 -right-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
                          <div className="absolute top-0 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="feature-card-modern group relative bg-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top left, ${f.color}15, transparent 70%)`
                  }}
                ></div>
                
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${f.color}20, ${f.color}10)`,
                      border: `2px solid ${f.color}30`
                    }}
                  >
                    <Icon className="w-8 h-8 transition-all duration-500" style={{ color: f.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${f.color}, ${f.color}dd)`
                      }}>
                    {f.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                    {f.desc}
                  </p>
                </div>

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-full rounded-bl-full" 
                       style={{ background: `linear-gradient(135deg, ${f.color}20, transparent)` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .bg-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up-scale {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .stat-card {
          opacity: 0;
          animation: slide-up-scale 0.8s ease-out forwards;
        }

        .feature-card-modern {
          opacity: 0;
          animation: slide-up-scale 1s ease-out forwards;
        }

        .journey-point {
          opacity: 0;
          animation: slide-up-scale 0.8s ease-out forwards;
        }

        .animate-dash {
          stroke-dashoffset: 0;
          animation: dash 20s linear infinite;
        }

        /* GPU acceleration */
        .stat-card,
        .feature-card-modern,
        .journey-point,
        .animate-fade-in {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}