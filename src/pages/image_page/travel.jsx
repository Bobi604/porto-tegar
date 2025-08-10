import T1 from "../../assets/video/aerial/TES.mp4";
import T2 from "../../assets/img/travel/1.jpg";
import T3 from "../../assets/img/travel/2.jpg";
import T4 from "../../assets/img/travel/8.jpg";
import T5 from "../../assets/img/travel/7.JPG";
export const Travel = () => {
  return (
    <section id="travel" className="bg-white pb-10">
      {/* Header with background image */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        // style={{
        //   backgroundImage: `url(${T1})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={T1}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Aerial</h2>
          <p className="text-sm md:text-base">
            Seeing the world from above and capturing beauty rarely seen. Every
            aerial shot offers a fresh perspective that amazes and makes each
            moment feel special.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <img
          src={T2}
          alt="Dawn 1"
          className="w-full h-64 object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={T3}
          alt="Dawn 2"
          className="w-full h-64 object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={T4}
          alt="Dawn 3"
          className="w-full h-64 object-cover rounded shadow transform hover:scale-105 transition"
        />
        <img
          src={T5}
          alt="Dawn 4"
          className="w-full h-64 object-cover rounded shadow transform hover:scale-105 transition"
        />
      </div>
    </section>
  );
};
