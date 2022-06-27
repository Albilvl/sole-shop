import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Dropdown, Header, Nav, Navbar } from "rsuite";

function Topbar(props) {
  let navigate = useNavigate();

  const { username } = props.user;

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
                  <Nav.Item>Cart</Nav.Item>
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
      </Header>
    </Container>
  );
}

export default Topbar;

<></>;
