import React from "react";
import localeAction from "../../actions/LocaleAction";
import { connect } from "react-redux";
const mapStateToProps = (store, ownProps) => {
  return { store };
};
class Partners extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({ locale: this.props.store.locale });
  }
  render() {
    return (
      <section id="partners" className="main section section_transparent">
        <div className="section__header">
          <h3>
            {this.props.store.locale == "ru" && (
              <b>
                Партнеры
                <span className="section__header-dash">_</span>
              </b>
            )}
            {this.props.store.locale == "en" && (
              <b>
                Partners
                <span className="section__header-dash">_</span>
              </b>
            )}
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block row no-gutters justify-content-center align-items-center">
            <div className="col-sm-3 text-center">
              <a
                href="https://go2phystech.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/logos/fond_r.png"}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-sm-3 text-center">
              <a
                href="https://оценка.гранты.рф"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/logos/fpg.png"}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-sm-3 text-center">
              <a
                href="https://yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/logos/yandex.jpg"}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-sm-3 text-center">
              <a
                href="https://ac.gov.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/logos/ac.jpg"}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, { localeAction })(Partners);
