import { React, useEffect, useState } from "react";
import { Divider, Input, Row } from "rsuite";
import ShoeCard from "../components/ShoeCard";

function ShoesPage() {
  const [wishArray, setWishArray] = useState([]);
  const [shoes, setShoes] = useState([]);

  // const shoes = [
  //   {
  //     model: "Jordan 1",
  //     size: "12",
  //     price: "300",
  //     colorway: "Hyper Royal",
  //     image:
  //       "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1618238995",
  //   },
  //   {
  //     model: "Jordan 1",
  //     size: "8",
  //     price: "200",
  //     colorway: "Turbo Green",
  //     image:
  //       "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Turbo-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606324093",
  //   },
  //   {
  //     model: "Jordan 6",
  //     size: "9.5",
  //     price: "450",
  //     colorway: "Travis Scott Wheat",
  //     image: "https://cdn.flightclub.com/TEMPLATE/207250/1.jpg",
  //   },
  //   {
  //     model: "Jordan 4",
  //     size: "12.5",
  //     price: "800",
  //     colorway: "Black Cat",
  //     image:
  //       "https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cat-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606315877",
  //   },
  //   {
  //     model: "Jordan 1",
  //     size: "6",
  //     price: "400",
  //     colorway: "Bred Toes",
  //     image:
  //       "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Bred-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322598",
  //   },
  //   {
  //     model: "Yeezy Foam Runners",
  //     size: "10",
  //     price: "870",
  //     colorway: "Ararat",
  //     image: "https://cdn.flightclub.com/TEMPLATE/255869/1.jpg",
  //   },
  //   {
  //     model: "Fragment Jordan 1",
  //     size: "12",
  //     price: "2400",
  //     colorway: "Blue",
  //     image:
  //       "https://images.stockx.com/images/Air-Jordan-1-High-OG-SP-fragment-design-x-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1628097985",
  //   },
  //   {
  //     model: "Fear of God 1",
  //     size: "12",
  //     price: "1400",
  //     colorway: "Bone",
  //     image:
  //       "https://images.stockx.com/images/Nike-Air-Fear-Of-God-1-Light-Bone-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607044139",
  //   },
  //   {
  //     model: "Nike Air Max Patta",
  //     size: "12",
  //     price: "300",
  //     colorway: "Blue",
  //     image: "https://cdn.flightclub.com/TEMPLATE/283231/1.jpg",
  //   },
  // ];


  function fetchShoes (){
    fetch("/shoes", { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    }).then(res => res.json())
    .then(shoesArray=> setShoes(shoesArray))
  }

  useEffect(()=>{
    fetchShoes()
  }, [])


  const [shoeSearch, setShoeSearch] = useState("");

  const displayedShoes = shoes.filter((shoe) => {
    return (
      shoe.model.toLowerCase().includes(shoeSearch.toLowerCase()) ||
      shoe.colorway.toLowerCase().includes(shoeSearch.toLowerCase())
    );
  });

  function handleWishClick(shoe) {
    const findDups = wishArray.find((item) => item.id === shoe.id);
    if (!findDups) {
      setWishArray([...wishArray, shoe]);
    }
  }

 

  return (
    <div>
      <h1>Current Listings</h1>
      <Divider />
      <Row>
        <Input
          onChange={(e) => {
            setShoeSearch(e);
          }}
          placeholder="Search...."
        />
      </Row>
      <br />
      <Row>
        {displayedShoes.map((shoe) => (
          <ShoeCard
            shoe={shoe}
            key={shoe.id}
            text="ShoesPage"
            handleClick={handleWishClick}
          />
        ))}
      </Row>
    </div>
  );
}

export default ShoesPage;
