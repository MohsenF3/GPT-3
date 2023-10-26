import React from "react";

import "./features.scss";

const Features = () => {
  const featuresItem = [
    {
      id: 1,
      title: "Improving end distrusts instantly",
      subtitle:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      id: 2,
      title: "Become the tended active",
      subtitle:
        "Considered sympathize ten uncommonly occasional assistance  sufficient not. Letter of on become he tended active enable to.",
    },
    {
      id: 3,
      title: "Message or am nothing",
      subtitle:
        "Led ask possible mistress relation elegance eat likewise debating. Considered sympathize ten uncommonly occasional assistance",
    },
    {
      id: 4,
      title: "Really boy law county",
      subtitle:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  return (
    <>
      <section className="features section-padding">
        <div className="features-title">
          <h1 className="text-gradient">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <span>Request Early Access to Get Started</span>
        </div>
        <div className="features-info">
          {featuresItem.map(({ id, title, subtitle }) => {
            return (
              <div className="features-item" key={id}>
                <h3 className="section-title">{title}</h3>
                <p className="section-subtitle">{subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
