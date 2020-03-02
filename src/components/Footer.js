import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer container-fluid mx-0">
        <div className="footer__container row no-gutters align-items-center my-2 mx-auto">
          <div className="col-sm-4 col-12 mr-auto mr-auto mr-sm-auto ml-sm-0 text-white">
            <p className="footer__text m-0">
              <a className="text-white" href="tel:+7(498)713-91-89">
                <u>+7 (498) 713-91-89</u>
              </a>
            </p>
            <p className="footer__text m-0">
              <a className="text-white" href="mailto:info@rucode.net">
                <u>info@rucode.net</u>
              </a>
            </p>
            <p className="footer__text m-0">
              Адрес: Московская область, г. Долгопрудный, Институтский переулок
              д.9
            </p>
          </div>
          <div className="col-sm-1 text-center text-sm-right ml-auto"></div>
          <div className="row align-items-center justify-content-between justify-content-sm-start no-gutter">
            <div className="col-sm-6 col-3 text-center">
              <a
                href="https://оценка.гранты.рф/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/images/logos/fpgbg.png"}
                  alt=""
                />
              </a>
            </div>

            <div className="col-sm-6 col-3 text-center">
              <a
                href="https://it-edu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/images/logos/lited.png"}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
