import React from "react";
import VenuesList from "./VenuesList";
import Schedule from "./Schedule";
import AccordionTemplates from "./AccordionTemplate";
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
            <b>
              Интенсивы<span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            <p className="section__body-block-text section__body-block-text_bold text-center  super-dark-blue">
              Очные занятия с ведущими тренерами по искусственному интеллекту и
              спортивному программированию в 10 городах России
            </p>
          </div>
          <Schedule
            schedule_data={{
              p_1: "22-24 апреля",
              p_2: "3 дня",
              p_3: "очный",
              img_1: "calendar.svg",
              img_2: "watch.svg",
              img_3: "people.svg"
            }}
          />
          <div className="section__body-block mt-4">
            <p className="section__body-block-text text-center super-dark-blue">
              На интенсивы можно попасть только по результатам отборов.
            </p>
          </div>
          <VenuesList title="intense_venue_list" />
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
        </div>
      </section>
    );
  }
}

export default Intense;
