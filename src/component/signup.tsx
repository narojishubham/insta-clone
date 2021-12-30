import react, { useContext, useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { auth } from "../firebase/firebaseConfig";
import { AuthContext, useAuth } from "./contexts/AuthContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationData, setValidationData] = useState<any>({
    password: "",
    confirmPassword: "",
    email: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    console.log("onSubmit", validationData);

    if (validationData.password !== validationData.confirmPassword) {
      setLoading(false);
      return setError("Password do not match");
    }
    if (validationData.email === "") {
      setError("Please add email");
    }
    // const auth = getAuth();

    // NEW CODE

    createUserWithEmailAndPassword(
      auth,
      validationData.email,
      validationData.password
    )
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        history.push("/home");
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log("errpr", error);
        setLoading(false);
      });
    // NEW ABOVE CODE

    // signInWithEmailAndPassword(
    //   auth,
    //   validationData.email,
    //   validationData.password
    // )
    //   .then((userCredential) => {
    //     console.log("userCredential", userCredential);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
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
              <h2 className="text-center mb-4">Sign up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    onChange={(e: any) => {
                      setValidationData({
                        ...validationData,
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
                      setValidationData({
                        ...validationData,
                        password: e.target.value,
                      });
                    }}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password_confirm">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control
                    className="mb-2"
                    type="password"
                    onChange={(e: any) => {
                      setValidationData({
                        ...validationData,
                        confirmPassword: e.target.value,
                      });
                    }}
                    required
                  ></Form.Control>
                </Form.Group>
                <Button disabled={loading} className="w-100 " type="submit">
                  {loading ? "Loading…" : "Sign Up"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have and account? Login
          </div>
        </div>
      </Container>
    </>
  );
};
export default Signup;

// import React, { useEffect, useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "./contexts/AuthContext";

// const Signup = () => {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const password_confirmRef = useRef(null);
//   // pilling signup from auth context
//   const { Signup } = useAuth();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     // it prevent from refreshing
//     console.log("e", e);
// Signup(emailRef.current.value, passwordRef.current.value)
//     // validation check
//     // if (
//     //   passwordRef?.current?.value !== password_confirmRef?.current?.value ) {
//     //   return setError("Password do not match");
//     // }
//     // try {
//     //   setError("");
//     //   setLoading(true);
//     //   // will do signup
//     //   await Signup(emailRef?.current?.value, passwordRef?.current?.value);
//     // } catch {
//     //   setError("Failed to create and account");
//     // }
//     // setLoading(false);
//   }

//   useEffect(() => {
//     // emailRef;
//     // passwordRef;
//     // password_confirmRef;
//   }, []);

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign up</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required></Form.Control>
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordRef}
//                 required
//               ></Form.Control>
//             </Form.Group>
//             <Form.Group id="password_confirm">
//               <Form.Label>Password Confirm</Form.Label>
//               <Form.Control
//                 className="mb-2"
//                 type="password"
//                 ref={password_confirmRef}
//                 required
//               ></Form.Control>
//             </Form.Group>
//             <Button disabled={loading} className="w-100 " type="submit">
//               Sign Up
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already have and account? Login
//       </div>
//     </>
//   );
// };
// export default Signup;
