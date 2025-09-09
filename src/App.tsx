import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import StaggeredGrid from "./components/StaggeredGrid";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Torge Stubbe</title>
          <meta
            name="description"
            content="My name is Torge Stubbe. I'm a Full Stack software developer from northern Germany."
          />
        </Helmet>

        <main className="mb-9">
          <div className="w-full absolute inset-0 h-full"></div>
          <div className="container mx-auto lg:px-12 xl:px-24 2xl:px-40">
            <Hero />

            <section className="mt-16">
              <h2>skills</h2>
              <Skills />
            </section>

            <section className="mt-16">
              <h2>personal projects</h2>
              <Projects />
            </section>

            <div className="mt-40">
              <span className="text-7xl">PHOTOS</span>
              <StaggeredGrid />
            </div>
          </div>

          {/*<section className="mt-28">
            <h2 className="text-center pb-8">moments captured</h2>
            <div className="mb-16">
              <h3 className="text-center pb-4 text-lg opacity-75">Content Width Grid</h3>
              <ImageGrid />
            </div>

          </section>*/}
        </main>

        <Footer />
      </>
    </HelmetProvider>
  );
};

export default App;
