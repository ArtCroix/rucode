import React from "react";
import About from "./SectionComponents/About";
import Course from "./SectionComponents/Course";
import Selections from "./SectionComponents/Selections";
import Intense from "./SectionComponents/Intense";
import Championat from "./SectionComponents/Championat";
import Regions from "./SectionComponents/Regions";
import Coaches from "./SectionComponents/Coaches";
import Reviews from "./SectionComponents/Reviews";
import Partners from "./SectionComponents/Partners";
import InfoPartners from "./SectionComponents/InfoPartners";
import FAQ from "./SectionComponents/FAQ";

class Main extends React.Component {
  render() {
    return (
      <main className="main container-fluid">
        <div className="main__content mx-auto">
          <About />
          <Course />
          <Selections />
          <Intense />
          <Championat />
          <Regions />
          <Coaches />
          <Reviews />
          <Partners />
          {/* <InfoPartners /> */}
          <FAQ />
        </div>
      </main>
    );
  }
}

export default Main;
