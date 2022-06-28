import {React, useState} from "react";
import { Button, ButtonToolbar, FlexboxGrid, Form, Panel } from "rsuite";
import { useNavigate } from "react-router-dom";


function SellPage() {

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [image, setImage] = useState('')
  const [colorway, setColorway] = useState('')

  const navigate = useNavigate()



  function listShoe (){
    const newShoe = {
      brand,
      model,
      price,
      size,
      image,
      colorway
    }

    fetch("/shoes", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newShoe),
    })
    .then((res) => res.json())
    .then(res => {
      if(res.id === undefined){
        alert("Error")
      } else {navigate("/shoespage")}
    })
  }


  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <FlexboxGrid align="middle" justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Create a listing</h3>} bordered>
            <Form fluid>
              <Form.Group>
                <Form.ControlLabel> Brand</Form.ControlLabel>
                <Form.Control onChange={(e)=> setBrand(e)} name="model" />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Model</Form.ControlLabel>
                <Form.Control onChange={(e)=> setModel(e)} name="model" />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Colorway</Form.ControlLabel>
                <Form.Control onChange={(e)=> setColorway(e)} name="Colorway" />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Price</Form.ControlLabel>
                <Form.Control onChange={(e)=> setPrice(e)} name="price" />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Size</Form.ControlLabel>
                <Form.Control onChange={(e)=> setSize(e)} name="size"  />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Image</Form.ControlLabel>
                <Form.Control onChange={(e)=> setImage(e)} name="image"  />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button onClick={()=> listShoe()} appearance="primary">Submit</Button>
                  <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}

export default SellPage;
