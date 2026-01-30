import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SolarSystem from "../../solarsystem";
import ExtrudedButton from "../../extrudedbutton";

export default function Hero() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamSize, setTeamSize] = useState(2);
  const [formData, setFormData] = useState({
    email: "",
    track: "",
    members: ["", ""]
  });

  useEffect(() => {
    if (!textRef.current) return;
    const chars = textRef.current.querySelectorAll(".char");
    
    const tl = gsap.timeline();
    
    tl.fromTo(chars, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)" }
    );

    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      duration: 0.5,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const tracks = [
    "AI & Machine Learning",
    "Web3 & Decentralized",
    "Robotics",
    "Cyber Security",
    "Science & Bio",
    "Hardware"
  ];

  const handleTeamSizeChange = (size) => {
    setTeamSize(size);
    const newMembers = Array(size).fill("").map((_, i) => formData.members[i] || "");
    setFormData({ ...formData, members: newMembers });
  };

  const handleMemberChange = (index, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = value;
    setFormData({ ...formData, members: newMembers });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
    setIsModalOpen(false);
    // Reset form
    setFormData({
      email: "",
      track: "",
      members: Array(teamSize).fill("")
    });
  };

  const word = "TECHCRUNCH'25";

  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white px-6 pt-20">
        <div className="absolute inset-0 z-0 opacity-78">
          <SolarSystem />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
            The Premier Tech Festival of MNNIT
          </p>
          
          <h1 
            ref={textRef}
            className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter text-black flex flex-wrap justify-center"
          >
            {word.split("").map((char, i) => (
              <span key={i} className="char">
                {char === "'" ? "'" : char}
              </span>
            ))}
            <span ref={cursorRef} className="ml-1 text-yellow-400">|</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-zinc-600 font-medium">
            Dive into the future of technology with immersive workshops, high-stakes hackathons, and visionary speakers.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <div onClick={() => setIsModalOpen(true)}>
              <ExtrudedButton text="Register Now" bgColor="#ffd93d" />
            </div>
            <a className="px-8 py-4 font-bold uppercase tracking-widest text-black border-b-2 border-black hover:bg-zinc-100 transition-colors"
               href="#schedule"
            >
              View Schedule
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-black to-transparent rounded-full" />
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm pt-24">
          <div className="relative w-full max-w-lg max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-none shadow-2xl border-4 border-black">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-yellow-300 p-4 border-b-4 border-black">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-black">
                    Team Registration
                  </h2>
                  <p className="mt-0.5 text-xs font-bold text-black/70">
                    TECHCRUNCH'25
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center bg-black text-yellow-400 font-black text-xl hover:bg-zinc-800 transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-black">
                  Team Lead Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-black bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="your@email.com"
                />
              </div>

              {/* Team Size */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-black">
                  Team Size
                </label>
                <div className="flex gap-2">
                  {[2, 3, 4].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleTeamSizeChange(size)}
                      className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider border-2 border-black transition-all ${
                        teamSize === size
                          ? 'bg-black text-yellow-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-white text-black hover:bg-zinc-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-black">
                  Team Members
                </label>
                {formData.members.map((member, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-yellow-400 border-2 border-black font-black text-xs">
                      {index + 1}
                    </div>
                    <input
                      type="text"
                      required
                      value={member}
                      onChange={(e) => handleMemberChange(index, e.target.value)}
                      className="w-full pl-12 pr-3 py-2 text-sm border-2 border-black bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                      placeholder="Member Name"
                    />
                  </div>
                ))}
              </div>

              {/* Track Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-black">
                  Choose Your Track
                </label>
                <select
                  required
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-black bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25rem'
                  }}
                >
                  <option value="">Select a track</option>
                  {tracks.map((track) => (
                    <option key={track} value={track}>
                      {track}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-black border-2 border-black hover:bg-zinc-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-widest bg-yellow-400 text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}