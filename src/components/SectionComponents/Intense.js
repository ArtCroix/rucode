import React from "react";
import VenuesList from "./VenuesList";
import Schedule from "./Schedule";
import AccordionTemplates from "./AccordionTemplate";
import localeAction from "../../actions/LocaleAction";
import { connect } from "react-redux";
const mapStateToProps = (store, ownProps) => {
  return { store };
};
class Intense extends React.Component {
  state = {
    accordionData: [
      {
        sub_header: "Дивизион D",
        body: `<span>
        1) Рекурсивные переборы<br>
                2) Поиск кратчайших путей во взвешенном графе. Алгоритм Дейкстры;<br>
                3) Вычислительная геометрия: точки, прямые, отрезки, их взаимное расположение, поиск точек пересечения;<br>
                4) Динамическое программирование: поиск наибольшей возрастающей подпоследовательности, наибольшей общей подпоследовательности;<br>
                5) Деревья. Поиск диаметра, центра, центроида. Динамическое программирование на поддеревьях.
                </span>
                `
      },
      {
        sub_header: "Дивизион С",
        body: `<span>
        1) Остовные деревья. Алгоритмы Прима, Краскала;<br>
        2) Поиск кратчайших путей в граеф. Алгоритмы Флойда, Форда-Беллмана;<br>
3) Вычислительная геометрия. Многоугольники. Проверка того, лежит ли точка в многоугольнике (offline за O(n) и online в выпуклом за O(log n)). Площадь многоугольника: метод трапеций и метод треугольников. Площадь пересечения окружности и многоугольника;<br>
4) Динамическое программирование: поиска номера объекта (перестановки, сочетания, ПСП и т.п.), поиск объекта по номеру;<br>
5) Теория чисел: решение диофантовых уравнений, китайская теорема об остатках.
</span>`
      }
    ]
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({ locale: this.props.store.locale });
  }
  render() {
    return (
      <section id="intense" className="main section">
        <div className=" row no-gutters justify-content-center">
          <img
            className="section__number-image col-1"
            src={process.env.PUBLIC_URL + "/images/icons/sec_3.svg"}
            alt=""
          />
        </div>
        <div className="section__header">
          <h3>
            {this.props.store.locale == "ru" && (
              <b>
                Интенсивы<span className="section__header-dash">_</span>
              </b>
            )}
            {this.props.store.locale == "en" && (
              <b>
                INTENSIVE COURSE<span className="section__header-dash">_</span>
              </b>
            )}
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            {this.props.store.locale == "ru" && (
              <p className="section__body-block-text section__body-block-text_bold text-center  super-dark-blue">
                Интерактивные занятия с ведущими тренерами по искусственному
                интеллекту и спортивному программированию
              </p>
            )}
            {this.props.store.locale == "en" && (
              <p className="section__body-block-text section__body-block-text_bold text-center  super-dark-blue">
                Interactive sessions with leading trainers in Artificial
                intelligence and Competitive programming
              </p>
            )}
          </div>
          {this.props.store.locale == "ru" && (
            <div className="section__body-block mt-4">
              <p className="section__body-block-text text-left super-dark-blue">
                <strong>Трек по спортивному программированию</strong> - лучшие
                участники отбора будут поделены на дивизионы по уровню сложности
                - С и D. Интерактивные интенсивы пройдут с 22 по 24 апреля в
                формате онлайн-лекций, контестов и онлайн-разборов. За три дня
                предстоит осилить 10 часов лекционных занятий и 15 часов
                практических. Темы: вычислительная геометрия, динамическое
                программирование, теория чисел, особенности работы с алгоритмами
                и другие. Лекторы курса – преподаватели крупнейших вузов России
                (МФТИ, НГУ, ДФУ).
              </p>
              <p className="section__body-block-text text-left super-dark-blue">
                <strong>Трек по искусственному интеллекту</strong> - обучение
                пройдет в формате онлайн-лекций и работы над своим проектом. С
                10 по 21 апреля состоится 8 лекций. Лекторы курса –
                преподаватели МФТИ и эксперты крупных IT-компаний. По
                результатам интенсивов 25 лучших студентов будут представлять
                свои проекты. Трек и задачи разработаны МФТИ, Сбербанком и
                Аналитическим центром при Правительстве Российской Федерации.
              </p>
            </div>
          )}
          {this.props.store.locale == "ru" && (
            <Schedule
              schedule_data={{
                p_1: "22-24 апреля",
                p_2: "3 дня",
                p_3: "онлайн",
                img_1: "calendar.svg",
                img_2: "watch.svg",
                img_3: "people.svg"
              }}
            />
          )}
          {this.props.store.locale == "en" && (
            <Schedule
              schedule_data={{
                p_1: "APRIL, 22 - 24",
                p_2: "3 DAYS ",
                p_3: "ONLINE",
                img_1: "calendar.svg",
                img_2: "watch.svg",
                img_3: "people.svg"
              }}
            />
          )}
          {this.props.store.locale == "ru" && (
            <>
              <div className="section__body-block mt-4">
                <p className="section__body-block-text text-center super-dark-blue">
                  На интенсивы можно попасть только по результатам отборов.
                </p>
              </div>
              {/* <VenuesList title="intense_venue_list" /> */}
              <div className="section__body-block mt-5">
                <AccordionTemplates
                  header={"ПРОГРАММА ИНТЕНСИВОВ*"}
                  title={"intense"}
                  accordionData={this.state.accordionData}
                ></AccordionTemplates>
                <div className="section__body-block mx-auto text-center mt-3">
                  <small className="form-text text-muted">
                    *Программа может меняться по усмотрению организатора
                  </small>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, { localeAction })(Intense);
