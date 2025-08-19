<script lang="ts">
    import me from "$lib/assets/me.webp";
    import Projects from "./lib/components/Projects.svelte";
    import Skills from "./lib/components/Skills.svelte";
</script>

<svelte:head>
    <title>Torge Stubbe</title>
    <meta
        name="description"
        content="My name is Torge Stubbe. I'm a Full Stack software developer from northern Germany."
    />
</svelte:head>
<main>
    <div class="container mx-auto lg:px-52">
        <section id="intro">
            <div class="row justify-between">
                <h1>Moin.</h1>
            </div>
            <div id="green-dot"></div>
            <h2>I'm Torge Stubbe.</h2>
            <div class="flex flex-col xl:flex-row gap-5 items-center">
                <div class="xl:w-[50%] xl:max-w-[380px]">
                    <p class="text-justify">
                        I'm a professionally trained Full Stack developer from
                        northern Germany. I maintain and enhance the
                        <a href="https://granit-parts.com" target="_blank"
                            >granit-parts</a
                        >
                        B2B webshop at
                        <a href="https://fricke.de" target="_blank"
                            >FRICKE Group</a
                        >. Most of my projects are open source and available on
                        <a href="https://github.com/tostu" target="_blank"
                            >GitHub</a
                        >.
                    </p>
                    <p class="text-justify">
                        Outside of work, I enjoy street
                        <a
                            href="https://instagram.com/torge.jpg"
                            target="_blank">photography</a
                        >, video games, and experimenting with new flavors in
                        cooking.
                    </p>
                </div>

                <div class="xl:w-[50%] flex justify-end">
                    <img
                        id="me"
                        src={me}
                        alt=""
                        srcset=""
                        class="rounded-full shadow-lg max-h-[450px]"
                        style="box-shadow: 5px 5px 0px 4px #6B2D5C;"
                    />
                </div>
            </div>
        </section>

        <section class="mt-16">
            <h2 class="text-center md:text-start">skills</h2>
            <Skills />
        </section>

        <section class="mt-16">
            <h2 class="text-center md:text-start">personal projects</h2>
            <Projects />
        </section>
    </div>
</main>

<style>
    a {
        text-decoration: none;
        white-space: nowrap;
        color: #121314;
        position: relative;
    }
    a:after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 66%;
        left: -0.1em;
        right: -0.1em;
        bottom: 0;
        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
        background-color: oklch(48.5% 0.075 149.98 / 0.5);
    }
    a:hover:after {
        top: 0%;
    }

    /* #intro {
        position: relative;
    }
    #green-dot {
        background-image: linear-gradient(to right, #ffffff, #d2e8cb);
        width: 280px;
        height: 280px;
        border-radius: 50%;
        position: absolute;
        bottom: -70px;
        left: 150px;
        z-index: -1;
    } */
</style>
