import React from "react";

class Selections extends React.Component {
  render() {
    return (
      <section id="selections" className="main section">
        <div className="section__header">
          <h3>
            <b>
              Отборы<span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            <p className="section__body-block-text section__body-block-text_bold text-center super-dark-blue">
              Готов погружаться в спортивное программирование дальше? Пройди
              отборы и прими участие в бесплатных очных интенсивах!
            </p>
          </div>
          <div className="section__body-block">
            <p className="section__body-block-text text-center super-dark-blue">
              Программа ориентирована на учащихся старших классов школы, а также
              студентов средних специальных и высших учебных заведений, желающих
              углубить свои знания.
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
                    <span className="">&nbsp;4&nbsp;апреля</span>
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
                    <span className="">2 дня</span>
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
                    <span className="">онлайн</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section__body-block mt-5 text-center mx-auto">
            <button className="dark-blue-button">
              <span className="dark-blue-button__text">
                ПОСТУПИТЬ НА ОНЛАЙН-КУРС
              </span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Selections;
