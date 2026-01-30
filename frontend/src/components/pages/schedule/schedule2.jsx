import { useState } from "react";
import { 
  Sparkles, 
  Code, 
  Utensils, 
  Gamepad2, 
  Palette, 
  Map, 
  Trophy,
  Zap,
  Users,
  Rocket,
  Swords,
  Music,
  Camera,
  Gift,
  Flame,
  Award,
  Film,
  X,
  CheckCircle2,
  Lock,
  Clock
} from "lucide-react";

const eventsByDay = [
  {
    day: 1,
    title: "Grand Kickoff",
    icon: Sparkles,
    color: "#3b82f6",
    completed: true,
    events: [
      { time: "09:15 AM", name: "Opening Ceremony & Light Show", icon: Sparkles },
      { time: "11:30 AM", name: "Organiser Summit & Vision Talk", icon: Users },
      { time: "02:00 PM", name: "Hackathon Begins 🚀", icon: Rocket },
      { time: "06:00 PM", name: "Ice-Breaker Games & Networking", icon: Users }
    ]
  },
  {
    day: 2,
    title: "Skills + Battles",
    icon: Swords,
    color: "#8b5cf6",
    completed: true,
    events: [
      { time: "10:00 AM", name: "Workshop: Web3 Development", icon: Code },
      { time: "01:00 PM", name: "QUIZ-War ⚔️", icon: Zap },
      { time: "03:00 PM", name: "Robo-Wars Round 1 🤖", icon: Swords },
      { time: "07:00 PM", name: "Open Mic & Meme Night 😂", icon: Music }
    ]
  },
  {
    day: 3,
    title: "Tech & Taste",
    icon: Utensils,
    color: "#ec4899",
    completed: false,
    events: [
      { time: "11:00 AM", name: "Final Pitch Deck Submissions", icon: Code },
      { time: "01:00 PM", name: "FoodFEST 🍕🌮", icon: Utensils },
      { time: "04:00 PM", name: "Startup Stories & Failure Talks", icon: Users },
      { time: "08:00 PM", name: "DJ Night 🎧", icon: Music }
    ]
  },
  {
    day: 4,
    title: "Code & Combat",
    icon: Gamepad2,
    color: "#f59e0b",
    completed: false,
    events: [
      { time: "10:00 AM", name: "cODEJAM TDM 💻", icon: Code },
      { time: "03:00 PM", name: "Robo-Wars Round 2 🤖🔥", icon: Flame },
      { time: "06:00 PM", name: "Gaming Arena (Valorant / FIFA)", icon: Gamepad2 }
    ]
  },
  {
    day: 5,
    title: "Creativity Day",
    icon: Palette,
    color: "#10b981",
    completed: false,
    events: [
      { time: "10:30 AM", name: "Design Sprint & UI Battles", icon: Palette },
      { time: "02:00 PM", name: "Reel-Making & Photography Contest", icon: Camera },
      { time: "05:30 PM", name: "Cosplay & Theme Walk", icon: Gift }
    ]
  },
  {
    day: 6,
    title: "Chill + Chaos",
    icon: Map,
    color: "#06b6d4",
    completed: false,
    events: [
      { time: "11:00 AM", name: "Treasure Hunt 🗺️", icon: Map },
      { time: "03:00 PM", name: "Surprise Mystery Event 😈", icon: Gift },
      { time: "07:00 PM", name: "Bonfire + Acoustic Night 🔥🎸", icon: Flame }
    ]
  },
  {
    day: 7,
    title: "Grand Finale",
    icon: Trophy,
    color: "#f43f5e",
    completed: false,
    events: [
      { time: "11:00 AM", name: "Hackathon Demo Day", icon: Code },
      { time: "03:00 PM", name: "Grand Award Ceremony 🏆", icon: Award },
      { time: "05:00 PM", name: "Closing Ceremony & After-Movie", icon: Film }
    ]
  }
];

