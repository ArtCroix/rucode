import React from "react";
import AccordionTemplates from "./AccordionTemplate";

class FAQ extends React.Component {
  state = {
    accordionData: [
      {
        sub_header: "Как изменить пароль",
        body: ""
      },
      {
        sub_header: "Как добавить номер телефона?",
        body: ""
      },
      {
        sub_header: "Почему код восстановления пароля не подходит?",
        body: ""
      },
      {
        sub_header: "Почему мне предлагают отвязать номер от других аккаунтов?",
        body: ""
      },
      {
        sub_header: "Как добавить дополнительный электронный адрес?",
        body: ""
      }
    ]
  };

  render() {
    return (
      <section id="faq" className="main section section_grey">
        <div className="section__header">
          <h3>
            <b>
              FAQ<span className="section__header-dash">_</span>
            </b>
          </h3>
        </div>
        <div className="section__body">
          <AccordionTemplates
            header={""}
            title={"faq"}
            accordionData={this.state.accordionData}
          ></AccordionTemplates>
        </div>
      </section>
    );
  }
}

export default FAQ;
