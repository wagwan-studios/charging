
import { useNavigate } from "react-router-dom"; // For navigation
import SearchBar from "./SearchBar";
import { HelpSectionData } from "../data/data";

const ArrowRightLongTailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12h14m0 0l-5-5m5 5l-5 5"
    />
  </svg>
);

const HelpSection = () => {
  const navigate = useNavigate();
  const cards = HelpSectionData;

  const handleCardClick = (cardTitle: string) => {
    const encodedCategory = encodeURIComponent(cardTitle);
    navigate(`/how-to-charge?category=${encodedCategory}`);
  };

  return (
    <section className="px-8 py-24">
      <SearchBar />
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl text-red-600 font-bold mb-8" style={{ fontFamily: "Eon" }}>
          How can we help you?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          <div className="absolute inset-0 bg-[#f3efec] w-[95%] h-full top-20 left-20 -z-10"></div>

          <div className="grid grid-cols-2 gap-4 col-span-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative h-48 md:h-56 lg:h-64 overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleCardClick(card.title)}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-white p-4 flex flex-col justify-between h-full">
                  <h3 className="text-xl font-bold leading-tight">{card.title}</h3>
                  <button className="text-md flex items-center justify-start gap-6">
                    More Information <span><ArrowRightLongTailIcon /></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-md flex flex-col w-full justify-end">
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              How does the payment process work? How fast does my car charge?
              How do I use the app or find a station nearby? We answer all your
              questions.
            </p>
            <button className="border border-gray-400 text-md px-8 py-3 rounded-md flex items-center justify-between w-fit gap-12 hover:bg-gray-100 transition">
              General Questions
              <span className="ml-1">{'>'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;