
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import '../style/Login.css';
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation checks
    if (email.trim() === "") {
      setErrorMessage("Please enter your email.");
      return;
    }

    if (password.trim() === "") {
      setErrorMessage("Please enter your password.");
      return;
    }

    // Validation passed, perform login logic here
    console.log("Login successful!");
  };

  return (
    <div className="ssb">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-dark"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Clicky</h2>
                  <p className=" mb-5">
                    <b className="ty">Please enter your login and password!</b>{" "}
                  </p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center ">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>  Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="forget" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group> 


                      <div className="d-grid text-decoration-none">
                        <Button
                          className="btn btn-warning"
                          variant="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>

                      
                    </Form>
                    {errorMessage && ( // Display error message if it exists
                      <div className="alert alert-danger mt-3" role="alert">
                        {errorMessage}
                      </div>
                    )}
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/signup"  className="si fw-bold text-decoration-none">Sign Up</Link>
                        
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 

