import React from "react";
import BlueButton from "./BlueButton";
import Schedule from "./Schedule";
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
              Готов погружаться в спортивное программирование еще глубже? Хочешь
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
          <Schedule
            schedule_data={{
              p_1: "4-5 апреля",
              p_2: "2 дня",
              p_3: "онлайн",
              img_1: "calendar.svg",
              img_2: "watch.svg",
              img_3: "screen.svg"
            }}
          />
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
