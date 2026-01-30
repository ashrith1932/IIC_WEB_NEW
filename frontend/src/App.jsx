import Hero from "./components/pages/home/hero";
import About from "./components/pages/about/about";
import Tracks from "./components/pages/tracks/tracks";
import Schedule from "./components/pages/schedule/schedule";
import { useEffect, useRef, useState } from "react";
import About2 from "./components/pages/about/about2";
import Schedule2 from "./components/pages/schedule/schedule2";

export default function App() {
  const cursorRef = useRef(null);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBg, setNavBg] = useState('rgba(255, 255, 255, 0.95)'); // Changed: Start with white background
  const [scrollActivated, setScrollActivated] = useState(false);


  // Smooth cursor with lerp (no GSAP needed)
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrameId;
    
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth lerp interpolation
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = 
          `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    animate();
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Smart navbar: hide on scroll down, show on scroll up
  useEffect(() => {
  let ticking = false;
  const NAV_HEIGHT = 100; // adjust if needed

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // 🔥 Activate scroll effects ONLY after crossing navbar
        if (!scrollActivated && currentScrollY > NAV_HEIGHT) {
          setScrollActivated(true);
        }

        // ⛔ Before activation: keep navbar visible with white background
        if (!scrollActivated) {
          setShowNav(true);
          setNavBg('rgba(255, 255, 255, 0.95)'); // Changed: White background instead of transparent
          setLastScrollY(currentScrollY);
          ticking = false;
          return;
        }

        // ✅ AFTER activation → smart navbar logic
        if (currentScrollY < lastScrollY || currentScrollY < NAV_HEIGHT) {
          setShowNav(true);
        } else if (currentScrollY > lastScrollY) {
          setShowNav(false);
        }

        // Section-based background logic
        const scrollPosition = currentScrollY + NAV_HEIGHT;
        const aboutSection = document.getElementById('about');
        const scheduleSection = document.getElementById('schedule');

        let isDarkSection = false;

        if (aboutSection) {
          const top = aboutSection.offsetTop;
          const bottom = top + aboutSection.offsetHeight;
          if (scrollPosition >= top && scrollPosition <= bottom) {
            isDarkSection = true;
          }
        }

        if (scheduleSection) {
          const top = scheduleSection.offsetTop;
          const bottom = top + scheduleSection.offsetHeight;
          if (scrollPosition >= top && scrollPosition <= bottom) {
            isDarkSection = true;
          }
        }

        if (currentScrollY < NAV_HEIGHT) {
          setNavBg('rgba(255, 255, 255, 0.95)'); // Changed: White background instead of transparent
        } else if (isDarkSection) {
          setNavBg('rgba(0, 0, 0, 0.8)');
        } else {
          setNavBg('rgba(255, 255, 255, 0.95)');
        }

        setLastScrollY(currentScrollY);
        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY, scrollActivated]);


  return (
    <main className="relative min-h-screen bg-white">
      {/* Custom Cursor - Pure CSS, No GSAP */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 bg-yellow-400 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ 
          mixBlendMode: 'difference',
          transform: 'translate3d(0, 0, 0) translate(-50%, -50%)',
        }}
      />

      {/* Smart Navigation - Shows/hides on scroll */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 flex items-center justify-between transition-all duration-300 backdrop-blur-md border-b ${
          navBg === 'transparent' ? 'border-transparent' : 'border-white/10'
        }`}
        style={{ 
          backgroundColor: navBg,
          transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div 
          className="text-2xl font-black italic tracking-tighter transition-colors"
          style={{
            color: navBg.includes('255, 255, 255') ? '#000' : '#fff',
          }}
        >
          T&apos;25
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
          <a 
            href="#about" 
            className="hover:text-yellow-400 transition-colors"
            style={{
              color: navBg.includes('255, 255, 255') ? '#000' : '#fff',
            }}
          >
            About
          </a>
          <a 
            href="#tracks" 
            className="hover:text-yellow-400 transition-colors"
            style={{
              color: navBg.includes('255, 255, 255') ? '#000' : '#fff',
            }}
          >
            Tracks
          </a>
          <a 
            href="#schedule" 
            className="hover:text-yellow-400 transition-colors"
            style={{
              color: navBg.includes('255, 255, 255') ? '#000' : '#fff',
            }}
          >
            Schedule
          </a>
          <a 
            href="#register" 
            className="hover:text-yellow-400 transition-colors"
            style={{
              color: navBg.includes('255, 255, 255') ? '#000' : '#fff',
            }}
          >
            Register
          </a>
        </div>
      </nav>

      <Hero />
      <About />
      <Tracks />
      <Schedule />

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t-2 border-black bg-white z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex-shrink-0">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 uppercase text-black">
              TechCrunch
            </h2>
            <p className="max-w-xs text-zinc-500 font-medium leading-relaxed">
              Empowering the next generation of innovators at MNNIT. Join us for a week of pure creation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-4">
              <h4 className="font-black uppercase text-xs tracking-widest text-zinc-400">
                Socials
              </h4>
              <ul className="space-y-2 font-bold uppercase text-sm text-black">
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-yellow-400 transition-colors text-black"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/ashrith1932/IIC_WEB_NEW" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-yellow-400 transition-colors text-black"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/ashrith-reddy-5b3b57312/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-yellow-400 transition-colors text-black"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-black uppercase text-xs tracking-widest text-zinc-400">
                Legal
              </h4>
              <ul className="space-y-2 font-bold uppercase text-sm text-black">
                <li>
                  <a 
                    href="#privacy" 
                    className="hover:underline hover:text-yellow-400 transition-colors text-black"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a 
                    href="#conduct" 
                    className="hover:underline hover:text-yellow-400 transition-colors text-black"
                  >
                    Conduct
                  </a>
                </li>
                <li>
                  <a 
                    href="#terms" 
                    className="hover:underline hover:text-yellow-400 transition-colors text-black"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          <span>© 2025 TechCrunch MNNIT</span>
          <span>Designed with ❤️ Tummala Ashrith Reddy</span>
          <span>tummalaashrithreddy2391@gmail.com</span>
        </div>
      </footer>
    </main>
  );
}