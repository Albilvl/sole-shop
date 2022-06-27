import React from "react";
import { Timeline } from "react-twitter-widgets";
import { Divider, Row } from "rsuite";

function News({user}) {
  return (
    <div>
      <h1> Welcome back, {user.username} </h1>
      <Divider />
      <Row>
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

export default News;
