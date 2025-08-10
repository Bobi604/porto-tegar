import Design1 from "../../assets/img/aerial/1.jpg";
import Design2 from "../../assets/img/aerial/2.jpg";
import Disign3 from "../../assets/img/aerial/3.jpg";
export const Aerial = () => {
  return (
    <section id="aerial" className="p-8 md:p-16 bg-white ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}

        {/* Images Section */}
        {/* Images Section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {/* Large Top Image */}
          <div className="col-span-2 row-span-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Family Gathering
            </h2>
            <p className="text-gray-700 ">
              Family gathering photography is about preserving the warmth, joy,
              and connection shared among loved ones. It captures every smile,
              laugh, and embrace naturally, showcasing the genuine bonds that
              bring a family together. Through a creative and thoughtful
              approach, each image transforms simple moments into timeless
              visual stories—memories that can be cherished, shared, and passed
              down for generations.
            </p>
          </div>

          {/* Bottom Left Image */}
          <div>
            <img
              src={Design2}
              alt="Highlight 2"
              className="w-full h-full object-cover rounded shadow transform hover:scale-105 transition "
            />
          </div>
          {/* Bottom Right Image */}
          <div>
            <img
              src={Disign3}
              alt="Highlight 3"
              className="w-full h-full object-cover rounded shadow transform hover:scale-105 transition"
            />
          </div>
        </div>
        <div>
          <img
            src={Design1}
            alt="Highlight 1"
            className="full h-175 object-cover rounded shadow transform hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};
