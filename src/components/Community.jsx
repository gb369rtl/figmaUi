// import React from "react";

import rajiv from "./assets/Community CV rajiv.jpeg";
import girish from "./assets/Community girish sir.jpeg";
import radhika from "./assets/Community radhika kalra.jpeg";

const data = [
  {id: 1, image: radhika, title: "Radhika Kalra", text: "The Shanta Foundation's focus on uplifting marginalized communities is both heartwarming and impactful. As a volunteer, I've seen firsthand how their programs bring hope and tangible change to those who need it most. It's a privilege to contribute to such a noble cause, knowing that we're building a better future together."},
  {id: 2, image: rajiv, title: "C. V Rajiv", text: "The Shanta Foundation's work is a testament to what can be achieved when compassion meets action. Their initiatives have brought essential resources to those in need, and our unwavering commitment to social equity is truly inspiring. I feel honored to be part of a community that is dedicated to creating positive change and making a meaningful impact on the world."},
  {id: 3, image: girish, title: "Girish sir", text: "Being associated with the Shanta Foundation has opened my eyes to the power of corporate social responsibility. Their efforts in promoting prosperity and well-being across society align perfectly with my own values. I believe that by supporting their cause, we're not just giving back—we're investing in a brighter future for everyone."},
];

const Community = () => {
  return (
    <div className="font-stix max-w-screen-xl mx-auto p-10">
      {/* Header */}
      
      {/* About Us Section */}
      <h2 className="text-7xl font-bold text-[rgba(239,133,8,1)] m-10 text-center">The Community We Are</h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-14 max-w-3xl mt-12">
        {data.map((d)=>{
          return (
            <div key={d.id} className="bg-gray-300 rounded-xl shadow-md flex flex-col p-7 items-start relative max-w-md h-[692px] ">
              <div className="flex justify-center items-center space-x-5">
                <div className="h-40 w-40 rounded-full overflow-hidden">
                  <img src={d.image} alt={d.title} className="object-cover" />
                </div>
                <div>
                  <p className="text-3xl font-semibold font-stix">{d.title}</p>
                </div>
              </div>
              <div className="text-2xl text-black text-justify mt-10">
                <p>{`"${d.text}"`}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Empowering Future Text */}
      <h3 className="m-20 text-6xl font-semibold text-center text-[rgba(239,133,8,1)]">{`"Leave no one behind"`}</h3>
    </div>
  );
};

export default Community;
