import React from "react";
import { Collapse } from "react-bootstrap";
import AccordionTemplates from "./AccordionTemplate";
class VenuesList extends React.Component {
  state = {
    open: false,
    accordionData: [
      {
        sub_header: "Владивосток",
        body: `
                `
      },
      {
        sub_header: "Екатеринбург",
        body: `
        `
      },
      {
        sub_header: "Ижевск",
        body: `
`
      },
      {
        sub_header: "Иннополис",
        body: `
`
      },
      {
        sub_header: "Иркутск",
        body: ``
      },
      {
        sub_header: "Красноярск",
        body: ``
      },
      {
        sub_header: "Новосибирск",
        body: ``
      },
      {
        sub_header: "Пермь",
        body: ``
      },
      {
        sub_header: "Саратов",
        body: ``
      },
      {
        sub_header: "Чита",
        body: ``
      }
    ]
  };
  constructor(props) {
    super(props);
    this.title = props.title;
  }
  render() {
    return (
      <div className="section__body-block mt-4 text-center">
        <div onClick={() => this.setState({ open: !this.state.open })}>
          <img
            className="img-fluid d-inline-block mr-1"
            style={{ maxWidth: "25px" }}
            src={process.env.PUBLIC_URL + "/images/icons/point.svg"}
            alt=""
          />
          <u
            className="dark-blue font-weight-bold "
            style={{ cursor: "pointer" }}
          >
            СПИСОК ПЛОЩАДОК-УЧАСТНИКОВ
          </u>
        </div>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            <AccordionTemplates
              header={""}
              title={this.title}
              accordionData={this.state.accordionData}
            ></AccordionTemplates>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default VenuesList;
