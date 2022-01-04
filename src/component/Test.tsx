// import React from "react";
import { Container, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import "./Navbar.css";
function Test() {
  const AddPost = () => {};
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="#fff"
        variant="dark"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "54px",
          background: "#fff",
          display: "flex",
          padding: "0 20px",
          borderBottom: " 1px solid #efefef",
          alignItems: "center",
        }}
      >
        <Container>
          <a className="navbar-brand" href="/">
            <div className="logo-image">
              <img src="/images/instagram.png" className="img-fluid" />
            </div>
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{
              justifyContent: "space-evenly",
            }}
          >
            <Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav className="check">
              <Nav.Link eventKey={2} href="#memes">
                <img
                  className="image_Svg"
                  src="https://img.icons8.com/fluency-systems-filled/48/000000/home.png"
                />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <img
                  className="image_Svg"
                  src="https://img.icons8.com/ios/50/000000/facebook-messenger--v1.png"
                />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <img
                  className="image_Svg"
                  src="https://img.icons8.com/small/50/000000/plus-2-math.png"
                />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img
                  className="image_Svg"
                  src="https://img.icons8.com/material-outlined/24/000000/compass.png"
                />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <img
                  className="image_Svg"
                  src="https://img.icons8.com/ios/50/000000/like--v1.png"
                />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <img
                  onClick={AddPost}
                  className="profile_image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiTzVrQgEwiIHIFhk5m2NpsFxGDg8re2c3g&usqp=CAU"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Test;
