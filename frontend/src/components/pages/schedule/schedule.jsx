const schedule = [
  // DAY 01 – GRAND KICKOFF
  { time: "09:15 AM", event: "Opening Ceremony & Light Show", day: "Day 01" },
  { time: "11:30 AM", event: "Organiser Summit & Vision Talk", day: "Day 01" },
  { time: "02:00 PM", event: "Hackathon Begins ", day: "Day 01" },
  { time: "06:00 PM", event: "CyberQuest", day: "Day 01" },

  // DAY 02 – SKILLS + BATTLES
  { time: "10:00 AM", event: "Workshop: Web3 Development", day: "Day 02" },
  { time: "01:00 PM", event: "BIO-QUIZ-War ", day: "Day 02" },
  { time: "03:00 PM", event: "Robo-Wars Round 1 ", day: "Day 02" },
  { time: "07:00 PM", event: "Open Mic & Meme Night ", day: "Day 02" },

  // DAY 03 – TECH & TASTE
  { time: "11:00 AM", event: "Final Pitch Deck Submissions", day: "Day 03" },
  { time: "01:00 PM", event: "FoodFEST ", day: "Day 03" },
  { time: "04:00 PM", event: "Startup Stories & Failure Talks", day: "Day 03" },
  { time: "08:00 PM", event: "DJ Night ", day: "Day 03" },

  // DAY 04 – CODE & COMBAT
  { time: "10:00 AM", event: "CODEJAM TDM ", day: "Day 04" },
  { time: "03:00 PM", event: "Robo-Wars Round 2 ", day: "Day 04" },
  { time: "06:00 PM", event: "Gaming Arena (Valorant / FIFA)", day: "Day 04" },

  // DAY 05 – CREATIVITY DAY
  { time: "10:30 AM", event: "Design Sprint & UI Battles", day: "Day 05" },
  { time: "02:00 PM", event: "Reel-Making & Photography Contest", day: "Day 05" },
  { time: "05:30 PM", event: "Cosplay & Theme Walk", day: "Day 05" },

  // DAY 06 – CHILL + CHAOS
  { time: "11:00 AM", event: "Treasure Hunt ", day: "Day 06" },
  { time: "03:00 PM", event: "Surprise Mystery Event ", day: "Day 06" },
  { time: "07:00 PM", event: "Bonfire + Acoustic Night", day: "Day 06" },

  // DAY 07 – FINALE
  { time: "11:00 AM", event: "Hackathon Demo Day", day: "Day 07" },
  { time: "03:00 PM", event: "Grand Award Ceremony", day: "Day 07" },
  { time: "05:00 PM", event: "Closing Ceremony & After-Movie", day: "Day 07" }
]


export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-4">
            The Agenda
          </h2>
          <div className="w-20 h-2 bg-yellow-400 mx-auto" />
        </div>

        <div className="space-y-4 schedule-wrapper">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="schedule-item group flex flex-col md:flex-row items-center justify-between p-6 border-b border-zinc-800 cursor-default"
              style={{ 
                animationDelay: `${i * 0.08}s`,
                '--hover-bg': 'rgba(24, 24, 27, 0.5)',
              }}
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-zinc-500 font-bold text-sm uppercase tracking-widest">
                  {item.day}
                </span>
                <span className="text-3xl font-black italic">
                  {item.time}
                </span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-yellow-400 transition-colors duration-150">
                {item.event}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ================= Animations ================= */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        /* ================= 3D DEPTH SETUP ================= */
        .schedule-wrapper {
          perspective: 1000px;
        }

        .schedule-item {
          opacity: 0;
          animation: slide-in 0.5s ease-out forwards;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background-color 0.15s ease;
          transform-style: preserve-3d;
        }

        /* ================= HOVER: MOVE TOWARDS USER ================= */
        .schedule-item:hover {
          background-color: var(--hover-bg);
          transform: translateZ(40px) scale(1.03);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        /* Slight push-back for non-hovered items */
        .schedule-wrapper:hover .schedule-item:not(:hover) {
          transform: translateZ(-10px) scale(0.98);
          opacity: 0.6;
        }

        /* GPU acceleration */
        .schedule-item,
        .animate-fade-in {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }
      `}</style>

    </section>
  );
}