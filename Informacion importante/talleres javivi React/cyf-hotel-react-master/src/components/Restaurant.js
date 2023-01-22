import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="last-element">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="salads" startFrom={2} increment={5} />
        <Order orderType="pizzas" startFrom={10} increment={10} />
        <Order orderType="cakes" startFrom={888} increment={888} />
        <Order orderType="beberages" />
      </ul>
    </div>
  );
};

export default Restaurant;
