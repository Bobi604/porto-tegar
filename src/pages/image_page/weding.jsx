import W1 from "../../assets/img/wedding/2.jpg";
import W2 from "../../assets/img/wedding/3.JPG";
import W3 from "../../assets/img/wedding/4.JPG";
import W4 from "../../assets/img/wedding/1.png";
import W5 from "../../assets/img/wedding/0.jpg";
export const Wedding = () => {
  return (
    <section id="wedding" className="bg-white pb-10">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Wedding</h2>
          <p className="text-sm md:text-base">
            Capturing the sacred moments of a wedding with an artistic touch
            that blends visual beauty and genuine emotion. Each shot tells a
            story—preserving details, smiles, and meaningful glances—to create
            timeless memories to cherish forever
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <img
          src={W3}
          alt="Dawn 1"
          className="w-full h-64 object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={W2}
          alt="Dawn 2"
          className="w-full h-64 object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={W4}
          alt="Dawn 3"
          className="w-full h-64 object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={W5}
          alt="Dawn 4"
          className="w-full h-64 object-cover rounded shadow transform hover:scale-105 transition"
        />
      </div>
    </section>
  );
};
