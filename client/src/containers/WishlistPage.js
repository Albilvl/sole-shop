import { React, useState } from "react";
import YouTube from "react-youtube";
import { Divider, Row } from "rsuite";
import { Timeline } from "react-twitter-widgets";

function WishlistPage() {
 

  const opts = {
    height: "250",
    width: "400",
    playerVars: {
      autoplay: 1,
    },
  };


 
  return (
    <div>
      <h1>Your Wishlist</h1>
      <Divider />
      <Row>
        <YouTube videoId="_NT4O5Moe2Q" opts={opts} />
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "SneakerNews" }}
          options={{
            height: "800",
          }}
        />
      </Row>
    </div>
  );
}

export default WishlistPage;
