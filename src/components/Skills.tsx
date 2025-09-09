import React, { useEffect, useRef, useCallback, useMemo } from "react";
import Siema from "siema";
import { skills } from "@assets/icons";

const Skills: React.FC = () => {
  const siemaRef = useRef<HTMLDivElement>(null);
  const siemaInstance = useRef<any>(null);
  const cleanupRef = useRef<(() => void)[]>([]);

  // Memoize skill items to prevent re-renders
  const skillItems = useMemo(() => skills, []);

  // Optimized Siema initialization
  const initializeSiema = useCallback(() => {
    if (!siemaRef.current) return null;

    try {
      const siema = new Siema({
        selector: siemaRef.current,
        duration: 150, // Reduced from 200ms
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Optimized easing
        perPage: {
          1280: 4,
          1024: 4,
          768: 3,
          640: 2,
          0: 2,
        },
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        // Remove onInit callback to reduce overhead
      });

      return siema;
    } catch (error) {
      console.error("Siema initialization failed:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    let siemaAutoplay: NodeJS.Timeout | null = null;

    // Use requestAnimationFrame for optimal timing
    const initializeCarousels = () => {
      siemaInstance.current = initializeSiema();

      // Setup autoplay for Siema only after successful initialization
      if (siemaInstance.current) {
        siemaAutoplay = setInterval(() => {
          if (siemaInstance.current) {
            siemaInstance.current.next();
          }
        }, 3000);
      }
    };

    // Use requestAnimationFrame instead of setTimeout for better performance
    const rafId = requestAnimationFrame(initializeCarousels);

    // Optimized resize handler with throttling
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (siemaInstance.current) {
          siemaInstance.current.resizeHandler();
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Store cleanup functions
    cleanupRef.current = [
      () => cancelAnimationFrame(rafId),
      () => {
        if (siemaAutoplay) clearInterval(siemaAutoplay);
      },
      () => {
        if (siemaInstance.current) {
          siemaInstance.current.destroy();
          siemaInstance.current = null;
        }
      },
      () => window.removeEventListener("resize", handleResize),
      () => clearTimeout(resizeTimeout),
    ];

    return () => {
      cleanupRef.current.forEach((cleanup) => cleanup());
      cleanupRef.current = [];
    };
  }, [initializeSiema]);

  // Memoized skill item component to prevent unnecessary re-renders
  const SkillItem = useCallback(
    ({ skill, index }: { skill: any; index: number }) => (
      <div key={index} className="flex flex-col items-center">
        <div
          className="flex items-center justify-center p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 mb-3"
          style={{ backgroundColor: skill.color, willChange: "transform" }} // Add will-change for GPU acceleration
        >
          <i
            className={`${skill.icon} text-8xl`}
            style={{ color: "white" }}
            title={skill.alt || skill.title}
          />
        </div>
        <span className="text-black font-medium text-xl text-center">
          {skill.title}
        </span>
      </div>
    ),
    [],
  );

  return (
    <div>
      <div className="relative">
        <div
          ref={siemaRef}
          className="siema overflow-hidden h-[200px]"
          style={{ willChange: "transform" }} // GPU acceleration hint
        >
          {skillItems.map((skill, index) => (
            <div key={index}>
              <SkillItem skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
