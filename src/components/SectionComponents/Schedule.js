import React from "react";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.p_1 = props.schedule_data.p_1;
    this.p_2 = props.schedule_data.p_2;
    this.p_3 = props.schedule_data.p_3;
    this.img_1 = props.schedule_data.img_1;
    this.img_2 = props.schedule_data.img_2;
    this.img_3 = props.schedule_data.img_3;
  }

  render() {
    return (
      <div className="section__body-block">
        <div className="section__body-block-schedule row mx-auto align-items-center justify-content-center no-gutters">
          <div className="col-sm-3 col-7">
            <div className="row align-items-center justify-content-sm-start justify-content-center no-gutters">
              <img
                className="col-sm-2 col-4"
                src={process.env.PUBLIC_URL + `/images/icons/${this.img_1}`}
                alt=""
              />
              <div className="section__body-block-schedule-discribe col-sm-6 col-4 text-center">
                <p className="m-0">{this.p_1}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-7">
            <div className="row align-items-center no-gutters justify-content-center">
              <img
                className="col-sm-2 col-4"
                src={process.env.PUBLIC_URL + `/images/icons/${this.img_2}`}
                alt=""
              />
              <div className="section__body-block-schedule-discribe col-sm-6 col-4  text-center">
                <p className="m-0">{this.p_2}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-7">
            <div className="row align-items-center no-gutters justify-content-sm-end justify-content-center">
              <img
                className="col-sm-2 col-4"
                src={process.env.PUBLIC_URL + `/images/icons/${this.img_3}`}
                alt=""
              />

              <div className="section__body-block-schedule-discribe col-sm-6 col-4  text-center">
                <p className="m-0">{this.p_3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
