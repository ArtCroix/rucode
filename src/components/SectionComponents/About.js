import React from "react";
import Timeline from "./Timeline";
class About extends React.Component {
  render() {
    return (
      <section id="about" className="main section section_transparent">
        <div className="section__header">
          <h3>
            <b>
              О программе<span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            <p className="section__body-block-text section__body-block-text_bold super-dark-blue">
              Всероссийский фестиваль по искусственному интеллекту и спортивному
              программированию RuCode Festival - это программа интенсивной
              подготовки для молодых программистов, желающих повысить уровень
              знаний и получить опыт участия в соревнованиях.
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
                Отборочное тестирование для желающих принять участие в очных
                интенсивах
              </li>
              <li>
                Очные интенсивы по искусственному интеллекту и спортивному
                программированию в 10 городах России
              </li>
              <li>
                Чемпионаты по искусственному интеллекту и спортивному
                программированию в 11 городах России
              </li>
            </ul>
          </div>
          <div className="section__body-block">
            <p className="section__body-block-text section__body-block-text super-dark-blue">
              Студенческие команды-победители региональных чемпионатов RuCode
              будут приглашены за счет организаторов в Москву в качестве
              зрителей на финал студенческого чемпионата мира по
              программированию ICPC (он пройдёт 20-26 июня 2020 года).
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
              основами одного из следующих языков программирования: С/С++, Java,
              Pascal/Delphi, Python.
            </p>
          </div>
          <div className="section__body-block row">
            <img
              className="col-10 col-sm-12 mx-auto"
              src={process.env.PUBLIC_URL + "/images/timeline.svg"}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
