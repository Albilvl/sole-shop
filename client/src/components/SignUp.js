import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar, FlexboxGrid, Form, Panel } from "rsuite";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    // e.preventDefault()

    const newUser = {
      username,
      email,
      password,
    };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors !== undefined) {
          let msg = "";
          console.log(response.errors);
          response.errors.map((error) => {
            msg += error + "\n";
          });
          alert(msg);
        } else  {
          console.log(response)
          alert("Account Created!");
          navigate("/login");
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
      <FlexboxGrid align="middle" justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Sign Up</h3>} bordered>
            <Form fluid>
              <Form.Group>
                <Form.ControlLabel>Username</Form.ControlLabel>
                <Form.Control
                  onChange={(e) => setUsername(e)}
                  name="username"
                />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control onChange={(e) => setEmail(e)} name="email" />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e)}
                />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button
                    appearance="primary"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    appearance="link"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Already have account?
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

export default SignUp;
