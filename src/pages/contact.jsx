import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Contact = () => {
  return (
    <>
      <section className="p-10 max-w-xl mx-auto text-center scroll-smooth">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-4">
          Reach out via WhatsApp or Email for collaborations and bookings.
        </p>
        <a
          href="https://wa.me/6283830654913"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </section>
    </>
  );
};
