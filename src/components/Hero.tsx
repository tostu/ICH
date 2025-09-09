import React from "react";
import ICH from "../assets/ICH.webp";
import "./Hero.css";

import Typewriter from "@/components/fancy/text/typewriter";

const Hero: React.FC = () => {
  return (
    <section id="intro" className="relative mt-15">
      {/*<img src={STERN} alt="STERN logo" className="w-20 h-20 block" />*/}

      {/* Mobile: headings first */}
      <div className="block md:hidden mb-8">
        <div className="row justify-between h-[150px]">
          <Typewriter
            text="Moin"
            speed={130}
            cursorChar={"."}
            initialDelay={2}
            as="h1"
            className="text-9xl font-bold"
            showCursor={true}
          />
        </div>
        <h2 className="text-3xl">I'm Torge Stubbe.</h2>
      </div>

      {/* Image */}
      <img
        id="me"
        src={ICH}
        alt="Torge Stubbe"
        style={{ shapeOutside: "circle()" }}
        className="
          md:float-right
          md:ml-12
          lg:ml-32
          mb-4
          rounded-full
          border-[#FDC700]
          border-23
          w-100
          h-100
          object-cover
          object-[25%_20%]
          mx-auto
          md:mx-0
          block
        "
      />

      {/* Desktop: headings in original position */}
      <div className="hidden md:block">
        <div className="row justify-between h-[73px] 2xl:h-[150px]">
          <Typewriter
            text="Moin."
            speed={190}
            initialDelay={2}
            as="h1"
            className="text-6xl 2xl:text-9xl font-bold"
            showCursor={false}
          />
        </div>
        <div id="green-dot"></div>
        <h2>I'm Torge Stubbe.</h2>
      </div>

      {/* Text content - always at bottom */}
      <div className="relative leading-9 tracking-tight mt-8 md:mt-0">
        <p className="text-justify">
          I am a professionally trained Full Stack software developer based in
          northern Germany. Currently, I work at{" "}
          <a href="https://fricke.de" target="_blank" rel="noopener noreferrer">
            FRICKE Group
          </a>
          , where I maintain and enhance the{" "}
          <a
            href="https://granit-parts.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            granit-parts
          </a>{" "}
          B2B webshop. Most of my personal projects are open source and
          available on{" "}
          <a
            href="https://github.com/tostu"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p className="text-justify">
          Outside of programming, I enjoy capturing urban moments through street
          photography follow along on{" "}
          <a
            href="https://instagram.com/torge.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          if you're curious. I also unwind with video games and cooking, where I
          love experimenting with new flavors.
        </p>
      </div>
    </section>
  );
};

export default Hero;
