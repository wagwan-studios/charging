import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // For navigation and location

import instructionImage from "../assets/images/01_Bilder/Bild_24.png";
import homeIcon from "../assets/images/03_Icons/Icon_10.png";
import videoContactless from "../assets/images/01_Bilder/Bild_7.png";
import videoApp from "../assets/images/01_Bilder/Bild_25.png";
import videoRfid from "../assets/images/01_Bilder/Bild_26.png";
import oneIcon from "../assets/images/03_Icons/Icon_11.png";
import bgImg from "../assets/images/06_Verläufe/Verlauf_1.png";
import thumbIcon from "../assets/images/03_Icons/Icon_12.png";

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const PlayIcon = () => (
  <svg
    className="w-12 h-12 text-white ml-1"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const sidebarNavItems = [
  {
    title: "How to Charge",
    questions: [
      "Do I need an app or account to use E.ON Drive charging stations?",
      "Why can't I see E.ON Drive charging stations in the E.ON Drive app?",
      "Why can't I see E.ON Drive charging stations in the E.ON Drive app?",
    ],
  },
  {
    title: "Payment & Billing",
    questions: [
      "Why you have taken money even through my charging session didn't start?",
      "Can i use my banking card at E.ON Driver sessions? (NFC Payment)",
      "Can i use my charging card / RFID card at E.ON Driver stations?",
    ],
  },
  {
    title: "Charging Issues",
    questions: ["My car is not charging, what do I do?"],
  },
  { title: "Accessibility", questions: ["Are the stations accessible?"] },
  { title: "General Questions", questions: ["A general question goes here."] },
];

const instructionSlides = [
  {
    step: 1,
    image: instructionImage,
    text: "Before plugging in, select your payment method on the screen. Follow the on screen instructions.",
  },
  {
    step: 2,
    image: instructionImage,
    text: "Once payment is authorised, plug the connector firmly into your vehicle to begin charging.",
  },
  {
    step: 3,
    image: instructionImage,
    text: "To end the session, press the stop button on the charger screen or in your app. Unplug the connector.",
  },
];

const helpVideosData = [
  { id: 1, title: "How to charge contactless", image: videoContactless },
  { id: 2, title: "How-to Charge - E.ON Drive App", image: videoApp },
  { id: 3, title: "How-to Charge - RFID Charging Card", image: videoRfid },
];

const AccordionItem = ({
  item,
  isActive,
  onToggle,
  onQuestionClick,
  disabled = false,
}: any) => (
  <div
    className={`rounded-lg shadow-sm overflow-hidden ${
      isActive ? "bg-white" : disabled ? "bg-gray-200/40" : "bg-gray-200/60"
    }`}
  >
    <button
      onClick={() => !disabled && onToggle(item.title)}
      disabled={disabled}
      className={`w-full flex justify-between items-center p-4 text-left font-semibold 
                        ${isActive ? "text-red-600" : "text-gray-800"}
                        ${
                          disabled
                            ? "opacity-60 cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
    >
      <span>{item.title}</span>
      <ChevronDownIcon isOpen={isActive} />
    </button>
    {isActive && !disabled && (
      <div className="px-4 pb-4">
        <ul className="space-y-3">
          {item.questions.map((q: string, qIndex: number) => (
            <li
              key={qIndex}
              onClick={() => onQuestionClick(item.title, q)}
              className="cursor-pointer text-gray-700 hover:text-red-600"
            >
              {q}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const HowToChargeContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">How to Charge</h1>
        <p className="mb-10 text-lg text-gray-700">
          See how we’re working to make paying for changing as <br /> easy as
          plugging as
        </p>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-12">
        Instructions in a swipe
      </h2>
      <div className="mainsect">
        <div className="items-center gap-4 leftSect2">
          <div className="relative ml-auto flex flex-col items-end w-[70%] leftSect2">
            <img
              src={instructionSlides[currentSlide].image}
              alt="Plugging in a charger"
              className="w-100 z-50 absolute -left-65 -top-10 leftSect2Img"
            />
            <img src={oneIcon} alt="icon" className="w-15" />
            <div
              className="text-white p-15 rounded-lg shadow-lg px-35 pl-40"
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
              }}
            >
              {instructionSlides[currentSlide].text}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 mt-6 rightSect1">
          {instructionSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-2.5 rounded-full ${
                currentSlide === index ? "bg-red-600 w-6" : "bg-gray-300"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

const PaymentFAQContent = () => {
  return (
    <div>
      <h2 className="mb-7 text-lg text-gray-700">Payment & Billing</h2>
      <div>
        <h3 className="text-3xl font-bold text-gray-900">
          Why have you taken money even though my <br /> charging session didn’t
          start?
        </h3>
        <p className="mb-10 mt-5 text-lg text-gray-700">
          We place a €30 pre-authorisation hold on your card at the start of
          each <br /> session. If the session doesn’t start or is unsuccessful,
          this hold is <br /> released within 1-3 working days.
        </p>
        <div className="border-b-2 mb-3 w-[20%] border-[#a2a2a2]"></div>
        <div>Was this answer helpful?</div>
        <div className="flex flex-row gap-2 mt-3">
          <img src={thumbIcon} alt="thumb icon" className="w-5" />
          <img src={thumbIcon} alt="thumb icon" className="w-5" />
        </div>
      </div>
    </div>
  );
};

const PlaceholderContent = ({ title }: { title: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="mb-10 text-lg text-gray-700">
          See how we’re working to make paying for changing as <br /> easy as
          plugging as
        </p>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-12">
        Instructions in a swipe
      </h1>
      <div className="mainsect">
        <div className="items-center gap-4 leftSect2">
          <div className="relative ml-auto flex flex-col items-end w-[70%] leftSect2">
            <img
              src={instructionSlides[currentSlide].image}
              alt="Plugging in a charger"
              className="w-100 z-50 absolute -left-65 -top-10 leftSect2Img"
            />
            <img src={oneIcon} alt="icon" className="w-15" />
            <div
              className="text-white p-15 rounded-lg shadow-lg px-35 pl-40"
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
              }}
            >
              {instructionSlides[currentSlide].text}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 mt-6 rightSect1">
          {instructionSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-2.5 rounded-full ${
                currentSlide === index ? "bg-red-600 w-6" : "bg-gray-300"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowToChargePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(sidebarNavItems[0].title);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const categoryFromUrl = searchParams.get("category");
  const questionFromUrl = searchParams.get("question");
  console.log(categoryFromUrl, questionFromUrl)

  // Set state based on URL parameters on mount
  useEffect(() => {
    if (categoryFromUrl) {
      setActiveCategory(decodeURIComponent(categoryFromUrl));
      if (questionFromUrl) {
        setSelectedQuestion(decodeURIComponent(questionFromUrl));
      }
    }
  }, [categoryFromUrl, questionFromUrl]);

  const handleToggleCategory = (title: string) => {
    setActiveCategory((prev) => (prev === title ? "" : title));
  };

  const handleQuestionClick = (categoryTitle: string, question: string) => {
    const encodedCategory = encodeURIComponent(categoryTitle);
    const encodedQuestion = encodeURIComponent(question);
    navigate(`/how-to-charge?category=${encodedCategory}&question=${encodedQuestion}`);
    setActiveCategory(categoryTitle);
    setSelectedQuestion(question);
  };

  return (
    <div className="bg-[#F9F8F6] font-sans">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center text-sm text-gray-500 mb-10 gap-2 border-b pb-2">
          <img src={homeIcon} alt="home icon" className="w-5 h-5" />
          <span>Help & Support</span>
          <span className="mx-2">–</span>
          <span>FAQs</span>
          <span className="mx-2">–</span>
          <span className="font-semibold text-gray-800 border-b-2 border-red-600 pb-1">
            How to Charge
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="space-y-2">
              {sidebarNavItems.map((item, index) => (
                <AccordionItem
                  key={item.title}
                  item={item}
                  isActive={activeCategory === item.title}
                  onToggle={handleToggleCategory}
                  onQuestionClick={handleQuestionClick}
                  disabled={index > 1}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 xl:col-span-9">
            {activeCategory === "How to Charge" ? (
              <>
                <HowToChargeContent />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mt-20">
                    Need help to get started?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    These short videos guide you through each charging method –
                    via app, contactless payment, or RFID card.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-8">
                    {helpVideosData.map((video) => (
                      <div key={video.id} className="group cursor-pointer">
                        <h3 className="font-bold text-gray-800 mb-2">
                          {video.title}
                        </h3>
                        <div className="relative">
                          <img
                            src={video.image}
                            alt={video.title}
                            className="w-full h-70 rounded-lg shadow-md"
                          />
                          <div className="absolute inset-0 flex justify-center items-center rounded-lg group-hover:bg-opacity-40 transition-all duration-300">
                            <div className="w-20 h-20 bg-opacity-30 rounded-full flex justify-center items-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                              <PlayIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : activeCategory === "Payment & Billing" &&
              selectedQuestion ===
                "Why you have taken money even through my charging session didn't start?" ? (
              <PaymentFAQContent />
            ) : activeCategory ? (
              <>
                <PlaceholderContent title={activeCategory} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mt-20">
                    Need help to get started?
                  </h2>
                  <p className="mt-2 text-gray-700">
                    These short videos guide you through each charging method –
                    via app, contactless payment, or RFID card.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-8">
                    {helpVideosData.map((video) => (
                      <div key={video.id} className="group cursor-pointer">
                        <h3 className="font-bold text-gray-800 mb-2">
                          {video.title}
                        </h3>
                        <div className="relative">
                          <img
                            src={video.image}
                            alt={video.title}
                            className="w-full h-70 rounded-lg shadow-md"
                          />
                          <div className="absolute inset-0 flex justify-center items-center rounded-lg group-hover:bg-opacity-40 transition-all duration-300">
                            <div className="w-20 h-20 bg-opacity-30 rounded-full flex justify-center items-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                              <PlayIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-gray-500">
                Select a category to see the content.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToChargePage;