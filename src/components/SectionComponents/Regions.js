import React from "react";

class Regions extends React.Component {
  render() {
    return (
      <section id="regions" className="main section section_transparent">
        <div className="section__header">
          <h3>
            <b>
              РЕГИОНЫ ПРОВЕДЕНИЯ ФЕСТИВАЛЯ
              <span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block row">
            <img className="col-10 col-sm-12 mx-auto" src=" /images/map.png" />
          </div>
        </div>
      </section>
    );
  }
}

export default Regions;
