import React from "react";
// import Timeline from "./Timeline";
import localeAction from "../../actions/LocaleAction";
import { connect } from "react-redux";

const mapStateToProps = (store, ownProps) => {
  return { store };
};
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: props.store.locale
    };
  }

  componentDidMount() {
    this.setState({ locale: this.props.store.locale });
  }

  render() {
    return (
      <section id="about" className="main section section_transparent">
        <div className="section__header">
          <h3>
            {this.props.store.locale == "ru" && (
              <b>
                О программе<span className="section__header-dash">_</span>
              </b>
            )}
            {this.props.store.locale == "en" && (
              <b>
                About<span className="section__header-dash">_</span>
              </b>
            )}
          </h3>
        </div>

        {this.props.store.locale == "ru" && (
          <div className="section__body">
            <div className="section__body-block">
              <p className="section__body-block-text section__body-block-text_bold super-dark-blue">
                Всероссийский онлайн фестиваль по искусственному интеллекту и
                спортивному программированию RuCode Festival - это программа
                интенсивной подготовки для молодых программистов, желающих
                повысить уровень знаний и получить опыт участия в соревнованиях.
              </p>
            </div>
            <div className="section__body-block">
              <span className="super-dark-blue">Этапы программы:</span>
              <ul className="section__body-block-text super-dark-blue">
                <li>
                  Бесплатный онлайн-курс “Быстрый старт в спортивное
                  программирование”
                </li>
                <li>
                  Отборочное тестирование для желающих принять участие в
                  интерактивных интенсивах
                </li>
                <li>
                  Интерактивные интенсивы по искусственному интеллекту и
                  спортивному программированию
                </li>
                <li>
                  Чемпионаты по искусственному интеллекту и спортивному
                  программированию
                </li>
              </ul>
            </div>
            <div className="section__body-block">
              <p className="section__body-block-text section__body-block-text super-dark-blue">
                Также для вас мы подготовили{" "}
                <a
                  href="/metod_recommend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  методические рекомендации по самостоятельной подготовке
                  студенческих команд к соревнованиям по спортивному
                  программированию
                </a>
                .
              </p>
              <p className="section__body-block-text section__body-block-text super-dark-blue">
                Программа RuCode Festival научит решать алгоритмические задачи
                быстро и эффективно, даст возможность поработать с датасетами
                ведущих IT-компаний на треке, посвященном искусственному
                интеллекту, поможет заявить о себе на соревнованиях. Доступ
                бесплатный и открыт всем желающим!
              </p>
              <p className="section__body-block-text section__body-block-text super-dark-blue">
                Для успешного прохождения программы необходимо хорошо владеть
                основами одного из следующих языков программирования: С/С++,
                Java, Pascal/Delphi, Python.
              </p>
            </div>
            <div className="section__body-block row">
              <img
                className="col-10 col-sm-12 mx-auto"
                src={process.env.PUBLIC_URL + "/images/timeline.svg"}
              />
            </div>
          </div>
        )}

        {this.props.store.locale == "en" && (
          <div className="section__body">
            <div className="section__body-block">
              <p className="section__body-block-text section__body-block-text_bold super-dark-blue">
                The all-Russian festival of Artificial intelligence and
                Competitive programming RuCode Festival is an intensive training
                program for young programmers who want to improve their
                knowledge and gain experience in competitions.
              </p>
            </div>
            <div className="section__body-block">
              <span className="super-dark-blue">
                The stages of the program:
              </span>
              <ul className="section__body-block-text super-dark-blue">
                <li>
                  The free online course “Quick start in Competitive
                  programming”
                </li>
                <li>
                  Qualifying round for those who want to take part in
                  interactive intensive courses
                </li>
                <li>
                  Interactive intensive courses in Artificial intelligence and
                  Competitive programming
                </li>
                <li>
                  Artificial intelligence and Competitive programming
                  Championships
                </li>
              </ul>
            </div>
            <div className="section__body-block">
              <p className="section__body-block-text section__body-block-text super-dark-blue">
                RuCode Festival program will teach you how to solve algorithmic
                tasks quickly and efficiently, will give you the opportunity to
                work with the datasets of leading IT companies on the track
                dedicated to artificial intelligence, and will help you make
                your mark at competitions. Registration is free and open to
                everyone!
              </p>
              <p className="section__body-block-text section__body-block-text super-dark-blue">
                To complete the program successfully, you must have a good
                command of the basics of one of the following programming
                languages: C/C++, Java, Pascal/Delphi, Python.
              </p>
            </div>
            <div className="section__body-block row">
              <img
                className="col-10 col-sm-12 mx-auto"
                src={process.env.PUBLIC_URL + "/images/timeline.svg"}
              />
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default connect(mapStateToProps, { localeAction })(About);
