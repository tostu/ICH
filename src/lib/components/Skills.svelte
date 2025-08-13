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
    } from "@icons-pack/svelte-simple-icons";

    const skillsChoice = [
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
    ];

    const skillsMain = [
        {
            title: "Docker",
            icon: SiDocker,
            color: "#3F6B8C",
        },
        {
            title: "Spring Boot",
            icon: SiSpring,
            color: "#587A44",
        },
        {
            title: "Node.js",
            icon: SiNodedotjs,
            color: "#339933",
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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {#each skillsChoice as skill}
            <div class="card bg-base-100 shadow-sm">
                <div class="card-body">
                    <div class="flex flex-col items-center gap-2">
                        <svelte:component
                            this={skill.icon}
                            color={skill.color}
                            size={90}
                        />
                        <h3>{skill.title}</h3>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <div class="collapse">
        <input type="checkbox" />
        <div
            class="collapse-title font-semibold p-0 text-center flex flex-col justify-center"
        >
            <span class="text-lg uppercase">more</span>
            <span class="text-4xl -mt-5">⌄</span>
        </div>
        <div class="collapse-content p-0 text-sm">
            <div class="flex flex-col gap-10">
                <div>
                    <h2>Main Skills</h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {#each skillsMain as skill}
                            <div class="card bg-base-100 shadow-sm">
                                <div class="card-body">
                                    <div
                                        class="flex flex-col items-center gap-2"
                                    >
                                        <svelte:component
                                            this={skill.icon}
                                            color={skill.color}
                                            size={90}
                                        />
                                        <h3>{skill.title}</h3>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <div>
                    <h2>Additional Skills</h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {#each skillsAdditional as skill}
                            <div class="card bg-base-100 shadow-sm">
                                <div class="card-body">
                                    <div
                                        class="flex flex-col items-center gap-2"
                                    >
                                        <svelte:component
                                            this={skill.icon}
                                            color={skill.color}
                                            size={90}
                                        />
                                        <h3>{skill.title}</h3>
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

<style>
    .mask1 {
        /*-webkit-mask-image: linear-gradient(
            to bottom,
            transparent 25%,
            black 75%
        );*/
        mask-image: linear-gradient(to bottom, black 60%, transparent 50%);
    }
</style>
