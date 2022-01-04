import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { AuthenticationContext } from "./App";

function Signin() {
  const { user, setUser } = useContext(AuthenticationContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validate, setValidate] = useState<any>({
    email: "",
    password: "",
  });

  function singin(e: any) {
    e.preventDefault();
    setLoading(true);

    if (validate.email === "") {
      setError("Please add email");
    }
    if (validate.password === "") {
      setError("Please add password");
    }

    signInWithEmailAndPassword(auth, validate.email, validate.password)
      .then((userCredential) => {
        console.log("userCredential", userCredential.user);
        setUser(userCredential.user);
        //save token to local storage here
        history.push("/home");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>
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
          <div className="w-100 text-center mt-2">
            Already have and account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Signin;
