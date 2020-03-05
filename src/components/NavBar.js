import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import axios from "axios";

import { connect } from "react-redux";

import ScrollspyNav from "./SectionComponents/ScrollspyNav";
/* function mapStateToProps(state, ownProps) {
  const { fio } = state;

  // component receives additionally:
  return { fio: fio };
}

console.log(mapStateToProps); */
class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { auht: false, fio: 0 };
  }
  componentDidMount() {
    axios.post(`https://rucode.net/lk/ajax.php`).then(res => {
      let fio = res.data;
      this.setState({ fio });
    });
  }

  render() {
    return (
      <Navbar
        id="nav"
        fixed="top"
        className="nav bg_blue mx-auto p-0"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="px-3 mx-auto justify-content-around"
          id="basic-navbar-nav"
        >
          <ScrollspyNav
            scrollTargetIds={["regions", "coaches", "partners"]}
            activeNavClass="nav-link_is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <Nav className="mx-auto align-items-center">
              <Nav.Link href="#nav" className="">
                <img
                  src={process.env.PUBLIC_URL + "/images/logos/rucode_nav.png"}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="" className="">
                Фестиваль
              </Nav.Link>

              <Nav.Link href="#regions" className="">
                Регионы
              </Nav.Link>
              <Nav.Link href="#coaches" className="">
                Тренеры
              </Nav.Link>
              <Nav.Link href="#partners" className="">
                Партнёры
              </Nav.Link>
              {this.state.fio === 0 && (
                <Nav.Link
                  onClick={() => {
                    window.open("https://rucode.net/lk");
                  }}
                  href="https://rucode.net/lk"
                  className="text-white"
                >
                  Регистрация/Вход
                </Nav.Link>
              )}
              {this.state.fio !== 0 && (
                <Nav.Link href="https://rucode.net/lk">
                  {this.state.fio}
                </Nav.Link>
              )}
              <Nav.Link
                href="https://it-edu.com/"
                onClick={() => {
                  window.open("https://it-edu.com");
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/logos/lited.png"}
                  alt=""
                />
              </Nav.Link>
            </Nav>
          </ScrollspyNav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
// export default connect(mapStateToProps)(NavigationBar);
export default NavigationBar;
