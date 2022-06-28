import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
// import { Modal} from 'react-bootstrap';
import { Container, Dropdown, Header, Nav, Navbar, Button, Modal } from "rsuite";
import Cart from "../components/Cart";

function Topbar(props) {
  let navigate = useNavigate();

  const { username } = props.user;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  

  function handlelogOut (){
    props.logOut()
    navigate("/")
  }

  return (
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            SOLE SHOP
          </Navbar.Brand>
          {props.loggedIn ? (
            <>
              <Nav>
                <Nav.Item
                  onClick={() => {
                    navigate("/shoespage");
                  }}
                >
                  Shop
                </Nav.Item>
                <Nav.Item
                  onClick={() => {
                    navigate("/news");
                  }}
                >
                  News
                </Nav.Item>
              </Nav>
              <Nav pullRight>
                <Nav>
                  <Nav.Item
                    onClick={() => {
                      navigate("/sellpage");
                    }}
                  >
                    Sell
                  </Nav.Item>
                  <Nav.Item
                    onClick={() => {setShow(!show)}}
                  >Cart
                  </Nav.Item>
                  <Dropdown title={username}>
                    <Dropdown.Item onClick={() => {
                        navigate("/mylistings");
                      }}>Listings</Dropdown.Item>
                    {/* <Dropdown.Item
                      onClick={() => {
                        navigate("/wishlistpage");
                      }}
                    >
                      Wishlist
                    </Dropdown.Item> */}
                    <Dropdown.Item onClick={() => handlelogOut()}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown>
                </Nav>
              </Nav>
            </>
          ) : (
            <>
              <Nav pullRight>
                <Nav.Item
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </Nav.Item>
                <Nav.Item
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log In
                </Nav.Item>
              </Nav>
            </>
          )}
        </Navbar>
        <Modal
                    open={show}
                    onClose={handleClose}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Your Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Cart 
                        // userData={userData}
                        // cartItem={cartItem}
                        // setCartItem={setCartItem}
                    />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => alert("Get your money up not your funny up!")} >Checkout</Button>
                    </Modal.Footer>
                </Modal>  
      </Header>
    </Container>
  );
}

export default Topbar;

<></>;
