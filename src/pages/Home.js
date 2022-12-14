import React, { useEffect, useState } from "react";

const Home = () => {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    const depop_link = `https://webapi.depop.com/api/v1/shop/${process.env.REACT_APP_USER_ID}/products/?limit=24`;
    fetch(depop_link)
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  console.log(backendData);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>here</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
};

export default Home;
