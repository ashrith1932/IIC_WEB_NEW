import { Cpu, Rocket, Globe, Users } from "lucide-react";

const features = [
  { icon: Cpu, title: "Cutting Edge", desc: "Experience the latest in AI, Robotics and Web3 technology." },
  { icon: Rocket, title: "Innovation", desc: "Push your boundaries and build solutions for real-world problems." },
  { icon: Globe, title: "Global Network", desc: "Connect with experts and enthusiasts from across the Country." },
  { icon: Users, title: "Collaboration", desc: "Work in teams to create impactful products and experiences." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-black tracking-tight text-black mb-6">
              REDEFINING THE <br />
              <span className="text-zinc-400 italic font-light">
                DIGITAL FRONTIER
              </span>
            </h2>

            <p className="text-xl text-zinc-600 leading-relaxed mb-8">
              TECHCRUNCH is more than just a tech fest. It's a sanctuary for builders,
              thinkers, and creators who dare to challenge the status quo.
              Join thousands of participants for a 7-day journey into the heart of innovation.
            </p>

            <div className="flex gap-4">
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0_#000]">
                <span className="block text-3xl font-bold text-black opacity-100">
                    10+
                </span>
                <span className="text-sm text-zinc-500 font-bold uppercase">
                  Events
                </span>
              </div>
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0_#000]">
                <span className="block text-3xl font-bold text-black opacity-100">
                    5k+
                </span>
                <span className="text-sm text-zinc-500 font-bold uppercase">
                  Attendees
                </span>
              </div>
              <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0_#000]">
                <span className="block text-3xl font-bold text-black opacity-100">
                    500+
                </span>
                <span className="text-sm text-zinc-500 font-bold uppercase">
                  Participents
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="feature-card p-8 bg-white border-2 border-black hover:shadow-[8px_8px_0_#ffd93d] transition-all duration-300 group"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <Icon className="w-12 h-12 mb-4 text-black group-hover:scale-110 transition-transform" />
                  <h3 className="block text-xl font-bold mb-2 uppercase tracking-tight text-black opacity-100">
                    {f.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Pure CSS scroll-triggered animations */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .feature-card {
          opacity: 0;
          animation: slide-up 1s ease-out forwards;
        }

        /* GPU acceleration for smooth performance */
        .feature-card,
        .animate-fade-in-up {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform, opacity;
        }

        /* Remove will-change after animation completes */
        .feature-card:nth-child(4) {
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}
