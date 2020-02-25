import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";

import Footer from "./Footer";
import { connect } from "react-redux";
import { simpleAction } from "../actions/simpleAction";
// import { simpleAction } from "../actions/simpleAction";
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});
class App extends Component {
  componentDidMount() {
    axios
      .get(`https://it-edu.com/rucode/ajax.php`)
      .then(res => {})
      .catch(res => {
        console.log(res);
      });
  }
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return (
      <>
        <Header></Header>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
