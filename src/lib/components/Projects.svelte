<script lang="ts">
    import SCHRIFT from "../assets/SCHRIFT.png";
    import KLEIN from "../assets/KLEIN.png";

    const projects = [
        {
            title: "SCHRIFT",
            description: "Explore and apply custom Google fonts to your text.",
            link: "https://schrift.app.tostu.me/",
            img: SCHRIFT,
        },
        {
            title: "KLEIN",
            description:
                "Real-time Image Conversion & Network Performance Testing",
            link: "https://klein.app.tostu.me/",
            img: KLEIN,
        },
    ];
</script>

<!-- <ul
    class="list bg-base-200 rounded-box shadow-md"
    style="box-shadow: 5px 5px 0px 2px #6B2D5C;"
>
    {#each projects as project}
        <li class="list-row">
            <a href={project.link} target="_blank">
                <h3>{project.title}</h3>
                <p class="font-semibold">
                    {project.description}
                </p>
            </a>
        </li>
    {/each}
</ul> -->

<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    {#each projects as project}
        <div class="card bg-base-100 max-w-[500px] shadow-sm">
            <a href={project.link}>
                <figure class="h-32 overflow-hidden">
                <img
                    src={project.img}
                    alt="Project Screenshot"
                    class="h-full w-full object-cover object-top"
                />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{project.title}</h2>
                    <p>
                        {project.description}
                    </p>
                </div>
            </a>
        </div>
    {/each}
</div>
