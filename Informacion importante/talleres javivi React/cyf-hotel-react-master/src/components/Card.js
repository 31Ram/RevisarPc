import React from "react";

const Card = ({ imgSrc, href }) => {
  return (
    <div className="card my-col-4">
      <img src={imgSrc} alt="city" className="card-img-top" />
      <div className="card-body">
        <a href={href} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
