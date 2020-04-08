import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import axios from "axios";
import localeAction from "../actions/LocaleAction";
import { connect } from "react-redux";
import ScrollspyNav from "./SectionComponents/ScrollspyNav";

const mapStateToProps = (store, ownProps) => {
  return { store };
};

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auht: false, fio: 0, locale: props.store.locale };
  }
  componentDidMount() {
    axios.post(`https://rucode.net/lk/ajax.php`).then(res => {
      let fio = res.data;
      this.setState({ fio });
    });
  }

  setLocale = locale => {
    this.props.localeAction(locale);
    this.setState({ locale: locale });
    function replaceQueryString(url, param, value) {
      var re = new RegExp("([?|&])" + param + "=.*?(&|$)", "i");
      if (url.match(re))
        return url.replace(re, "$1" + param + "=" + value + "$2");
      else return url + param + "=" + value;
    }
    if ("URLSearchParams" in window) {
      var searchParams = new URLSearchParams(window.location.search);
      // searchParams.set("/?lang", locale);
      window.history.replaceState(
        null,
        "lang",
        replaceQueryString(window.location.href + "?", "lang", locale)
      );
      // window.location.href = searchParams.toString();
    }
  };

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
                {this.props.store.locale == "ru" && "Фестиваль"}
                {this.props.store.locale == "en" && "Festival"}
              </Nav.Link>

              {this.props.store.locale == "ru" && (
                <Nav.Link href="#regions" className="">
                  Регионы
                </Nav.Link>
              )}

              {this.props.store.locale == "en" && (
                <Nav.Link href="#regions" className="d-none"></Nav.Link>
              )}

              {this.props.store.locale == "ru" && (
                <Nav.Link href="#coaches" className="">
                  Тренеры
                </Nav.Link>
              )}
              {this.props.store.locale == "en" && (
                <Nav.Link href="#coaches" className="d-none"></Nav.Link>
              )}
              {this.props.store.locale == "ru" && (
                <Nav.Link href="#partners" className="">
                  Партнёры
                </Nav.Link>
              )}
              {this.props.store.locale == "en" && (
                <Nav.Link href="#partners" className="">
                  Partners
                </Nav.Link>
              )}
              {this.state.fio === 0 && (
                <Nav.Link
                  onClick={() => {
                    window.open("https://rucode.net/lk");
                  }}
                  href={
                    this.props.store.locale == "ru"
                      ? "https://rucode.net/lk"
                      : "https://rucode.net/lk?lang=en"
                  }
                  className="text-white"
                >
                  {this.props.store.locale == "ru" && "Регистрация / Вход"}
                  {this.props.store.locale == "en" && "Registration / Entrance"}
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
              <Nav.Item>
                {this.props.store.locale == "en" && (
                  <button
                    onClick={e => this.setLocale("ru")}
                    type="button"
                    className="btn btn-success"
                  >
                    RU
                  </button>
                )}
                {this.props.store.locale == "ru" && (
                  <button
                    onClick={e => this.setLocale("en")}
                    type="button"
                    className="btn btn-success"
                  >
                    EN
                  </button>
                )}
              </Nav.Item>
            </Nav>
          </ScrollspyNav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
// export default connect(mapStateToProps)(NavigationBar);
export default connect(mapStateToProps, { localeAction })(NavigationBar);
