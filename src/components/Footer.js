import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer container-fluid mx-0">
        <div className="footer__container row no-gutters align-items-center my-2 mx-auto">
          <div className="col-sm-4 col-12 mr-auto mr-auto mr-sm-auto ml-sm-0 text-white">
            <p className="footer__text m-0">+7 (495) 260-10-79</p>
            <p className="footer__text m-0">order@pulsarproduction.ru</p>
            <p className="footer__text m-0">
              Москва, Долгопрудненское шоссе, д.3
            </p>
          </div>
          <div className="col-sm-1 text-center text-sm-right ml-auto"></div>
          <div className="row align-items-center justify-content-between justify-content-sm-start no-gutter">
            <div className="col-sm-6 col-3 text-center">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/images/logos/fpgbg.png"}
                alt=""
              />
            </div>
            <div className="col-sm-6 col-3 text-center">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/images/logos/lited.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
