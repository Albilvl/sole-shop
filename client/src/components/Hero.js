import { React } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "rsuite";
import "../styles/Hero.css";

function Hero(props) {

  const navigate = useNavigate();

  function redirect() {
    if (!props.loggedIn) {
      navigate("/signup");
    } else {
      navigate("/shoespage");
    }
  }

  return (
    <>
      <div className="hero-container">
        <h1>For True Sole Searchers!</h1>
        <br />
        <br />
        <br />
        <Button color="blue" appearance="subtle" onClick={()=>redirect()}>
          <h3>SHOP</h3>
        </Button>
      </div>
    </>
  );
}

export default Hero;
