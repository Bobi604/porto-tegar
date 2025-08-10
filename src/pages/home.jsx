import bgVideo from "../assets/video/home/home1.mp4";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import ScrollToTopButton from "../components/scroll";
import { About } from "./about";
import { Contact } from "./contact";
import { Cv } from "./cv";
import { Aerial } from "./image_page/aerial";
import { Potrait } from "./image_page/potrait";
import { Travel } from "./image_page/travel";
import { Wedding } from "./image_page/weding";

export const Home = () => {
  return (
    <>
      <Header />
      <section
        id="home"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center scroll-smooth"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay agar teks tetap terbaca */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-8xl font-bold mb-5 text-white">
            PORTFOLIO
          </h1>
          <p className="max-w-xl mx-auto text-white text-base md:text-lg mt-4">
            Capture your moments with passion and creativity. Explore my gallery
            to see my work.
          </p>
        </div>
      </section>
      <section id="about" className="p-10 bg-white scroll-smooth">
        <About />
      </section>
      <section id="cv" className="p-10 bg-white scroll-smooth">
        <Cv />
      </section>
      <section id="wedding" className="p-10 bg-white scroll-smooth">
        <Wedding />
      </section>
      <section id="drone" className="p-10 bg-white scroll-smooth">
        <Aerial />
      </section>
      <section id="beach" className="p-10 bg-white scroll-smooth">
        <Travel />
      </section>
      <section id="beach" className="p-10 bg-white scroll-smooth">
        <Potrait />
      </section>
      <section id="contact" className="p-10 bg-white scroll-smooth">
        <Contact />
      </section>
      <ScrollToTopButton />

      <Footer />
    </>
  );
};
