import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
          <div className="section__body-block row">
            <Card className="card card_coach" style={{ width: "18rem" }}>
              <Card.Img
                className="mx-auto d-block w-50 mt-2"
                variant="top"
                src={process.env.PUBLIC_URL + " /images/rukhovich.png"}
              />
              <Card.Body>
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
          </div>
        </div>
      </section>
    );
  }
}

export default Coaches;
