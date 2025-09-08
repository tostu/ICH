import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import { skills } from "@assets/icons";

const Skills: React.FC = () => {
  const glideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "carousel",
        perView: 5,
        gap: 30,
        autoplay: 3000,
        hoverpause: true,
        breakpoints: {
          1024: {
            perView: 4,
          },
          768: {
            perView: 3,
          },
          480: {
            perView: 2,
          },
        },
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, []);

  return (
    <div className="glide" ref={glideRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {skills.map((skill, index) => (
            <li key={index} className="glide__slide">
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 mb-3"
                  style={{ backgroundColor: skill.color }}
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
