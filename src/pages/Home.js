import React, { useEffect, useState } from "react";
import Page from "../components/Page";

const Home = () => {
  let page = "home";
  const depop_link = `https://webapi.depop.com/api/v1/shop/${process.env.REACT_APP_USER_ID}/products/?limit=24`;
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch(depop_link, {
      method: "GET",
      httpNodeCors: {
        origin: "*",
        methods: "GET,PUT,POST,DELETE",
      },
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log("Error:", error));
    // response.json())
    // .then((data) => {
    //   setBackendData(data);
    // });
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
