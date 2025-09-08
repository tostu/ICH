import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

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

        <main>
          <div className="container mx-auto lg:px-52">
            <Hero />

            <section className="mt-16">
              <h2>skills</h2>
              <Skills />
            </section>

            <section className="mt-16">
              <h2>personal projects</h2>
              <Projects />
            </section>
          </div>
        </main>
      </>
    </HelmetProvider>
  );
};

export default App;
