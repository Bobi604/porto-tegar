import { Footer } from "../components/footer";
import { Header } from "../components/header";
import Profil from "../assets/img/profile.jpg";

export const About = () => {
  return (
    <>
      <section id="about" className="p-8 md:p-10 bg-white ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-700 mb-4">
              I am a passionate designer and photographer, with a knack for
              creatively and meaningfully telling stories through images. Each
              piece I create not only showcases visual beauty but also conveys a
              message, emotion, and story. With a combination of design skills,
              composition, and an understanding of aesthetics, I strive to
              create visuals that inspire, captivate, and leave a lasting
              impression on my audience.
            </p>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 grid-rows-1 gap-1">
            {/* Large Top Image */}
            <div className="col-span-2 row-span-1">
              <img
                src={Profil}
                alt="danau"
                className="w-70 h-70 object-cover rounded-[100%] shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
