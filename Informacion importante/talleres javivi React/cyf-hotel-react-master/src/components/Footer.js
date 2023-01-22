import React from "react";

const Footer = () => {
  const data = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer className="App-footer my-full-width">
      <ul className="my-flex-row">
        {data.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