export default function Schedule2() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);

  const completedCount = eventsByDay.filter(d => d.completed).length;

  // Generate curved path points
  const generatePath = () => {
    const points = [];
    const width = 1000;
    const height = 400;
    const spacing = width / (eventsByDay.length - 1);
    
    eventsByDay.forEach((_, i) => {
      const x = i * spacing + 50;
      const y = i % 2 === 0 ? height / 3 : (2 * height) / 3;
      points.push({ x, y });
    });
    
    let pathD = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX = (prev.x + curr.x) / 2;
      const cpY1 = prev.y;
      const cpY2 = curr.y;
      
      pathD += ` Q ${cpX} ${cpY1}, ${cpX} ${(cpY1 + cpY2) / 2} T ${curr.x} ${curr.y}`;
    }
    
    return { pathD, points };
  };

  const { pathD, points } = generatePath();

  return (
    <section id="schedule" className="py-20 bg-white px-6 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            YOUR 7-DAY ADVENTURE
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Click on any day to explore the full schedule
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border-2 border-gray-200">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-bold text-gray-900">{completedCount}/{eventsByDay.length}</span>
            <span className="text-gray-600">Days Completed</span>
          </div>
        </div>

        {/* Progress Map */}
        <div className="relative mb-20" style={{ minHeight: '550px' }}>
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none" 
            viewBox="0 0 1100 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            
            {/* Gray background path */}
            <path
              d={pathD}
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Colored completed path */}
            {completedCount > 0 && (
              <path
                d={pathD}
                stroke="url(#pathGradient)"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="1000"
                strokeDashoffset={1000 - (completedCount / eventsByDay.length) * 1000}
                className="animate-draw"
              />
            )}
            
            {/* Animated dashes */}
            {completedCount > 0 && (
              <path
                d={pathD}
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="15 25"
                className="animate-dash"
                opacity="0.5"
                style={{
                  clipPath: `inset(0 ${100 - (completedCount / eventsByDay.length) * 100}% 0 0)`
                }}
              />
            )}
          </svg>

          {/* Day Nodes */}
          <div className="relative w-full h-full">
            {eventsByDay.map((day, i) => {
              const Icon = day.icon;
              const isCompleted = day.completed;
              const isHovered = hoveredDay === i;
              const isSelected = selectedDay === i;
              const isCurrent = i === completedCount;
              const point = points[i];
              
              return (
                <div
                  key={i}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${(point.x / 1100) * 100}%`,
                    top: `${(point.y / 500) * 100}%`,
                  }}
                  onClick={() => setSelectedDay(selectedDay === i ? null : i)}
                  onMouseEnter={() => setHoveredDay(i)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  <div className="relative">
                    {/* Node Circle */}
                    <div 
                      className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered || isSelected ? 'scale-115' : 'scale-100'
                      }`}
                      style={{
                        backgroundColor: 'white',
                        border: `5px solid ${isCompleted ? day.color : '#d1d5db'}`,
                        boxShadow: isCompleted 
                          ? `0 15px 35px ${day.color}50, 0 0 0 0 ${day.color}20` 
                          : '0 8px 20px rgba(0,0,0,0.08)'
                      }}
                    >
                      <Icon 
                        className="w-11 h-11 transition-all duration-300" 
                        style={{ color: isCompleted ? day.color : '#9ca3af' }}
                      />
                    </div>

                    {/* Completion Badge */}
                    {isCompleted && (
                      <div 
                        className="absolute -top-2 -right-2 w-9 h-9 rounded-full flex items-center justify-center shadow-lg animate-bounce-in"
                        style={{ backgroundColor: day.color }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                    )}

                    {/* Lock Badge */}
                    {!isCompleted && !isCurrent && (
                      <div className="absolute -top-2 -right-2 w-9 h-9 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                    )}

                    {/* Current Day Pulse */}
                    {isCurrent && (
                      <>
                        <div 
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{ 
                            backgroundColor: day.color,
                            opacity: 0.4
                          }}
                        ></div>
                        <div 
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{ 
                            backgroundColor: day.color,
                            opacity: 0.2
                          }}
                        ></div>
                      </>
                    )}
                  </div>

                  {/* Day Label */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
                    <div 
                      className="font-black text-lg mb-1"
                      style={{ color: isCompleted ? day.color : '#6b7280' }}
                    >
                      DAY {day.day}
                    </div>
                    <div className="text-sm text-gray-500 font-semibold">
                      {day.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Detail Popup */}
        {selectedDay !== null && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedDay(null)}
          >
            <div 
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-pop-in"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: `0 25px 70px ${eventsByDay[selectedDay].color}60, 0 0 0 1px ${eventsByDay[selectedDay].color}30`
              }}
            >
              {/* Glossy gradient overlay */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div 
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    background: `linear-gradient(135deg, ${eventsByDay[selectedDay].color} 0%, transparent 70%)`
                  }}
                ></div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent"></div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedDay(null)}
                className="absolute top-5 right-5 w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all z-20 hover:scale-110"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              <div className="relative p-8 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div 
                    className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl"
                    style={{ 
                      backgroundColor: `${eventsByDay[selectedDay].color}20`,
                      border: `4px solid ${eventsByDay[selectedDay].color}40`
                    }}
                  >
                    {(() => {
                      const Icon = eventsByDay[selectedDay].icon;
                      return <Icon className="w-12 h-12" style={{ color: eventsByDay[selectedDay].color }} />;
                    })()}
                  </div>

                  <div className="flex-1">
                    <div 
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white mb-3"
                      style={{ backgroundColor: eventsByDay[selectedDay].color }}
                    >
                      DAY {eventsByDay[selectedDay].day}
                    </div>
                    <h3 className="text-4xl font-black text-gray-900">
                      {eventsByDay[selectedDay].title}
                    </h3>
                  </div>

                  <div className={`px-5 py-2.5 rounded-full flex items-center gap-2 ${
                    eventsByDay[selectedDay].completed 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {eventsByDay[selectedDay].completed ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-bold text-sm">Completed</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        <span className="font-bold text-sm">Upcoming</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Events List */}
                <div className="space-y-3">
                  {eventsByDay[selectedDay].events.map((event, i) => {
                    const EventIcon = event.icon;
                    return (
                      <div 
                        key={i}
                        className="group flex items-center gap-4 p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-200 border-2 border-transparent hover:border-gray-200"
                      >
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                          style={{ 
                            backgroundColor: `${eventsByDay[selectedDay].color}15`,
                            border: `2px solid ${eventsByDay[selectedDay].color}25`
                          }}
                        >
                          <EventIcon className="w-7 h-7" style={{ color: eventsByDay[selectedDay].color }} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <span className="text-sm font-bold text-gray-500">
                              {event.time}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 leading-tight">
                            {event.name}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes dash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 40;
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pop-in {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-draw {
          animation: draw 2.5s ease-out forwards;
        }

        .animate-dash {
          animation: dash 3s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-pop-in {
          animation: pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </section>
  );
}