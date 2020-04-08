import React from "react";
import NavBar from "./NavBar";
import BlueButton from "./SectionComponents/BlueButton";
import localeAction from "../actions/LocaleAction";
import { connect } from "react-redux";
const mapStateToProps = (store, ownProps) => {
  return { store };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({ locale: this.props.store.locale });
  }
  render() {
    return (
      <>
        <NavBar></NavBar>
        <header id="header" className="header row no-gutters">
          <div className="header__info header__info_wrapper col-12 align-self-center py-5 mx-auto text-center ">
            <div className="header__info-container row align-items-center justify-content-center no-gutters mx-auto">
              <div className="header__info-container-item col-5 mr-1 text-right">
                <img
                  className="img-fluid"
                  src={
                    process.env.PUBLIC_URL + "/images/logos/rucode_header.png"
                  }
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="header__info-container-item ml-1 col-6">
                <h3 className="header__info-container-item-text text-white">
                  {this.props.store.locale == "ru" &&
                    "Всероссийский онлайн фестиваль по искусственному интеллекту и спортивному программированию"}
                </h3>
                <h3 className="header__info-container-item-text text-white">
                  {this.props.store.locale == "en" &&
                    "All-Russian festival on Artificial intelligence and Competitive programming"}
                </h3>
                {this.props.store.locale == "ru" && (
                  <p className="header__info-container-item-date my-4 text-left">
                    22—26 апреля 2020
                  </p>
                )}
                {this.props.store.locale == "en" && (
                  <p className="header__info-container-item-date my-4 text-left">
                    APRIL 22-26, 2020
                  </p>
                )}
                <BlueButton
                  link="https://rucode.net/lk"
                  title="зарегистрироваться на отборы"
                />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default connect(mapStateToProps, { localeAction })(Header);
