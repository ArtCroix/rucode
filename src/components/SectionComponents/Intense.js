import React from "react";
import VenuesList from "./VenuesList";
import Schedule from "./Schedule";

class Intense extends React.Component {
  render() {
    return (
      <section id="intense" className="main section">
        <div className=" row no-gutters justify-content-center">
          <img
            className="section__number-image col-1"
            src={process.env.PUBLIC_URL + "/images/icons/sec_3.svg"}
            alt=""
          />
        </div>
        <div className="section__header">
          <h3>
            <b>
              Интенсивы<span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            <p className="section__body-block-text section__body-block-text_bold text-center  super-dark-blue">
              Очные занятия с ведущими тренерами по искусственному интеллекту и
              спортивному программированию в 10 городах России
            </p>
          </div>
          <Schedule
            schedule_data={{
              p_1: "22-24 апреля",
              p_2: "3 дня",
              p_3: "очный",
              img_1: "calendar.svg",
              img_2: "watch.svg",
              img_3: "people.svg"
            }}
          />
          <div className="section__body-block mt-4">
            <p className="section__body-block-text text-center super-dark-blue">
              На интенсивы можно попасть только по результатам отборов.
            </p>
          </div>
          <VenuesList title="intense_venue_list" />
        </div>
      </section>
    );
  }
}

export default Intense;
