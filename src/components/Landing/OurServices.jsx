// // import React from "react";

// import plane from "../assets/Landing Services plane.png";
// import girl from "../assets/Landing Services girl.png";
// import middle from "../assets/Landing Services middle.png";
// import construction from "../assets/Landing Services construction.png";
// import hand from "../assets/Landing Services hand.png";

// import { useState } from "react";

// const images = [plane, girl, middle, construction, hand];

// export default function ImageStack() {
//   const [hoveredIndex, setHoveredIndex] = useState(2); // Middle card initially up

//   const getSize = (index, hovered) => {
//     if (hovered === null) return 100; // Default size if no hover
//     const distance = Math.abs(index - hovered);
//     return 190 - distance * 10; // Largest for hovered, decreasing outward
//   };

//   return (
//     <div className="relative flex justify-center items-center h-screen">
//       {images.map((src, index) => (
//         <img
//           key={index}
//           src={src}
//           alt={`Card ${index + 1}`}
//           className={`absolute transition-all duration-300 rounded-lg shadow-lg 
//             ${hoveredIndex === index ? "scale-110 translate-5" : "scale-100"}`}
//           style={{
//             zIndex: hoveredIndex === index ? images.length : images.length - Math.abs(index - hoveredIndex),
//             left: `calc(50% + ${(index - 2) * 12}%)`,
//             width: `${getSize(index, hoveredIndex)}px`,
//             height: `${getSize(index, hoveredIndex) * 1.4}px`,
//           }}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(2)} // Keep middle card elevated
//         />
//       ))}
//     </div>
//   );
// }

















import { useState } from "react";
import plane from "../assets/Landing Services plane.png";
import girl from "../assets/Landing Services girl.png";
import middle from "../assets/Landing Services middle.png";
import construction from "../assets/Landing Services construction.png";
import hand from "../assets/Landing Services hand.png";

const images = [plane, girl, middle, construction, hand];

export default function ImageStack() {
  const [hoveredIndex, setHoveredIndex] = useState(2); // Middle card initially up

  const getSize = (index, hovered, screen) => {
    if (hovered === null) return screen === "lg" ? 160 : screen === "sm" ? 80 : 100;
    const distance = Math.abs(index - hovered);
    const baseSize = screen === "lg" ? 200 : screen === "sm" ? 100 : 140;
    return baseSize - distance * 12;
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Card ${index + 1}`}
          className={`absolute transition-all duration-300 rounded-lg shadow-lg 
            ${hoveredIndex === index ? "scale-110 translate-y-2" : "scale-100"}`}
          style={{
            zIndex: hoveredIndex === index ? images.length : images.length - Math.abs(index - hoveredIndex),
            left: `calc(37% + ${(index - 2) * 10}%)`,
            width: `calc(${getSize(index, hoveredIndex, "md")}px + 17vw)`,
            height: `calc(${getSize(index, hoveredIndex, "md")}px * 3.4 + 10vh)`,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(2)} // Keep middle card elevated
        />
      ))}
    </div>
  );
}
