import React from "react";
import Card from "./Card";

const TouristInfoCards = () => {
  return (
    <div className="App-content">
      <div className="container">
        <div className="my-flex-row">
          <Card
            imgSrc="https://picsum.photos/seed/picsum/200/300"
            href="https://visitmanchester.com"
          />
          <Card
            imgSrc="https://picsum.photos/200/300?grayscale"
            href="https://peoplemakeglasgow.com/"
          />
          <Card
            imgSrc="https://picsum.photos/200/300/?blur"
            href="https://visitlondon.com"
          />
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
