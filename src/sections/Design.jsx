import React, { useState } from "react";
import graphic from "../assets/images/graphic.png";

export default function Design() {
  const [active, setActive] = useState(1);

  const services = [
    { id: 1, number:"01", title: "GRAPHIC DESIGN", image: graphic },
    { id: 2, number:"02", title: "ART DIRECTION", image: graphic },
    { id: 3, number:"03", title: "BRAND STRATEGY", image: graphic },
    { id: 4, number:"04", title: "MOTION", image: graphic },
  ];

  return (
    <section className="main-space">
      <div className="container">
        <div className="services">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-item ${active === service.id ? "active" : ""}`}
              onClick={() => setActive(service.id)} >
              <span className="service-number">
                {service.number.toString().padStart(2, "0")}
              </span>
              <h2
                className={`service-title ${
                  active === service.id ? "active-title" : ""}`}>
                {service.title}
              </h2>
              {active === service.id && service.image && (
                <div className="service-box">
                  <img src={service.image} alt={service.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
