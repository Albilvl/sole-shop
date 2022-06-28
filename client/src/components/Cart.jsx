import React from "react";
import { Panel, Row, PanelGroup,  Col, Button } from  "rsuite";

function Cart() {
  const cartItem = [
    {
      id: 1,
      model: "Jordan 1",
      size: 12,
      brand: "Nike",
      price: 500,
      colorway: "Hyper Royal",
      image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1618238995",
    },
    {
      id: 1,
      model: "Jordan 1",
      size: 12,
      brand: "Nike",
      price: 500,
      colorway: "Hyper Royal",
      image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1618238995",
    },
  ];

 
  const shoppingItems = cartItem.map((cart) => (
    <>
      <div >
      <Button size="xs" color="red" appearance="subtle">Remove</Button>
        <Panel >
          <img alt={cart.colorway} src={cart.image} height="50" />
      <div className="div2">
        <h6>{cart.name}</h6>
        <p style={{ color: "gray" }}>{cart.colorway}</p>
        <p style={{ color: "green" }}>
          {"$"}
          {cart.price}
        </p>
      </div>
        </Panel>
      </div>
    </>
  ));

  return (
    <div>
      {cartItem.length === 0 && <div><h5>Cart is empty</h5><p>Gotta buy something!</p></div>}
      {shoppingItems}
    </div>
  );
}

export default Cart;
