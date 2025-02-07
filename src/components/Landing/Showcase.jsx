import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import large_scale from "../assets/landing work showcase large scale.png";
import brand from "../assets/landing work showcase brand.png";
import hindustan from "../assets/landing work showcase hindustan times.png";


const cards = [
  {
    id: 1,
    image: large_scale,
    title: "Large scale events.",
  },
  {
    id: 2,
    image: hindustan,
    title: "Hindustan Times Youth Nexus.",
  },
  {
    id: 3,
    image: brand,
    title: "Brand promotion.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519323764120-e262d1e7a74b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGV2ZW50fGVufDB8fHx8MTY1MTk5MzcxMw&ixlib=rb-1.2.1&q=80&w=400",
    title: "Corporate events.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHRlY2glMjBjb25mZXJlbmNlfGVufDB8fHx8MTY1MTk5MzcxMw&ixlib=rb-1.2.1&q=80&w=400",
    title: "Tech conferences.",
  },
];

export default function CardShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = cards.slice(startIndex, startIndex + 3);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? cards.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= cards.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-6">
      <button onClick={prevSlide} className="text-2xl text-gray-600 hover:text-gray-900">
        <FaChevronLeft />
      </button>
      <div className="flex space-x-10 overflow-hidden">
        {visibleCards.map((card) => (
          <div key={card.id} className="relative w-72 h-96  bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <h2 className="mt-4 text-xl font-bold text-center text-gray-800 m-4">{card.title}</h2>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="text-2xl text-gray-600 hover:text-gray-900">
        <FaChevronRight />
      </button>
    </div>
  );
}
