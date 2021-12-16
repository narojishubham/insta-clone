import react, { useEffect, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmRef = useRef(null);

  useEffect(() => {
    emailRef;
    passwordRef;
    password_confirmRef;
  }, []);
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>

          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password_confirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control
                className="mb-2"
                type="password_confirm"
                ref={password_confirmRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button className="w-100 " type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have and account? Login
      </div>
    </>
  );
};
export default Signup;
