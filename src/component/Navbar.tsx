import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <Nav activeKey="/home" onSelect={() => {}}>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

    // <div className="navbar">
    //   <div className="navbar_first">
    //     <div className="navbar_insta_logo">
    //       <img src="/images/instagram.png" alt="" />
    //       <FaSistrix />
    //     </div>
    //   </div>
    //   <div className="navbar_middle">
    //     <div className="navbar_middle_search">
    //       <input type="text" className="navbar_search" placeholder="search" />
    //     </div>
    //   </div>
    //   <div className="navbar_last"></div>
    // </div>
  );
}

export default Navbar;
