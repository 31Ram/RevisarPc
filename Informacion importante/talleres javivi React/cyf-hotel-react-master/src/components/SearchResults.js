import React, { useState } from "react";
import moment from "moment/moment";
import PropTypes from "prop-types";

const SearchResults = ({ results, showProfile }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addOrRemove = (selectedArr, item) => {
    return selectedArr.includes(item)
      ? selectedArr.filter(i => i !== item)
      : [...selectedArr, item];
  };

  const handleClick = id => {
    setSelectedItems(addOrRemove(selectedItems, id));
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights</th>
          <th scope="col">profile</th>
        </tr>
      </thead>
      <tbody>
        {results.map(el => {
          const checkIn = moment(el.checkInDate);
          const checkOut = moment(el.checkOutDate);
          const difference = checkOut.diff(checkIn, "days");
          return (
            <tr
              key={el.id}
              onClick={() => handleClick(el.id)}
              className={
                selectedItems.indexOf(el.id) >= 0 ? "selected" : undefined
              }
            >
              <td>{el.title}</td>
              <td>{el.firstName}</td>
              <td>{el.surname}</td>
              <td>{el.email}</td>
              <td>{el.roomId}</td>
              <td>{el.checkInDate}</td>
              <td>{el.checkOutDate}</td>
              <td>{difference}</td>
              <td>
                <button onClick={() => showProfile(el.id)}>show</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired
};

export default SearchResults;
