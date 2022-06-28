import { React, useEffect, useState } from "react";
import { Button, Divider, Row } from "rsuite";
import ShoeCard from "../components/ShoeCard";
import {useNavigate} from "react-router-dom"

function MyListings() {
  const [myArray, setMyArray] = useState([]);
  let navigate = useNavigate();

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


  function handleDelete(deletedShoe){
    fetch(`/shoes/${deletedShoe.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(()=>{
      const updatedShoes = myArray.filter(shoe => shoe.id !== deletedShoe.id)
      setMyArray(updatedShoes)
    })
    
  }



  return (
    <div>
      <h1>Your Listings </h1>
      <Divider />
      <Row>
        {myArray.map((shoe) => (
          <ShoeCard shoe={shoe} key={shoe.id} text="Listing" handleClick= {handleDelete}/>
        ))}
        {myArray.length === 0 && 
        <div>
          <Button onClick= {() => navigate("/sellpage")}>CREATE A LISTING</Button>
        </div> }
      </Row>
    </div>
  );
}

export default MyListings;
