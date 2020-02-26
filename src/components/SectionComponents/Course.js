import React from "react";
import AccordionTemplates from "./AccordionTemplate";

class Course extends React.Component {
  state = {
    accordionData: [
      {
        sub_header: "Базовые алгоритмы",
        body: `Асимптотика <br>
                Линейные алгоритмы<br>
                Бинарный поиск.Часть 1<br>
                Бинарный поиск.Часть 2
                `
      },
      {
        sub_header: "Теория чисел",
        body: `
        Числа Фибоначчи
Алгоритм Евклида<br>
Решето Эратосфена<br>
Операции по модулю<br>
Теорема Эйлера<br>
Бинарное возведение в степень и деление по модулю`
      },
      {
        sub_header: "Динамическое программирование",
        body: `Определения<br>
Линейное динамическое программирование<br>
Квадратное динамическое программирование<br>
Восстановление ответа<br>
Задача о рюкзаке
`
      },
      {
        sub_header: "Теория графов",
        body: `Базовые определения теории графов<br>
Обход в глубину<br>
Обход в ширину`
      }
    ]
  };
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return (
      <section id="course" className="main section">
        <div className=" row no-gutters justify-content-center">
          <img
            className="section__number-image col-2"
            src={process.env.PUBLIC_URL + "/images/icons/sec_1.svg"}
            alt=""
          />
        </div>

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
              Прокачай свои знания с ведущими тренерами международного
              образовательного проекта Moscow Workshops!
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
                    <span className="">2 марта</span>
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
                    <span className="">1 месяц</span>
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
          <div className="section__body-block mt-5">
            <p className="section__body-block-text section__body-block-text text-center super-dark-blue">
              Онлайн-курс “Быстрый старт в спортивное программирование”
              подготовлен ведущими тренерами Moscow Workshops. Курс поможет
              войти в мир спортивного программирования. Рассматриваются базовые
              теоретические и практические аспекты, необходимые для успешного
              участия в состязании по спортивному программированию любого
              уровня: от базовых линейных алгоритмов до основ теории графов и их
              обходов. Также рассматриваются вопросы асимптотического анализа и
              оценки эффективности программы.
            </p>
          </div>
          {/*           <div className="section__body-block mt-5 text-center mx-auto">
            <iframe
              src="https://drive.google.com/file/d/1G0_MTvF9PBPtSrVVd_8fOs5lhzsMl0oG/preview"
              width="640"
              height="480"
            ></iframe>
          </div> */}
          <AccordionTemplates
            header={"Программа курса"}
            title={"course"}
            accordionData={this.state.accordionData}
          ></AccordionTemplates>

          <div className="section__body-block mt-5 text-center mx-auto">
            <a
              target="_blank"
              href="https://stepik.org/invitation/d1f1c2a5acae47cf783467d49503afc27c08c113/"
            >
              <button className="dark-blue-button">
                <span className="dark-blue-button__text">
                  ПОСТУПИТЬ НА ОНЛАЙН-КУРС
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Course;
