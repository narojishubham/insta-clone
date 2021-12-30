import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { auth } from "../firebase/firebaseConfig";

function Signin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validate, setValidate] = useState<any>({
    email: "",
    password: "",
  });

  function singin(e: any) {
    e.preventDefault();
    setLoading(true);

    console.log("onSubmit", validate);

    if (validate.email === "") {
      setError("Please add email");
    }
    if (validate.password === "") {
      setError("Please add password");
    }
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, validate.email, validate.password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={singin}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e: any) => {
                  setValidate({
                    ...validate,
                    email: e.target.value,
                  });
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e: any) => {
                  setValidate({
                    ...validate,
                    password: e.target.value,
                  });
                }}
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100 " type="submit">
              log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default Signin;
