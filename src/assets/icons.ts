import java from "./java.png";

import {
  SiSpring,
  SiSvelte,
  SiDocker,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNextdotjs,
  SiJquery,
  SiNodedotjs,
  SiLinux,
  SiGit,
} from "@icons-pack/svelte-simple-icons";

type Skill = {
  title: string;
  icon: any;
  alt?: string;
  color?: string;
};

export const skills: Skill[] = [
  {
    title: "Java",
    icon: java,
  },
  {
    title: "Spring",
    alt: "Java Spring Boot",
    icon: SiSpring,
    color: "#51CF66",
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "#FFD166", // Sunny yellow
  },
  {
    title: "Svelte",
    icon: SiSvelte,
    color: "#FF8A50", // Peachy orange
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
    color: "#70E0E0", // Minty teal
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
    color: "#68D391", // Fresh green
  },
  {
    title: "Docker",
    icon: SiDocker,
    color: "#63B3ED", // Sky blue
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    color: "#9F7AEA", // Lavender
  },
  {
    title: "Linux",
    icon: SiLinux,
    color: "#F6E05E", // Bright yellow
  },
  {
    title: "Git",
    icon: SiGit,
    color: "#FC8181", // Soft red
  },
  {
    title: "HTML",
    icon: SiHtml5,
    color: "#FDAD5A", // Warm orange
  },
  {
    title: "CSS",
    icon: SiCss,
    color: "#A0CFE4", // Light blue
  },
  {
    title: "React",
    icon: SiReact,
    color: "#4FD1C7", // Turquoise
  },
  {
    title: "Vue 2",
    icon: SiVuedotjs,
    color: "#81E6D9", // Seafoam green
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "#38B2AC", // Teal
  },
  {
    title: "JQuery",
    icon: SiJquery,
    color: "#6B46C1", // Purple
  },
];
