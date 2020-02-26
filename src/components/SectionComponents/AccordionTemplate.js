import React from "react";
import { Accordion, useAccordionToggle } from "react-bootstrap";
import ReactHtml from "raw-html-react";

class AccordionTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.accordionData = props.accordionData;
    this.header = props.header;
    this.title = props.title;
  }

  plus() {
    return (
      <img
        className="img-fluid"
        src={process.env.PUBLIC_URL + " /images/icons/plus.svg"}
        alt=""
      />
    );
  }

  minus() {
    return (
      <img
        className="img-fluid"
        src={process.env.PUBLIC_URL + " /images/icons/minus.svg"}
        alt=""
      />
    );
  }

  renderAccordionData({ sub_header, body }, key) {
    const CustomToggle = ({ children, eventKey }) => {
      const decoratedOnClick = useAccordionToggle(eventKey, () => {
        let plus = document.getElementById("plus" + eventKey + this.title);
        let minus = document.getElementById("minus" + eventKey + this.title);
        let sub_header = document.getElementById(
          "sub-header" + eventKey + this.title
        );
        plus.classList.toggle("d-none");
        minus.classList.toggle("d-none");
        sub_header.classList.toggle("font-weight-bold");
      });

      return (
        <div style={{ cursor: "pointer" }} onClick={decoratedOnClick}>
          {children}
        </div>
      );
    };
    // const changeTooglerIcon = this.changeTooglerIcon.bind(CustomToggle);

    return (
      <Accordion className="mt-2" key={key}>
        <CustomToggle variant="link" eventKey={key}>
          <div className="row mb-2 align-items-center mx-auto no-gutters justify-content-between">
            <div className="col-sm-6 col-4  text-left">
              <span
                id={"sub-header" + key + this.title}
                className="accordion__sub-header"
              >
                {sub_header}
              </span>
            </div>
            <div className="togglerIcon col-sm-4 col-4 text-right">
              <img
                id={"plus" + key + this.title}
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/images/icons/plus.svg"}
                alt=""
              />
              <img
                id={"minus" + key + this.title}
                className="img-fluid d-none"
                src={process.env.PUBLIC_URL + "/images/icons/minus.svg"}
                alt=""
              />
            </div>
          </div>
        </CustomToggle>

        <Accordion.Collapse eventKey={key}>
          <div className="accordion__body">
            <div className="accordion__body-text">
              <ReactHtml html={body} />
            </div>
          </div>
        </Accordion.Collapse>
        <hr className="m-0 p-0" />
      </Accordion>
    );
  }

  render() {
    return (
      <div className="accordion accordion_wrapper">
        {this.header !== "" && (
          <div className="row align-items-center mx-auto no-gutters justify-content-between">
            <div className="col-sm-6 col-4 text-left">
              <p className="accordion__header mb-2">{this.header}</p>
            </div>
          </div>
        )}
        {this.accordionData.map((val, key) =>
          this.renderAccordionData(val, key)
        )}
      </div>
    );
  }
}

export default AccordionTemplate;
