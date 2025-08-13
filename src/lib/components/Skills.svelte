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

    let showAllSkills = false;

    const allSkills = [
        {
            title: "Svelte",
            icon: SiSvelte,
            color: "#8A6B5D",
            size: 80,
            isMain: true,
        },
        {
            title: "Spring Boot",
            icon: SiSpring,
            color: "#7A8B7A",
            size: 80,
            isMain: true,
        },
        {
            title: "Tailwind",
            icon: SiTailwindcss,
            color: "#6B8A87",
            size: 80,
            isMain: true,
        },
        {
            title: "Node.js",
            icon: SiNodedotjs,
            color: "#6B8A6B",
            size: 80,
            isMain: true,
        },
        {
            title: "Docker",
            icon: SiDocker,
            color: "#6B8AAD",
            size: 80,
            isMain: true,
        },
        {
            title: "Linux",
            icon: SiLinux,
            color: "#3A3A3A",
            size: 80,
            isMain: true,
        },
        {
            title: "TypeScript",
            icon: SiTypescript,
            color: "#6B8AC6",
            size: 80,
            isMain: true,
        },
        {
            title: "Git",
            icon: SiGit,
            color: "#AD7A6B",
            size: 80,
            isMain: true,
        },
        {
            title: "Typescript",
            icon: SiTypescript,
            color: "#6B8AC6",
            size: 50,
            isMain: false,
        },
        {
            title: "Javascript",
            icon: SiJavascript,
            color: "#ADA96B",
            size: 50,
            isMain: false,
        },
        {
            title: "HTML",
            icon: SiHtml5,
            color: "#AD7A6B",
            size: 50,
            isMain: false,
        },
        {
            title: "CSS",
            icon: SiCss,
            color: "#6B8AAD",
            size: 50,
            isMain: false,
        },
        {
            title: "React",
            icon: SiReact,
            color: "#8AADB8",
            size: 50,
            isMain: false,
        },
        {
            title: "Vue",
            icon: SiVuedotjs,
            color: "#7AAD8A",
            size: 50,
            isMain: false,
        },
        {
            title: "Angular",
            icon: SiAngular,
            color: "#AD6B7A",
            size: 50,
            isMain: false,
        },
        {
            title: "Next.js",
            icon: SiNextdotjs,
            color: "#3A3A3A",
            size: 50,
            isMain: false,
        },
        {
            title: "JQuery",
            icon: SiJquery,
            color: "#6B8AAD",
            size: 50,
            isMain: false,
        },
        {
            title: "Spring Boot",
            icon: SiSpring,
            color: "#7A8B7A",
            size: 50,
            isMain: false,
        },
        {
            title: "Docker",
            icon: SiDocker,
            color: "#6B8AAD",
            size: 50,
            isMain: false,
        },
        {
            title: "Tailwind",
            icon: SiTailwindcss,
            color: "#6B8A87",
            size: 50,
            isMain: false,
        },
    ];
</script>

<div class="flex flex-col gap-6">
    <div class="relative">
        <div
            class={`
                grid grid-cols-2 lg:grid-cols-4 gap-10
                ${showAllSkills ? "overflow-y-scroll max-h-[500px] lg:max-h-[500px]" : "overflow-hidden max-h-[400px] lg:max-h-[400px]"}
                ${!showAllSkills ? "mask-b-from-60% mask-b-to-95% lg:mask-b-from-20% lg:mask-b-to-80%" : ""}
                transition-all duration-500
                ${showAllSkills ? "scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100" : ""}
            `}
        >
            {#each allSkills as skill}
                <div class="card bg-base-100 shadow-sm text-center">
                    <div class="card-body">
                        <div class="flex flex-col items-center gap-2">
                            <svelte:component
                                this={skill.icon}
                                color={skill.color}
                                size={skill.size}
                            />
                            <h3 class={skill.isMain ? "" : "text-sm"}>
                                {skill.title}
                            </h3>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="text-center">
        <button
            class="btn btn-ghost text-lg uppercase"
            on:click={() => (showAllSkills = !showAllSkills)}
        >
            <span>{showAllSkills ? "Show Less" : "Show More"}</span>
            <span class="text-3xl ml-2">{showAllSkills ? "⌃" : "⌄"}</span>
        </button>
    </div>
</div>
