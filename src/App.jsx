import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/program";
import Title from "./components/title/title";
import About from "./components/About/About";
import Campus from "./components/campus/campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import VideoPlayer from "./components/VideoPlayer/videoPlayer";

import { useState } from "react";
const App = () => {
  const [playstate, setplaystate] = useState(false);
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title title="What We offer" subtitle="OUR PROGRAM" />
        <Program />
        <About setplaystate={setplaystate} />
        <Title subtitle="campus Photo" title="Gallery" />
        <Campus />
        <Title title="TESTIMONIALS" subtitle="What Student says" />
        <Testimonials />
        <Title subtitle="Get in touch" title="Contact Us" />
        <Contact />
        <Footer />
        <VideoPlayer playstate={playstate} setplaystate={setplaystate} />
      </div>
    </div>
  );
};

export default App;
