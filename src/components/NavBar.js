import React from "react";
import { Nav, Navbar } from "react-bootstrap";

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <Navbar className="bg_blue mx-auto" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + "/images/logos/rucode_nav.png"}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="#link" className="text-white">
                Регистрация/Вход
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                FAQ
              </Nav.Link>

              <Nav.Link href="#home">
                <img
                  src={process.env.PUBLIC_URL + "/images/logos/lited.png"}
                  alt=""
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
