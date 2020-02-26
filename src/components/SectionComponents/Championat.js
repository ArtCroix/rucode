import React from "react";
import VenuesList from "./VenuesList";
import Slider from "react-slick";

class Championat extends React.Component {
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
      slidesToShow: 1,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      variableWidth: true,
      className: "mt-5 mx-auto w-100 slider variable-width",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section id="championat" className="main section">
        <div className=" row no-gutters justify-content-center">
          <img
            className="section__number-image col-1"
            src={process.env.PUBLIC_URL + "/images/icons/sec_4.svg"}
            alt=""
          />
        </div>
        <div className="section__header">
          <h3>
            <b>
              Чемпионат<span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <div className="section__body-block">
            <p className="section__body-block-text section__body-block-text_bold text-center  super-dark-blue">
              Всероссийские соревнования по искусственному интеллекту и
              спортивному программированию
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
                    <span className="">&nbsp;25&nbsp;апреля</span>
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
                    <span className="">2 дня</span>
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
                    <span className="">очный</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section__body-block mt-4">
            <p className="section__body-block-text text-center super-dark-blue">
              Соревнования - это отличная возможность заявить о себе,
              попробовать себя в командной работе, порешать задачи на реальных
              датасетах ведущих IT-компаний.
            </p>
          </div>
          <VenuesList title="champ_venue_list" />
          <div className="section__body-block mt-4">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <h3 className="section__body-block-text_bold text-center dark-blue">
                ЗАРЕГИСТРИРОВАТЬСЯ
              </h3>
            </a>
          </div>
          <div className="section__body-block row mt-3 mx-auto justify-content-between">
            <button className="dark-blue-button col-sm-5 text-center">
              <span className="dark-blue-button__text">
                ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ
              </span>
            </button>
            <button className="rose-button col-sm-5 text-center">
              <span className="dark-blue-button__text">
                СПОРТИВНОЕ ПРОГРАММИРОВАНИЕ
              </span>
            </button>
          </div>
          <div className="section__body-block mx-auto text-center mt-3">
            <a href="">
              <small id="emailHelp" class="form-text text-muted">
                <u>Положение чемпионата</u>
              </small>
            </a>
          </div>

          <div className="section__body-block">
            <Slider {...settings}>
              <div className="carousel-element mx-2">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws1.jpg"}
                  alt=""
                />
              </div>
              <div className="carousel-element mx-2">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws2.jpg"}
                  alt=""
                />
              </div>
              <div className="carousel-element mx-2">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws3.jpg"}
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Championat;
