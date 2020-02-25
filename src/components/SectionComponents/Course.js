import React from "react";
import AccordionTemplates from "./AccordionTemplate";

class Course extends React.Component {
  state = {
    accordionData: [
      {
        sub_header: "Базовые алгоритмы",
        body: ""
      },
      {
        sub_header: "Теория чисел",
        body: ""
      },
      {
        sub_header: "Динамическое программирование",
        body: ""
      },
      {
        sub_header: "Теория графов",
        body: ""
      }
    ]
  };
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return (
      <section id="course" className="main section">
        <div className="section__header">
          <h3>
            <b>
              Онлайн-курс<span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            <p className="section__body-block-text section__body-block-text_bold text-center super-dark-blue">
              Подтяни свои знания с ведущими тренерами международного
              образовательного проекта Moscow Workshops!
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
                    <span className="">2 марта</span>
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
                    <span className="">1 месяц</span>
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
          <div className="section__body-block mt-5">
            <p className="section__body-block-text section__body-block-text text-center super-dark-blue">
              Поймете, какого типа задачи необходимо решать на соревнованиях,
              что такое эффективная программа, как оценивать эффективность
              алгоритма. Разберете базовые теоретические и практические аспекты:
              от базовых линейных алгоритмов до основ теории графов и их
              обходов. Также в курсе рассматриваются вопросы асимптотического
              анализа и оценки эффективности программы.
            </p>
          </div>
          <AccordionTemplates
            header={"Программа курса"}
            title={"course"}
            accordionData={this.state.accordionData}
          ></AccordionTemplates>
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

export default Course;
