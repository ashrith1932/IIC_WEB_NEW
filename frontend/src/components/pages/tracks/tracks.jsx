const tracks = [
  { 
    title: "AI & Machine Learning", 
    tag: "Future Tech", 
    color: "#28282ac1", 
    image: "https://i.pinimg.com/736x/a6/fc/f0/a6fcf0dae65b000ab3bbf86ab897aa38.jpg" 
  },
  { 
    title: "Web3 & Decentralized", 
    tag: "Blockchain", 
    color: "#20201f", 
    image: "https://i.pinimg.com/1200x/a0/ed/80/a0ed808cce10ada0684b56ec4fb9ee58.jpg" 
  },
  { 
    title: "Robotics", 
    tag: "Mechanics", 
    color: "#363333", 
    image: "https://i.pinimg.com/1200x/a9/99/eb/a999eb41892f36f412a519b9b4efb0ca.jpg" 
  },
  { 
    title: "Cyber Security", 
    tag: "Infrastructure", 
    color: "#1e1e21", 
    image: "https://i.pinimg.com/1200x/96/ea/8c/96ea8c82a99b6be591785d8994a9bb3d.jpg" 
  },
  { 
    title: "Science & Bio", 
    tag: "Science", 
    color: "#1e1c1d", 
    image: "https://i.pinimg.com/736x/10/6a/a0/106aa045fe2f1b782756c0b22bd4b5e9.jpg" 
  },
  { 
    title: "Hardware", 
    tag: "Electronics", 
    color: "#373937", 
    image: "https://i.pinimg.com/1200x/20/f6/e7/20f6e7942c1221a889464b71d2fac7eb.jpg" 
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 animate-fade-in">
        <h2 className="text-5xl font-black tracking-tighter uppercase italic text-black">
          Explore <br /> Tracks
        </h2>
        <p className="max-w-md text-zinc-500 font-medium">
          Whether you're a beginner or a pro, we have a track designed specifically for your skills and interests.
        </p>
      </div>

      {/* Landscape + smaller grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tracks.map((track, i) => (
          <div
            key={i}
            className="track-card relative aspect-[16/9] overflow-hidden border-2 border-black group cursor-pointer"
            style={{ 
              backgroundColor: track.color,
              animationDelay: `${i * 0.12}s`
            }}
          >
            {/* IMAGE */}
            <img
              src={track.image}
              alt={track.title}
              className="
                absolute inset-0 w-full h-full
                object-contain
                p-6
                transition-transform duration-700
                group-hover:scale-105
              "
            />

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-3 group-hover:translate-y-0 transition-transform">
              <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-2">
                {track.tag}
              </span>
              <h3 className="text-xl font-black text-white uppercase italic leading-tight">
                {track.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .track-card {
          opacity: 0;
          animation: scale-in 0.8s ease-out forwards;
          will-change: transform, opacity;
        }

        .track-card,
        .animate-fade-in {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
