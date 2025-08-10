import W1 from "../../assets/img/potrait/1.jpg";
import W2 from "../../assets/img/potrait/2.jpg";
import W3 from "../../assets/img/potrait/3.jpg";
import W4 from "../../assets/img/potrait/4.jpg";
import W5 from "../../assets/img/potrait/5.jpg";
export const Potrait = () => {
  return (
    <section id="potrait" className="bg-white pb-10">
      {/* Header with background image */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: `url(${W1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Potrait</h2>
          <p className="text-sm md:text-base">
            Capturing smiles, glances, and the stories behind every face. For
            me, portrait photography is about keeping moments natural while
            showing each person’s unique character.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <img
          src={W3}
          alt="Dawn 1"
          className="w-full h-full object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={W2}
          alt="Dawn 2"
          className="w-full h-full object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={W4}
          alt="Dawn 3"
          className="w-full h-full object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={W5}
          alt="Dawn 4"
          className="w-full h-full object-cover rounded shadow transform hover:scale-105 transition"
        />
      </div>
    </section>
  );
};
