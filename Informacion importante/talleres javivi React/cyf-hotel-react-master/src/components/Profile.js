import React, { useState, useEffect } from "react";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(userId);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, [userId]);

  return (
    <>
      <div>{user.firstName}</div>
      <div>{user.surname}</div>
    </>
  );
};

export default Profile;
