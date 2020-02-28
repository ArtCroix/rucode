import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

class ScrollTop extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", function() {
      const el = document.getElementById("back-top");
      if (window.scrollY > 1600) {
        el.style.opacity = 1;
      } else {
        el.style.opacity = 0;
      }
    });
  }
  render() {
    return (
      <Link to="about" id="back-top" smooth={true} offset={-70} duration={500}>
        <FontAwesomeIcon style={{ fontSize: "2em" }} icon={faAngleUp} />
      </Link>
    );
  }
}

export default ScrollTop;
