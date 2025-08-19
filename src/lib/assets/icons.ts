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
    color: "#5A9033",
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "#D0C01A",
  },
  {
    title: "Svelte",
    icon: SiSvelte,
    color: "#D93300",
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
    color: "#0595B4",
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
    color: "#568050",
  },
  {
    title: "Docker",
    icon: SiDocker,
    color: "#1F7AC0",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    color: "#2962A0",
  },
  {
    title: "Linux",
    icon: SiLinux,
    color: "#D0A920",
  },
  {
    title: "Git",
    icon: SiGit,
    color: "#C04029",
  },
  {
    title: "HTML",
    icon: SiHtml5,
    color: "#B93F1F",
  },
  {
    title: "CSS",
    icon: SiCss,
    color: "#125D95",
  },
  {
    title: "React",
    icon: SiReact,
    color: "#50B0C9",
  },
  {
    title: "Vue 2",
    icon: SiVuedotjs,
    color: "#409D72",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "#1A1A1A",
  },
  {
    title: "JQuery",
    icon: SiJquery,
    color: "#06558B",
  },
];
