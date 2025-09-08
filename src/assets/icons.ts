// Devicon class names for icons
// See: https://devicon.dev/ for all available icons

type Skill = {
  title: string;
  icon: string; // Devicon CSS class
  alt?: string;
  color?: string;
};

export const skills: Skill[] = [
  {
    title: "Java",
    icon: "devicon-java-plain",
    color: "#ED8B00",
  },
  {
    title: "Spring",
    alt: "Java Spring Boot",
    icon: "devicon-spring-plain",
    color: "#51CF66",
  },
  {
    title: "JavaScript",
    icon: "devicon-javascript-plain",
    color: "#F7DF1E",
  },
  {
    title: "Svelte",
    icon: "devicon-svelte-plain",
    color: "#FF3E00",
  },
  {
    title: "Tailwind",
    icon: "devicon-tailwindcss-plain",
    color: "#06B6D4",
  },
  {
    title: "Node.js",
    icon: "devicon-nodejs-plain",
    color: "#68D391",
  },
  {
    title: "Docker",
    icon: "devicon-docker-plain",
    color: "#2496ED",
  },
  {
    title: "TypeScript",
    icon: "devicon-typescript-plain",
    color: "#3178C6",
  },
  {
    title: "Linux",
    icon: "devicon-linux-plain",
    color: "#FCC624",
  },
  {
    title: "Git",
    icon: "devicon-git-plain",
    color: "#F05032",
  },
  {
    title: "HTML",
    icon: "devicon-html5-plain",
    color: "#E34F26",
  },
  {
    title: "CSS",
    icon: "devicon-css3-plain",
    color: "#1572B6",
  },
  {
    title: "React",
    icon: "devicon-react-original",
    color: "#61DAFB",
  },
  {
    title: "Vue 2",
    icon: "devicon-vuejs-plain",
    color: "#4FC08D",
  },
  {
    title: "Next.js",
    icon: "devicon-nextjs-original-wordmark",
    color: "#000000",
  },
  {
    title: "jQuery",
    icon: "devicon-jquery-plain",
    color: "#0769AD",
  },
];
