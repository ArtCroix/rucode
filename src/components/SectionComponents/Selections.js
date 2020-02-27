import React from "react";
import BlueButton from "./BlueButton";
class Selections extends React.Component {
  render() {
    return (
      <section id="selections" className="main section">
        <div className=" row no-gutters justify-content-center">
          <img
            className="section__number-image col-1"
            src={process.env.PUBLIC_URL + "/images/icons/sec_2.svg"}
            alt=""
          />
        </div>
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
              Готов погружаться в спортивное программирование дальше? Хочешь
              попробовать свои силы на треке искусственного интеллекта? Пройди
              отборы и прими участие в бесплатных очных интенсивах!
            </p>
          </div>
          <div className="section__body-block">
            <p className="section__body-block-text text-center super-dark-blue">
              Отборочное тестирование будет проводиться онлайн. Регистрация
              будет открыта всем желающим.
            </p>
          </div>
          <div className="section__body-block">
            <div className="section__body-block-schedule row mx-auto align-items-center justify-content-center no-gutters">
              <div className="col-sm-3">
                <div className="row align-items-center no-gutters">
                  <img
                    className="col-sm-2 col-4"
                    src={process.env.PUBLIC_URL + "/images/icons/calendar.svg"}
                    alt=""
                  />

                  <div className="section__body-block-schedule-discribe col-sm-6 col-4 text-center">
                    <span className="">&nbsp;4-5&nbsp;апреля</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="row align-items-center no-gutters justify-content-center">
                  <img
                    className="col-sm-2 col-4"
                    src={process.env.PUBLIC_URL + "/images/icons/watch.svg"}
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
                    src={process.env.PUBLIC_URL + "/images/icons/screen.svg"}
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
            <BlueButton
              link="https://stepik.org/invitation/d1f1c2a5acae47cf783467d49503afc27c08c113/"
              title="участие в отборах"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Selections;
