import React from "react";

class Intense extends React.Component {
  render() {
    return (
      <section id="intense" className="main section">
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
              Очные занятия с ведущими тренерами по спортивному программированию
              и искусственному интеллекту в 10 городах России
            </p>
          </div>
          <div className="section__body-block">
            <div className="section__body-block-schedule row mx-auto align-items-center justify-content-center no-gutters">
              <div className="col-sm-3">
                <div className="row align-items-center no-gutters">
                  <img
                    className="col-sm-2 col-4"
                    src={process.env.PUBLIC_URL + " /images/icons/calendar.svg"}
                    alt=""
                  />

                  <div className="section__body-block-schedule-discribe col-sm-6 col-4 text-center">
                    <span className="">&nbsp;22&nbsp;апреля</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="row align-items-center no-gutters justify-content-center">
                  <img
                    className="col-sm-2 col-4"
                    src={process.env.PUBLIC_URL + " /images/icons/watch.svg"}
                    alt=""
                  />
                  <div className="section__body-block-schedule-discribe col-sm-6 col-4  text-center">
                    <span className="">3 дня</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="row align-items-center no-gutters justify-content-end">
                  <img
                    className="col-sm-2 col-4"
                    src={process.env.PUBLIC_URL + " /images/icons/screen.svg"}
                    alt=""
                  />
                  <div className="section__body-block-schedule-discribe col-sm-6 col-4  text-center">
                    <span className="">очный</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section__body-block mt-4">
            <p className="section__body-block-text text-center super-dark-blue">
              Разберете вот такие алгоритмы и отработаете вот такие навыки
            </p>
          </div>

          <div className="section__body-block mt-4 text-center">
            <a
              href=""
              className="section__body-block-text section__body-block-text_bold dark-blue"
            >
              СПИСОК ПЛОЩАДОК-УЧАСТНИКОВ
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Intense;
