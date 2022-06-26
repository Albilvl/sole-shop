import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, FlexboxGrid, Form, Panel } from "rsuite";

function Login(props) {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const userInfo = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.jwt !== undefined) {
          console.log(res.jwt);
          localStorage.token = res.jwt;
          props.setCurrentUser(res.user);
          navigate("/shoespage")
        } else {
          alert(res.error);
        }
      });
  }

  

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Login</h3>} bordered>
            <Form fluid>
              <Form.Group>
                <Form.ControlLabel>Username</Form.ControlLabel>
                <Form.Control
                  onChange={(e) => setUsername(e)}
                  name="username"
                />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control
                  onChange={(e) => setPassword(e)}
                  name="password"
                  type="password"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button appearance="primary" onClick={() => handleLogin()}>
                    Sign in
                  </Button>
                  <Button appearance="link" onClick={() => navigate("/signup")}>
                    Create Account
                  </Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}

export default Login;
