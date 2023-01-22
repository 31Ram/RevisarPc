import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import PropTypes from "prop-types";

const Order = ({ orderType, startFrom = -1, increment = -1 }) => {
  const [orders, setOrders] = useState(startFrom);

  const handleClick = () => {
    setOrders(orders + increment);
  };
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton handleClick={handleClick} />
    </li>
  );
};

Order.propTypes = {
  orderType: PropTypes.string.isRequired,
  startFrom: PropTypes.number,
  increment: PropTypes.number
};

export default Order;
