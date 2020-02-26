import React from "react";
import { Card } from "react-bootstrap";

class Coaches extends React.Component {
  render() {
    return (
      <section id="coaches" className="main section section_transparent">
        <div className="section__header">
          <h3>
            <b>
              ТРЕНЕРЫ И МЕТОДИСТЫ
              <span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block justify-content-around row">
            <Card className="card card_coach col-sm-3 px-0">
              <Card.Img
                className="card__coach-image mx-auto img-fluid  mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + "/images/rukhovich.png"}
              />
              <Card.Body className="m-0 px-2">
                <Card.Title className="card__coach-name text-white text-center">
                  Филипп Рухович
                </Card.Title>
                <Card.Text className="card__coach-info text-white text-center">
                  Закончил школу №57 г. Москвы в 2009 году; тогда же поступил в
                  Московский физико-технический институт, факультет ИВТ. По
                  окончании МФТИ в 2015 году поступил в аспирантуру (МФТИ, ФИВТ,
                  кафедра дискретной математики). В 2019 защитил кандидатскую
                  диссертацию по теме "Внешние биллиарды вне правильных
                  многоугольников: множества полной меры, апериодические точки и
                  множества периодов.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card card_coach col-sm-3 px-0">
              <Card.Img
                className="card__coach-image mx-auto img-fluid  mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + "/images/nevstruev.png"}
              />
              <Card.Body className="m-0 px-2">
                <Card.Title className="card__coach-name text-white text-center">
                  Владислав Невструев
                </Card.Title>
                <Card.Text className="card__coach-info text-white text-center">
                  Преподаватель различных олимпиадных школ: Летней олимпиадной
                  школы, Зимней олимпиадной школы, Летней компьютерной школы.
                  Преподаватель проекта Московских тренировок. Автор задач
                  различных олимпиад: Квалификационный этап Moscow Programming
                  Contest, Когнитивные технологии, Муниципальный этап
                  всероссийской олимпиады школьников.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card card_coach col-sm-3 px-0">
              <Card.Img
                className="card__coach-image mx-auto img-fluid  mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + "/images/khristenko.png"}
              />
              <Card.Body className="m-0 px-2">
                <Card.Title className="card__coach-name text-white text-center">
                  Олег Христенко
                </Card.Title>
                <Card.Text className="card__coach-info text-white text-center">
                  Chief Judge of Moscow Workshops; технический координатор
                  Олимпиадных школ, Зимней компьютерной школы и международных
                  сборов по программированию для подготовки к ICPC;
                  сопредседатель жюри Moscow Programming Contest; координатор
                  Открытого кубка имени Е.В. Панкратьева по программированию
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

export default Coaches;
