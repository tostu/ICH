<script lang="ts">
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

    let isCollapseOpen = false;

    const skillsMain = [
        {
            title: "Svelte",
            icon: SiSvelte,
            color: "#BD4B30",
        },
        {
            title: "Spring Boot",
            icon: SiSpring,
            color: "#587A44",
        },
        {
            title: "Tailwind",
            icon: SiTailwindcss,
            color: "#437973",
        },
        {
            title: "Node.js",
            icon: SiNodedotjs,
            color: "#339933",
        },
        {
            title: "Docker",
            icon: SiDocker,
            color: "#2496ED",
        },
        {
            title: "Linux",
            icon: SiLinux,
            color: "#000000",
        },
        {
            title: "TypeScript",
            icon: SiTypescript,
            color: "#3178C6",
        },
        {
            title: "Git",
            icon: SiGit,
            color: "#F05032",
        },
    ];

    const skillsAdditional = [
        {
            title: "Typescript",
            icon: SiTypescript,
            color: "#3178C6",
        },
        {
            title: "Javascript",
            icon: SiJavascript,
            color: "#F7DF1E",
        },
        {
            title: "HTML",
            icon: SiHtml5,
            color: "#E34F26",
        },
        {
            title: "CSS",
            icon: SiCss,
            color: "#1572B6",
        },
        {
            title: "React",
            icon: SiReact,
            color: "#61DAFB",
        },
        {
            title: "Vue",
            icon: SiVuedotjs,
            color: "#41B883",
        },
        {
            title: "Angular",
            icon: SiAngular,
            color: "#DD0031",
        },
        {
            title: "Next.js",
            icon: SiNextdotjs,
            color: "#000000",
        },
        {
            title: "JQuery",
            icon: SiJquery,
            color: "#0769AD",
        },
        {
            title: "Spring Boot",
            icon: SiSpring,
            color: "#587A44",
        },
        {
            title: "Docker",
            icon: SiDocker,
            color: "#3F6B8C",
        },
        {
            title: "Tailwind",
            icon: SiTailwindcss,
            color: "#437973",
        },
    ];
</script>

<div class="flex flex-col gap-6">
    <div
        class={isCollapseOpen
            ? ""
            : "mask-b-from-60% mask-b-to-95% lg:mask-b-from-20% lg:mask-b-to-80%"}
    >
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {#each skillsMain as skill}
                <div class="card bg-base-100 shadow-sm text-center">
                    <div class="card-body">
                        <div class="flex flex-col items-center gap-2">
                            <svelte:component
                                this={skill.icon}
                                color={skill.color}
                                size={80}
                            />
                            <h3>{skill.title}</h3>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="collapse">
        <input type="checkbox" bind:checked={isCollapseOpen} />
        <div
            class="collapse-title font-semibold p-0 text-center flex flex-col justify-center"
        >
            <span class="text-lg uppercase">more</span>
            <span class="text-4xl -mt-5">⌄</span>
        </div>
        <div class="collapse-content p-0 text-sm">
            <div class="flex flex-col gap-10">
                <div>
                    <h2>Additional Skills</h2>
                    <div
                        class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-5"
                    >
                        {#each skillsAdditional as skill}
                            <div class="card bg-base-100 shadow-sm">
                                <div class="card-body text-center">
                                    <div
                                        class="flex flex-col items-center gap-2"
                                    >
                                        <svelte:component
                                            this={skill.icon}
                                            color={skill.color}
                                            size={50}
                                        />
                                        <h4>
                                            {skill.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
