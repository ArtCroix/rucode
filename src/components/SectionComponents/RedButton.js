import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.link = props.link;
  }
  render() {
    return (
      <a target="_blank" href={this.link}>
        <button className="reg-button reg-button_red">
          <span className="reg-button__text">{this.title}</span>
        </button>
      </a>
    );
  }
}

export default Button;
