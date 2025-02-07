// // import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import knack from "../assets/Landing companies knack.png";
// import music from "../assets/Landing companies music.jpg";
// import pinakin from "../assets/Landing companies pinakin.jpg";
// import shanta from "../assets/Landing companies shanta.jpeg";
// import stock from "../assets/Landing companies stock.png";
// import background from "../assets/Landing companies background.png";
// import redi from "../assets/Landing companies redi.png";
// import iclimb from "../assets/Landing companies iclimb1.png";

// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const companies = [
//   { name: "Pinakin", logo: pinakin },
//   { name: "Adyah Music", logo: music },
//   { name: "Shanta Foundation", logo: shanta },
//   { name: "Knack Beverages", logo: knack },
//   { name: "Stock Tutor", logo: stock },
//   { name: "Iclimb", logo: iclimb },
//   { name: "Redieux Resource Management", logo: redi },
// ];

// const Companies = () => {
//   return (
//     <div
//       className="relative w-full h-[639px] bg-cover bg-center flex flex-col items-center justify-center text-white"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-1"></div>
//       <h2 className="relative text-6xl font-bold mb-10 z-10 text-center font-stix">
//         Companies Work Under AJA
//       </h2>

//       <div className="relative w-full max-w-4xl lg:max-w-7xl z-10">
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             540: { slidesPerView: 3 },
//             768: { slidesPerView: 4 },
//             1024: { slidesPerView: 5 },
//           }}
//           autoplay={{ delay: 1000, disableOnInteraction: true }}
//           loop
//         >
//           {companies.map((company, index) => (
//             <SwiperSlide key={index} className="flex justify-center items-center">
//             <img src={company.logo} alt={company.name} className="w-40 h-40 lg:w-60 lg:h-60 sm:w-24 sm:h-24 object-cover rounded-full" />
//           </SwiperSlide>

//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Companies;




























import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module correctly
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import knack from "../assets/Landing companies knack.png";
import music from "../assets/Landing companies music.jpg";
import pinakin from "../assets/Landing companies pinakin.jpg";
import shanta from "../assets/Landing companies shanta.jpeg";
import stock from "../assets/Landing companies stock.png";
import background from "../assets/Landing companies background.png";
import redi from "../assets/Landing companies redi.png";
import iclimb from "../assets/Landing companies iclimb1.png";

const companies = [
  { name: "Pinakin", logo: pinakin },
  { name: "Adyah Music", logo: music },
  { name: "Shanta Foundation", logo: shanta },
  { name: "Knack Beverages", logo: knack },
  { name: "Stock Tutor", logo: stock },
  { name: "Iclimb", logo: iclimb },
  { name: "Redieux Resource Management", logo: redi },
];

const Companies = () => {
  return (
    <div
      className="relative w-full h-[639px] bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-1"></div>
      <h2 className="relative text-6xl font-bold mb-10 z-10 text-center font-stix">
        Companies Work Under AJA
      </h2>

      <div className="relative w-full max-w-4xl lg:max-w-7xl z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            360: { slidesPerView: 2 },
            540: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2500}
          loop
          modules={[Autoplay]} // Use the Autoplay module correctly
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={company.logo}
                alt={company.name}
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover rounded-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Companies;
