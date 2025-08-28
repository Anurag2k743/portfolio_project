import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import client1 from "../assets/images/clients.png";
import client2 from "../assets/images/clients.png";
import client3 from "../assets/images/clients.png";
import leftarrow from "../assets/images/left-arrow.png";
import quote from "../assets/images/Elment.png";


export default function ClientsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const clients = [
    {
      id: 1,
      image: client1,
      text: "long tail equity interaction design creative. Deployment paradigm shif rockstar sales supply chain twitter. Monetization succses customer iteration iPad early adopters. Research & development A/B testing gen-z stock ramen creative leverage early adopters branding innovator pivot.",
      name: "ROBY GALA",
      position: "President of Sales",
    },
    {
      id: 2,
      image: client2,
      text: "long tail equity interaction design creative. Deployment paradigm shif rockstar sales supply chain twitter. Monetization succses customer iteration iPad early adopters. Research & development A/B testing gen-z stock ramen creative leverage early adopters branding innovator pivot.", name: "JANE DOE",
      position: "Marketing Director",
    },
    {
      id: 3,
      image: client3,
      text: "long tail equity interaction design creative. Deployment paradigm shif rockstar sales supply chain twitter. Monetization succses customer iteration iPad early adopters. Research & development A/B testing gen-z stock ramen creative leverage early adopters branding innovator pivot.", name: "JOHN SMITH",
      position: "CEO",
    },
  ];

  return (
    <section className="clients-section main-space">
      <div className="container">
        <div className="clients-header">
          <h2 className="clients-heading">MY CLIENTS</h2>

          <div className="clients-nav">
            <div
              ref={prevRef}
              className={`swiper-button-prev-custom ${isBeginning ? "disabled" : ""}`} >
              <img src={leftarrow} alt="prev" />
            </div>
            <div
              ref={nextRef}
              className={`swiper-button-next-custom ${isEnd ? "disabled" : ""}`}   >
              <img src={leftarrow} alt="next" className="arrow-right" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          loop={false}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();

            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="clients-swiper" >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="client-slide">
                <div className="client-img">
                  <img src={client.image} alt={client.name} />
                </div>

                <div className="client-content">
                  <p>{client.text}</p>
                  <h5>{client.name}</h5>
                  <p>{client.position}</p>
                </div>
              </div>

              <div className="quote">
                <img src={quote} alt="" />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
