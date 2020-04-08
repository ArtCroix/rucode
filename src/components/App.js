import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";

import Footer from "./Footer";
import { connect } from "react-redux";
import localeAction from "../actions/LocaleAction";
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  localeAction: () => dispatch(localeAction("en"))
});
class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  loginAction = event => {
    this.props.loginAction();
  };

  render() {
    return (
      <>
        <Header></Header>
        {/*         <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props.loginReducer.fio)}</pre> */}
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
