import React from "react";
import NavBar from "./NavBar";
import BlueButton from "./SectionComponents/BlueButton";
class Header extends React.Component {
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
                  Всероссийский фестиваль по искусственному интеллекту и
                  спортивному программированию
                </h3>
                <p className="header__info-container-item-date my-4 text-left">
                  22—26 апреля 2020
                </p>
                <BlueButton
                  link="https://stepik.org/invitation/d1f1c2a5acae47cf783467d49503afc27c08c113/"
                  title="поступить на онлайн-курс"
                />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
