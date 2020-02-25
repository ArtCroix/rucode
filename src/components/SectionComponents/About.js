import React from "react";

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
              Центр развития ИТ-образования при МФТИ объявляет о старте
              всероссийской программы интенсивной подготовки по спортивному
              программированию и искусственному интеллекту «Фестиваль RuCode»,
              подготовленной при поддержке Фонда президентских грантов
            </p>
          </div>
          <div className="section__body-block">
            <p className="section__body-block-text super-dark-blue">
              В рамках программы все желающие смогут повысить свой уровень
              знаний олимпиадного программирования и искусственного интеллекта и
              принять участие в своих первых соревнованиях. Студенческие
              команды-победители регионального чемпионата RuCode будут
              приглашены за счет организаторов в Москву в качестве зрителей на
              финал студенческого чемпионата мира по программированию ICPC.
            </p>
          </div>
          <div className="section__body-block">
            <h4 className="section__body-block-sub-header">
              Прокачай навыки и прими участие в своих первых соревнованиях!
            </h4>
          </div>
          <div className="section__body-block">
            <h4 className="section__body-block-sub-header">Для кого</h4>
          </div>
          <div className="section__body-block row">
            <img
              className="col-10 col-sm-12 mx-auto"
              src={process.env.PUBLIC_URL + " /images/timeline.png"}
            />
          </div>
          <div className="section__body-block">
            <p className="section__body-block-text super-dark-blue">
              В рамках программы все желающие смогут повысить свой уровень
              знаний олимпиадного программирования и искусственного интеллекта и
              принять участие в своих первых соревнованиях. Студенческие
              команды-победители регионального чемпионата RuCode будут
              приглашены за счет организаторов в Москву в качестве зрителей на
              финал студенческого чемпионата мира по программированию ICPC.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
