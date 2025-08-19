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
        <section>
            <div class="row justify-between">
                <h1>Moin.</h1>
            </div>
            <h2>I'm Torge Stubbe.</h2>
            <div class="flex flex-col xl:flex-row gap-5 items-center">
                <div class="xl:w-[50%] xl:max-w-[380px]">
                    <p class="text-justify">
                        I'm a professionally trained Full Stack software
                        developer based in northern Germany. Currently, I work
                        at <a href="https://fricke.de" target="_blank"
                            >FRICKE Group</a
                        >, where I maintain and enhance the
                        <a href="https://granit-parts.com" target="_blank"
                            >granit-parts</a
                        >
                        B2B webshop. Most of my personal projects are open source
                        and available on
                        <a href="https://github.com/tostu" target="_blank"
                            >GitHub</a
                        >.
                    </p>
                    <p class="text-justify">
                        Outside of programming, I enjoy capturing urban moments
                        through street photography follow along on <a
                            href="https://instagram.com/torge.jpg"
                            target="_blank">Instagram</a
                        > if you're curious. I also unwind with video games and cooking,
                        where I love experimenting with new flavors
                    </p>
                </div>
                <!-- <Polaroid src={me} caption="me"></Polaroid> -->
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
            <h2>skills</h2>
            <Skills />
        </section>

        <section class="mt-16">
            <h2>personal projects</h2>
            <Projects />
        </section>
    </div>
</main>
