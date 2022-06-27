import { React, useEffect, useState } from "react";
import { Divider, Row } from "rsuite";
import ShoeCard from "../components/ShoeCard";

function MyListings() {
  const [myArray, setMyArray] = useState([]);

  function myFetch() {
    fetch("/myshoes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((array) => setMyArray(array));
  }

  useEffect(() => {
    myFetch();
  }, []);

  return (
    <div>
      <h1>Your Listings </h1>
      <Divider />
      <Row>
        {myArray.map((shoe) => (
          <ShoeCard shoe={shoe} key={shoe.id} text="Listing" />
        ))}
      </Row>
    </div>
  );
}

export default MyListings;
