<script lang="ts">
    import me from "$lib/assets/me.webp";
</script>

<svelte:head>
    <title>Torge Stubbe</title>
    <meta
        name="description"
        content="My name is Torge Stubbe. I'm a Full Stack software developer from northern Germany."
    />
</svelte:head>

<main>
    <section>
        <div class="container mx-auto md:px-44">
            <div class="row justify-between">
                <h1>Moin.</h1>
            </div>
            <h2>My name is Torge Stubbe.</h2>
            <div
                class="flex flex-col xl:flex-row gap-5 items-center xl:items-start"
            >
                <div class="xl:w-[50%]">
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
                    <p>z</p>
                    <p class="text-justify">
                        Outside of programming, I enjoy capturing urban moments
                        through street photography—follow along on <a
                            href="https://instagram.com/torge.jpg"
                            target="_blank">Instagram</a
                        > if you're curious. I also unwind with video games and cooking,
                        where I love experimenting with new flavors
                    </p>
                </div>

                <!-- <Polaroid src={me} caption="me"></Polaroid> -->
                <div class="col items-center xl:w-[50%] flex justify-end">
                    <img
                        id="me"
                        src={me}
                        alt=""
                        srcset=""
                        class="rounded-full shadow-lg max-h-[500px]"
                        style="box-shadow: 5px 5px 0px 4px #6B2D5C;"
                    />
                </div>
            </div>
        </div>
    </section>
</main>
