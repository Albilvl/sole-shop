import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, Col, Divider, Panel } from "rsuite";

function ShoeCard(props) {
    
  const navigate = useNavigate()
  return (
    <Col md={6} sm={12}>
      <Panel
        shaded 
        
        style={{
          verticalAlign: "middle",
          height: "500px",
        }}
        align="center"
      >
        <img
          src={props.shoe.image}
          style={{ display: "inline-block", width: "100%", height: "160px" }}
          alt={props.shoe.colorway}
          onClick={() => navigate(`/shoes/${props.shoe.id}`)}
        />
        <Divider />
        <Panel header={<b>{props.shoe.model}</b>}>
          <h6>"{props.shoe.colorway}"</h6>
          <br />
          <h6>
            Size: {props.shoe.size} <Divider vertical /> ${props.shoe.price}
          </h6>
        </Panel>
        <Panel>
          <ButtonToolbar>
            <Button appearance="primary" onClick={()=>props.handleClick(props.shoe)} >{props.text === "Listing" ? <>Remove</> : <>Add to Cart</>}</Button>
            {/* <Button appearance="primary">Add to Cart</Button> */}
          </ButtonToolbar>
        </Panel>
      </Panel>
    </Col>
  );
}

export default ShoeCard;
