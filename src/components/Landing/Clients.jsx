
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import world from "../assets/Landing our clients world wide.png";
import knack from "../assets/Landing our clients knack.png";
import tdi from "../assets/Landing our clients TDI.png";
import mainbg from "../assets/Landing our clients background.png";
import upbg from "../assets/Landing our clients 1.png";



const testimonials = [
  { id: 1, logo: world, name: "Worldwide" },
  { id: 2, logo: tdi, name: "TDI" },
  { id: 3, logo: knack, name: "Knack Beverages" },
  { id: 4, logo: "xyz.png", name: "XYZ Corp" },
  { id: 5, logo: "abc.png", name: "ABC Ltd" },
  { id: 6, logo: "pqr.png", name: "PQR Industries" },
  { id: 7, logo: "techie.png", name: "Techie Solutions" },
  { id: 8, logo: "abcde.png", name: "ABCDE Inc." },
  { id: 9, logo: "globex.png", name: " Corporation" },
  { id: 10, logo: "webgen.png", name: "Webgen Studios" },
];

const Clients = () => {
  return (
    <>
    <img src={upbg} alt="bgbg" className="w-full h-svh" />
    <div 
      className="relative w-full py-10 bg-black bg-opacity-80" 
      style={{ backgroundImage: `url(${mainbg})`, backgroundBlendMode: "overlay" }}
    >
      <h2 className="text-white font-stix text-4xl font-bold text-left mb-6 lg:ml-40 ml-10">Our Clients Testimonial.</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="m-10 transition-opacity duration-300 ease-in-out swiper-slide-visible:opacity-100 swiper-slide-prev:opacity-75 swiper-slide-next:opacity-75"
            >
              <div className="bg-white rounded-xl shadow-md p-4 flex flex-row items-start relative w-64 h-64">
                <img src={testimonial.logo} alt={testimonial.name} className="mt-6 h-8" />
                <div className="w-full pl-3">
                  <p className="text-base font-semibold font-stix border-b pt-2 mt-2">{testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default Clients;
