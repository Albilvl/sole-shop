import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Divider, FlexboxGrid } from "rsuite";

function ShoeDetails() {
  const params = useParams();

  const [shoe, setShoe] = useState({
    model: "",
    brand: "",
    image: "",
    price: 0,
    size: 0,
    user: {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
    },
  });

  useEffect(() => {
    fetch(`/shoes/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => setShoe(data));
  }, []);

  return (
    <div>
      <FlexboxGrid align="middle">
        <FlexboxGrid.Item colspan={12}>
          <img src={shoe.image} style={{ width: "100%" }} />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={2}></FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={10} align="center">
          <h1>
            {shoe.brand} {shoe.model}
          </h1>
          <br/>
          <h3>{shoe.colorway}</h3>
          <Divider />
          <h4>Size: {shoe.size}</h4>
          <h4>${shoe.price}</h4>
          <h4>Seller: {shoe.user.username}</h4>
          <br />
          <Button appearance="primary" >
            Add To Cart
          </Button>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default ShoeDetails;
