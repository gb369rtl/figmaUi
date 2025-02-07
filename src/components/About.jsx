// import React from "react";

import about1 from "./assets/About us 1.png";
import about2 from "./assets/About us 2.png";

const data = [
  {id: 1, image: about1, text: "AJA Broadcom Pvt. Ltd. is a dynamic and diversified enterprise with a strong presence across multiple industries. The company operates a portfolio of businesses that span Trade, Commerce, Manufacturing, Information Technology, Transportation, and Defence. AJA Broadcom is also recognized for its expertise in Events Management, Brand Activation, Retail, and consumer outreach programs, creating impactful connections with audiences."},
  {id: 2, image: about2, text: "Committed to making a positive difference, the organization actively engages in Non-Profit Social Responsibility initiatives, contributing to the betterment of communities and society at large. With its wide-ranging expertise and forward-thinking approach, AJA Broadcom continues to set benchmarks for excellence and innovation across its varied sectors, delivering value to its stakeholders while fostering sustainable growth."},
];

const AboutUs = () => {
  return (
    <div className="font-stix max-w-screen-xl mx-auto p-10 bg-gray-50">
      {/* Header */}
      
      {/* About Us Section */}
      <h2 className="text-7xl font-bold text-[rgba(239,133,8,1)] mt-4 text-center">About Us</h2>

      {data.map((d)=>{
        return d.id%2 != 0 ? (
          <div key={d.id} className="flex justify-center items-center space-x-5 m-10">
            <p className="h-70 p-10 w-full text-black font-normal text-xl text-justify leading-8">{d.text}</p>
            <div className="w-80 h-70 overflow-hidden">
              <img src={d.image} alt={`image ${d.id}`} className="object-cover" />
            </div>
          </div>
        ) : (
          <div key={d.id} className="flex justify-center items-center space-x-5 m-10">
            <div className="w-80 h-70 overflow-hidden">
              <img src={d.image} alt={`image ${d.id}`} className="object-cover" />
            </div>
            <p className="h-70 p-10 w-full text-black font-normal text-xl text-justify leading-8">{d.text}</p>
          </div>
        )}
      )}
      
      {/* Empowering Future Text */}
      <h3 className="m-20 text-4xl font-bold text-center text-[rgba(239,133,8,1)]">Empowering Future, Enriching Lives.</h3>
    </div>
  );
};

export default AboutUs;







// import about1 from "./assets/About us 1.png";
// import about2 from "./assets/About us 2.png";

// const data = [
//   {id: 1, image: about1, text: "AJA Broadcom Pvt. Ltd. is a dynamic and diversified enterprise with a strong presence across multiple industries. The company operates a portfolio of businesses that span Trade, Commerce, Manufacturing, Information Technology, Transportation, and Defence. AJA Broadcom is also recognized for its expertise in Events Management, Brand Activation, Retail, and consumer outreach programs, creating impactful connections with audiences."},
//   {id: 2, image: about2, text: "Committed to making a positive difference, the organization actively engages in Non-Profit Social Responsibility initiatives, contributing to the betterment of communities and society at large. With its wide-ranging expertise and forward-thinking approach, AJA Broadcom continues to set benchmarks for excellence and innovation across its varied sectors, delivering value to its stakeholders while fostering sustainable growth."},
// ];

// const AboutUs = () => {
//   return (
//     <div className="font-stix max-w-screen-xl mx-auto px-6 py-10 bg-gray-50">
//       {/* Header */}
//       <h2 className="text-4xl md:text-6xl font-bold text-[rgba(239,133,8,1)] mt-4 text-center">About Us</h2>
      
//       {/* About Us Section */}
//       {data.map((d, index) => (
//         <div key={d.id} 
//           className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 my-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
          
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img src={d.image} alt={`image ${d.id}`} className="w-full max-w-sm md:max-w-md object-cover rounded-lg shadow-lg" />
//           </div>
          
//           <p className="w-full md:w-1/2 text-black font-normal text-lg md:text-xl text-justify leading-8 px-4 md:px-0">
//             {d.text}
//           </p>
//         </div>
//       ))}
      
//       {/* Empowering Future Text */}
//       <h3 className="mt-16 text-2xl md:text-4xl font-bold text-center text-[rgba(239,133,8,1)]">Empowering Future, Enriching Lives.</h3>
//     </div>
//   );
// };

// export default AboutUs;
