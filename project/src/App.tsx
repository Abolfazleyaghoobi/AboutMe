import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Rocket, Stars, Moon, Sun } from 'lucide-react';

function App() {
  const rocketRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      defaults: { duration: 2, ease: "power2.inOut" }
    });

    // Initial setup
    gsap.set([moonRef.current, sunRef.current, starsRef.current], { opacity: 0 });
    gsap.set(rocketRef.current, { y: 100 });

    // Create the animation sequence
    timeline
      .to(rocketRef.current, {
        y: -20,
        rotation: 10,
      })
      .to(starsRef.current, {
        opacity: 1,
        stagger: 0.2,
      }, "-=1.5")
      .to(moonRef.current, {
        opacity: 1,
        x: 20,
        rotation: 360,
      })
      .to(sunRef.current, {
        opacity: 1,
        x: -20,
        rotation: -360,
      }, "-=1")
      .to(rocketRef.current, {
        y: 100,
        rotation: -10,
      })
      .to([moonRef.current, sunRef.current, starsRef.current], {
        opacity: 0,
        stagger: 0.2,
      }, "-=1");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 flex items-center justify-center">
      <div 
        ref={containerRef}
        className="relative w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm p-8"
      >
        <div ref={starsRef} className="absolute inset-0 flex items-center justify-center">
          <Stars className="text-yellow-200 w-8 h-8 absolute top-1/4 left-1/4" />
          <Stars className="text-yellow-200 w-6 h-6 absolute top-1/3 right-1/3" />
          <Stars className="text-yellow-200 w-7 h-7 absolute bottom-1/4 right-1/4" />
        </div>
        
        <div ref={moonRef} className="absolute top-8 right-8">
          <Moon className="text-gray-200 w-12 h-12" />
        </div>
        
        <div ref={sunRef} className="absolute bottom-8 left-8">
          <Sun className="text-yellow-400 w-12 h-12" />
        </div>
        
        <div ref={rocketRef} className="absolute left-1/2 -translate-x-1/2">
          <Rocket className="text-white w-16 h-16" />
        </div>
      </div>
    </div>
  );
}

export default App;