import React from "react";
import AccordionTemplates from "./AccordionTemplate";
import BlueButton from "./BlueButton";
import Schedule from "./Schedule";

class Course extends React.Component {
  state = {
    accordionData: [
      {
        sub_header: "Базовые алгоритмы",
        body: `<span>Асимптотика <br>
                Линейные алгоритмы<br>
                Бинарный поиск. Часть 1<br>
                Бинарный поиск. Часть 2</span>
                `
      },
      {
        sub_header: "Теория чисел",
        body: `<span>
        Целые типы данных, решето Эратосфена<br>
        Операции по модулю<br>
Алгоритм Евклида<br>
Бинарное возведение в степень и деление по модулю</span>`
      },
      {
        sub_header: "Динамическое программирование",
        body: `<span>Определения<br>
Линейное динамическое программирование<br>
Квадратное динамическое программирование<br>
Восстановление ответа<br>
Задача о рюкзаке</span>
`
      },
      {
        sub_header: "Теория графов",
        body: `<span>Базовые определения теории графов<br>
Обход в глубину<br>
Обход в ширину</span>`
      }
    ]
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
          <Schedule
            schedule_data={{
              p_1: "2 марта",
              p_2: "1 месяц",
              p_3: "онлайн",
              img_1: "calendar.svg",
              img_2: "watch.svg",
              img_3: "screen.svg"
            }}
          />
          <div className="section__body-block mt-5">
            <p className="section__body-block-text section__body-block-text text-center super-dark-blue">
              Онлайн-курс “Быстрый старт в спортивное программирование”
              подготовлен ведущими тренерами Moscow Workshops. Курс поможет
              войти в мир спортивного программирования. Рассматриваются базовые
              теоретические и практические аспекты, необходимые для успешного
              участия в состязаниях по спортивному программированию любого
              уровня: от базовых линейных алгоритмов до основ теории графов и их
              обходов. Также рассматриваются вопросы асимптотического анализа и
              оценки эффективности программы.
            </p>
          </div>
          <div className="section__body-block mt-5 text-center mx-auto embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EzFcg1lfre0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="section__body-block mt-3">
            <AccordionTemplates
              header={"Программа курса"}
              title={"course"}
              accordionData={this.state.accordionData}
            ></AccordionTemplates>
          </div>
          <div className="section__body-block mt-5 text-center mx-auto">
            <BlueButton
              link="https://stepik.org/invitation/d1f1c2a5acae47cf783467d49503afc27c08c113/"
              title="поступить на онлайн-курс"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Course;
