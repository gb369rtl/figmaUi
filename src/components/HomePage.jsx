// import React from "react";

import Clients from "./Landing/Clients";
import Companies from "./Landing/Companies";
import KnowMoreButton from "./Landing/KnowMoreButton";
import ImageStack from "./Landing/OurServices";
import CardShowcase from "./Landing/Showcase";

import aja from "./assets/Landing logo.png";
import empower from "./assets/Landing Empowering future.png";
import shantabg from "./assets/Landing shanta foundation background.jpeg";

const HomePage = () => {
  return (
    <div className="font-stix max-w-screen-2xl text-center">

      {/* Hero Section */}
      <section className="p-10 bg-gray-300">
        <div className="flex">
          <div className="max-w-lg max-h-[584px] overflow-hidden object-contain">
            <img src={empower} alt="Empowering Future" className="object-contain" />
          </div>
          <div className="ml-10">
            <h2 className="text-5xl font-semibold">“Empowering Future, Enriching Lives”</h2>
            <p className="text-right text-4xl font-medium m-4">- AJA Group</p>
            <p className=" max-w-4xl p-8 pt-2 mx-auto text-3xl font-medium font-sans text-justify leading-relaxed">
              AJA Group's commitment to fostering growth, development, and prosperity. It signifies the company's dedication to empowering individuals and communities, driving positive change, and creating a brighter future for all stakeholders.
            </p>
            <div className="m-10">
            <KnowMoreButton />
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section>
        <Companies />
      </section>

      {/* Services Section */}
      <section className="text-center py-10 bg-gray-200">
        <h1 className="text-8xl font-bold">Our Services.</h1>
        <ImageStack />
        <div className="flex justify-center">
          <KnowMoreButton />
        </div>
      </section>

      {/* Foundation Section */}
      <section className="text-center h-screen text-white font-stix">
        <div 
          className="relative w-full h-screen py-10 flex flex-col justify-between items-center" 
          style={{ backgroundImage: `url(${shantabg})`, backgroundBlendMode: "overlay" }}
        >
          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-9xl font-bold max-w-5xl text-center">SHANTA FOUNDATION</h2>
            <p className="mt-6 text-5xl font-semibold">“Empowering Communities, Nurturing Sustainability”</p>
          </div>
          <div>
            <KnowMoreButton />
          </div>
        </div>
      </section>

      {/* Work Showcase Section */}
      <section className="text-center py-10 bg-gray-100">
        <h3 className="text-5xl font-bold m-10">WORK SHOWCASE</h3>
        <CardShowcase />
      </section>

      {/* Clients Testimonials Section */}
      <section className="text-center bg-gray-100">
        <Clients />
      </section>

      {/* Footer */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-yellow-600 ml-10">
          <img src={aja} alt="aja" className="max-w-40" />
        </div>
        <div className="space-x-52 font-medium text-3xl text-black mr-14">
          <a href="#" >Explore</a>
          <a href="#" >Contact</a>
          <a href="#" >Newsletter</a>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
