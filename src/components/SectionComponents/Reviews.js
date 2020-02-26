import React from "react";
import Slider from "react-slick";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          src={process.env.PUBLIC_URL + "/images/icons/arrow_right.svg"}
          className={className}
          style={{ ...style, display: "block" }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          src={process.env.PUBLIC_URL + " /images/icons/arrow_left.svg"}
          className={className}
          style={{ ...style, display: "block" }}
          onClick={onClick}
        />
      );
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "mt-4",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section id="reviews" className="main section">
        <div className="section__header">
          <h3>
            <b>
              Отзывы<span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            <Slider {...settings}>
              <div className="carousel-element">
                <div className="row no-gutters justify-content-between">
                  <div className="col-sm-2">
                    <img
                      className="img-fluid w-75"
                      src={process.env.PUBLIC_URL + "/images/stepanov.png"}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-10 carousel-element__text-content">
                    <p className="carousel-element__text-content_header dark-blue mb-1">
                      Илья Степанов
                    </p>
                    <span className="carousel-element__text-content_body super-dark-blue">
                      Изучение Python в Нетологии - это хорошее начало в
                      освоении этого замечательного языка программирования.
                      Сегодня его стоит знать всем, кто так или иначе связан с
                      IT-сферой, ведь Python предоставляет замечательные
                      инструменты для работы с данными и автоматизации рутинных
                      операций. Курс в Нетологии - это пошаговое освоение от
                      простого к сложному, для того чтобы начать создавать свои
                      первые полноценные программы. Обучение проходит в удобном
                      формате - вечерние вебинары от ведущих экспертов, домашние
                      работы под контролем преподавателей, общение с ними и
                      сокурсниками. В итоге дипломная работа, которая позволит
                      применить все полученные знания и пополнит ваше портфолио.
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
