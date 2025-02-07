// import React from "react";

import branding from "./assets/Services branding.png";
import cinema from "./assets/Services cinema.png";
import large from "./assets/Services large.png";
import notify from "./assets/Services main.png";
import mall from "./assets/Services mall.png";
import mice from "./assets/Services mice.png";
import radio from "./assets/Services radio.png";

const data = [
  {id: 1, image: large, notifyText: "#EventPlanning", title: "Large scale Events", text: "At AJA, we specialize in orchestrating large-scale events that leave a lasting impact. From conferences and trade shows to festivals and corporate galas, our team has the expertise to handle every detail, ensuring a seamless and unforgettable experience for attendees. With a keen eye for innovation, we create immersive environments that engage, inspire, and foster meaningful connections. Whether you're looking to showcase your brand, share ground breaking insights, or celebrate a milestone, AJA delivers events that exceed expectations and elevate your vision with 20+ years of experience. "},
  {id: 2, image: mall, notifyText: "#BrandActivation", title: "Mall Activation", text: "At AJA, we bring brands to life through dynamic mall activations that captivate and engage shoppers in exciting new ways. Our team creates interactive, visually stunning experiences designed to drive foot traffic, increase brand awareness, and foster customer loyalty. Whether it’s a pop-up shop, experiential marketing campaign, or promotional event, we craft unique and memorable moments that resonate with consumers. With a strategic approach and meticulous execution, AJA ensures that every mall activation is a powerful, results-driven experience."},
  {id: 3, image: branding, notifyText: "#BrandDesign", title: "Branding And Marketing", text: "At AJA, we believe in the power of strategic branding and marketing to create a strong, lasting connection between businesses and their audiences. Our team works closely with clients to develop tailored branding strategies that reflect their values and resonate with their target market. From logo design and visual identity to comprehensive marketing campaigns, we craft cohesive brand experiences that drive growth and increase visibility. Whether you’re building a brand from the ground up or looking to refresh your presence, AJA combines creativity, insight, and innovation to elevate your brand in a competitive marketplace."},
  {id: 4, image: mice, notifyText: "#BusinessEvents", title: "MICE", text: "At AJA, we specialize in MICE (Meetings, Incentives, Conferences, and Exhibitions) to deliver impactful, brand-driven experiences that resonate with your audience. By combining innovative event management with strategic branding and marketing, we create immersive environments that not only showcase your brand but also foster lasting connections and business opportunities. Whether you’re hosting a corporate meeting, an incentive program, or a large-scale exhibition, our team ensures your brand message is seamlessly integrated into every aspect of the event. From pre-event marketing to on-site activation, we drive engagement and ensure your brand stands out, leaving a memorable impression on all attendees."},
  {id: 5, image: cinema, notifyText: "#CreativeAds", title: "Cinema Ads", text: "At AJA, we leverage the power of cinema advertising to deliver your brand’s message in a captivating and immersive way. Cinema ads offer a unique opportunity to engage a captive audience in a dynamic, high-impact environment. Whether through trailers, featurettes, or on-screen branding, we create tailored ad campaigns that enhance your brand's visibility and connect with consumers on an emotional level. With strategic targeting and creative execution, AJA ensures your cinema ads leave a lasting impression, driving awareness and fostering strong consumer loyalty."},
  {id: 6, image: radio, notifyText: "#RadioAdvertising", title: "Radio Broadcast", text: "At AJA, we harness the power of radio broadcast to amplify your brand’s message through an engaging and trusted medium. With its wide reach and intimate connection with listeners, radio offers a unique opportunity to target diverse audiences with precision and impact. Whether through traditional spots, live reads, or sponsored segments, we craft compelling radio campaigns that capture attention and drive brand awareness. Our team works closely with you to ensure your message is delivered effectively, creatively, and in a way that resonates with listeners, making a lasting impression on your target market."},

];

const Services = () => {
  return (
    <div className="font-stix max-w-screen-xl mx-auto p-10">
      {/* Header */}
      
      {/* About Us Section */}
      <h2 className="text-6xl font-bold text-[rgba(239,133,8,1)] mt-4 mb-20 text-center">Services</h2>

      {data.map((d)=>{
        return d.id%2 == 0 ? (
          <div key={d.id} className="flex justify-center items-start space-x-5 m-20">
            <div>
                <h2 className="text-center text-4xl font-sans font-semibold mb-6">{d.title}</h2>
                <p className="bg-gray-100 p-5 max-w-screen-lg text-black font-normal text-lg text-justify ">{d.text}</p>
            </div>
            <div className="w-80 h-70 relative">
              <img src={d.image} alt={`image ${d.id}`} className="object-cover" />
              <div className="absolute -top-11 -left-28">
                    <div className="w-40 h-40 relative">
                        <img src={notify} alt="notify" className="rotate-180"/>
                        <p className="absolute top-5 left-5">{d.notifyText}</p>
                    </div>
                </div>
            </div>
          </div>
        ) : (
          <div key={d.id} className="flex justify-center items-center space-x-5 m-20">
            <div className="w-80 h-70 relative">
              <img src={d.image} alt={`image ${d.id}`} className="object-cover" />
              <div className="absolute -top-11 -right-28">
                <div className="w-40 h-40 relative">
                    <img src={notify} alt="notify" className="scale-y-[-1]"/>
                    <p className="absolute top-5 left-6">{d.notifyText}</p>
                </div>
              </div>
            </div>
            <div>
                <h2 className="text-center text-4xl font-sans font-semibold mb-6">{d.title}</h2>
                <p className="bg-gray-100 p-5 max-w-screen-lg text-black font-normal text-lg text-justify ">{d.text}</p>
            </div>
          </div>
        )}
      )}
    </div>
  );
};

export default Services;
