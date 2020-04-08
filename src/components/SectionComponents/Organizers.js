import React from "react";

class Organizers extends React.Component {
  render() {
    return (
      <section id="organizers" className="main section section_transparent">
        <div className="section__header">
          <h3>
            <b>
              Организаторы
              <span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block row no-gutters justify-content-center align-items-center">
            <div className="col-sm-3 text-center">
              <a
                href="https://mipt.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/logos/mipt.jpg"}
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

export default Organizers;
