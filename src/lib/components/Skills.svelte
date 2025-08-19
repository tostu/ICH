<script lang="ts">
    import { skills } from "../assets/icons";
    let showAllSkills = false;
</script>

<div class="flex flex-col gap-6">
    <div class="relative">
        <div
            class={`
                grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-10
                ${showAllSkills ? "overflow-y-scroll max-h-[500px] lg:max-h-[500px]" : "overflow-hidden max-h-[400px] lg:max-h-[400px]"}
                ${!showAllSkills ? "mask-b-from-60% mask-b-to-95% lg:mask-b-from-20% lg:mask-b-to-80%" : ""}
                transition-all duration-500
                ${showAllSkills ? "scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100" : ""}
            `}
        >
            {#each skills as skill, index}
                <div
                    class="card bg-base-100 aspect-square shadow-sm text-center"
                >
                    <div class="card-body">
                        <div
                            class="h-full flex flex-col items-center justify-center gap-2"
                        >
                            {#if skill.color !== undefined}
                                <svelte:component
                                    this={skill.icon}
                                    color={skill.color}
                                    size={index > 7 ? 50 : 80}
                                    title={skill.alt ?? skill.title}
                                />
                            {:else}
                                <img
                                    src={skill.icon}
                                    alt={skill.alt ?? skill.title}
                                    title={skill.alt ?? skill.title}
                                    class="w-[80px] h-[80px] {index > 7
                                        ? 'w-[50px] h-[50px]'
                                        : ''}"
                                />
                            {/if}
                            <span
                                class={index > 7
                                    ? "text-sm uppercase"
                                    : "text-xl uppercase"}
                            >
                                {skill.title}
                            </span>
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
            <span
                >{showAllSkills ? "Show Less Skills" : "Show More Skills"}</span
            >
        </button>
    </div>
</div>
