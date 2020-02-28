import React from "react";
import VenuesList from "./VenuesList";
import Slider from "react-slick";
import BlueButton from "./BlueButton";
import RedButton from "./RedButton";
import Schedule from "./Schedule";
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
          src={process.env.PUBLIC_URL + "/images/icons/arrow_left.svg"}
          className={className}
          style={{ ...style, display: "block" }}
          onClick={onClick}
        />
      );
    }
    const settings = {
      dots: true,
      appendDots: dots => (
        <div className="mt-4">
          <small className="form-text text-muted">
            <u>Фотографии предыдущих мероприятий Moscow Workshops</u>
          </small>
          <ul>{dots}</ul>
        </div>
      ),
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      // variableWidth: true,
      className: "mt-5 mx-auto w-100 ",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
          <Schedule
            schedule_data={{
              p_1: "25-26 апреля",
              p_2: "2 дня",
              p_3: "очный",
              img_1: "calendar.svg",
              img_2: "watch.svg",
              img_3: "people.svg"
            }}
          />
          <div className="section__body-block mt-4">
            <p className="section__body-block-text text-center super-dark-blue">
              Соревнования - это отличная возможность заявить о себе,
              попробовать себя в командной работе, попробовать порешать задачи
              на реальных датасетах ведущих IT-компаний на трекере по
              искусственному интеллекту.
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
          <div className="section__body-block row mt-3 mx-auto justify-content-center">
            <div className="col-sm-5 text-center">
              <BlueButton
                link="https://stepik.org/invitation/d1f1c2a5acae47cf783467d49503afc27c08c113/"
                title="ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ"
              />
            </div>
            <div className="col-sm-5 text-center">
              <RedButton
                link="https://stepik.org/invitation/d1f1c2a5acae47cf783467d49503afc27c08c113/"
                title="СПОРТИВНОЕ ПРОГРАММИРОВАНИЕ"
              />
            </div>
          </div>
          <div className="section__body-block mx-auto text-center mt-3">
            <a href="">
              <small className="form-text text-muted">
                <u>Положение чемпионата</u>
              </small>
            </a>
          </div>

          <div className="section__body-block">
            <Slider {...settings}>
              <div className="carousel-element ">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws_photo/ws1.jpg"}
                  alt=""
                />
              </div>

              <div className="carousel-element ">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws_photo/ws2.jpg"}
                  alt=""
                />
              </div>

              <div className="carousel-element ">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws_photo/ws3.jpg"}
                  alt=""
                />
              </div>

              <div className="carousel-element ">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws_photo/ws4.jpg"}
                  alt=""
                />
              </div>

              <div className="carousel-element ">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws_photo/ws5.jpg"}
                  alt=""
                />
              </div>

              <div className="carousel-element ">
                <img
                  className="ws-image img-fluid mx-auto"
                  src={process.env.PUBLIC_URL + "/images/ws_photo/ws6.jpg"}
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
