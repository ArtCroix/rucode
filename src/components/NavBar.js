import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import axios from "axios";

import { connect } from "react-redux";
import Scrollspy from "react-scrollspy";
import ScrollspyNav from "react-scrollspy-nav";
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
    axios.post(`https://it-edu.com/rucode/ajax.php`).then(res => {
      let fio = res.data;
      this.setState({ fio });
    });
  }

  render() {
    return (
      <Navbar fixed="top" className="bg_blue mx-auto p-0" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="px-3 mx-auto justify-content-center"
          id="basic-navbar-nav"
        >
          <Navbar.Brand href="#home" className="ml-3">
            <img
              src={process.env.PUBLIC_URL + "/images/logos/rucode_nav.png"}
              alt=""
            />
          </Navbar.Brand>
          <ScrollspyNav
            scrollTargetIds={[
              "regions",
              "coaches",
              "partners"
              /*           "about",
              "course",
              "selections",
              "intense",
              "championat",
              "reviews",
              "faq" */
            ]}
            activeNavClass="nav-link_is-active"
            scrollDuration="1000"
            offset="0"
            headerBackground="true"
            // headerBackground="true"
          >
            <Nav className="mx-auto align-items-center">
              <Nav.Link href="" className="">
                Фестиваль
              </Nav.Link>
              {/*               <Nav.Link href="#course" className="">
                Онлайн-курс
              </Nav.Link>
              <Nav.Link href="#selections" className="">
                Отборы
              </Nav.Link>
              <Nav.Link href="#intense" className="">
                Интенсивы
              </Nav.Link>
              <Nav.Link href="#championat" className="">
                Чемпионат
              </Nav.Link> */}
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
                  href="https://it-edu.com/rucode"
                  className="text-white"
                >
                  Регистрация/Вход
                </Nav.Link>
              )}
              {this.state.fio !== 0 && (
                <Nav.Link href="" className="">
                  {this.state.fio}
                </Nav.Link>
              )}
              <Nav.Link href="#home">
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
