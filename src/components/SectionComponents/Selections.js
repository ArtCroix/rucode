import React from "react";
import BlueButton from "./BlueButton";
import Schedule from "./Schedule";
import localeAction from "../../actions/LocaleAction";
import { connect } from "react-redux";
const mapStateToProps = (store, ownProps) => {
  return { store };
};
class Selections extends React.Component {
  componentDidMount() {
    this.setState({ locale: this.props.store.locale });
  }
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
            {this.props.store.locale == "ru" && (
              <b>
                Отборы<span className="section__header-dash">_</span>
              </b>
            )}
            {this.props.store.locale == "en" && (
              <b>
                QUALIFYING ROUND<span className="section__header-dash">_</span>
              </b>
            )}
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            {this.props.store.locale == "ru" && (
              <p className="section__body-block-text section__body-block-text_bold text-center super-dark-blue">
                Готов погружаться в спортивное программирование еще глубже?
                Хочешь попробовать свои силы на треке искусственного интеллекта?
                Пройди онлайн отборы и прими участие в бесплатных интерактивных
                интенсивах!
              </p>
            )}
            {this.props.store.locale == "en" && (
              <p className="section__body-block-text section__body-block-text_bold text-center super-dark-blue">
                Are you ready to dive even deeper into Competitive programming?
                Do you want to try your hand at the artificial intelligence
                track? Pass online Qualifying round and take part in free
                interactive intensives!
              </p>
            )}
          </div>
          {this.props.store.locale == "ru" && (
            <div className="section__body-block">
              <p className="text-center">Чтобы пройти отбор необходимо:</p>
              <div>
                <ul>
                  <li>
                    до 3 апреля (включительно) зарегистрироваться на сайте{" "}
                    <a
                      href="https://rucode.net/lk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      rucode.net
                    </a>
                    ;
                  </li>
                  <li>
                    до 4 апреля вы получите письмо на указанный при регистрации
                    адрес электронной почты с логином и паролем для входа на
                    тестирующую платформу и инструкцией по работе с ней;
                  </li>
                  <li>
                    4-5 апреля пройдёт отбор на трек по спортивному
                    программированию: нужно решить тур из 10 задач за 4 часа;
                  </li>
                  <li>
                    4-7 апреля пройдёт отбор на трек по искусственному
                    программированию: нужно решить тур из 10 задач по
                    математике, 3 задачи по программированию и 2 задачи по
                    машинному обучению;
                  </li>
                  <li>
                    Дождаться результата отбора (письмо мы вышлем на ваш адрес
                    электронной почты) и приступить к обучению на интерактивных
                    интенсивах!
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="section__body-block">
            {this.props.store.locale == "ru" && (
              <p className="section__body-block-text text-center super-dark-blue">
                Отборочное тестирование будет проводиться онлайн. Регистрация
                будет открыта всем желающим.
              </p>
            )}
            {this.props.store.locale == "en" && (
              <p className="section__body-block-text text-center super-dark-blue">
                The Qualifying round will be conducted online. Registration will
                be open to everyone.
              </p>
            )}
          </div>
          {this.props.store.locale == "ru" && (
            <Schedule
              schedule_data={{
                p_1: "4-7 апреля",
                p_2: "2 дня",
                p_3: "онлайн",
                img_1: "calendar.svg",
                img_2: "watch.svg",
                img_3: "screen.svg"
              }}
            />
          )}
          {this.props.store.locale == "en" && (
            <Schedule
              schedule_data={{
                p_1: "APRIL, 4-5",
                p_2: "2 DAYS",
                p_3: "ONLINE",
                img_1: "calendar.svg",
                img_2: "watch.svg",
                img_3: "screen.svg"
              }}
            />
          )}
          {this.props.store.locale == "ru" && (
            <div className="section__body-block mt-5 text-center mx-auto">
              <BlueButton
                link="https://rucode.net/lk"
                title="участие в отборах"
              />
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, { localeAction })(Selections);
