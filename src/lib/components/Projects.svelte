<script lang="ts">
    const projects = [
        {
            title: "SCHRIFT",
            description: "Explore and apply custom Google fonts to your text.",
            link: "https://schrift.app.tostu.me/",
        },
        {
            title: "KLEIN",
            description:
                "Real-time Image Conversion & Network Performance Testing",
            link: "https://klein.app.tostu.me/",
        },
    ];
</script>

<ul
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
</ul>
