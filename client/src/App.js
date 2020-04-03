import React from "react";
import { Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
import HomePage from "../src/pages/HomePage/Homepage";
import ResultsPage from "../src/pages/ResultsPage/ResultsPage";
import AdPostPage from "../src/pages/AdPostPage/AdPostPage";
import LoginSignUpPage from "../src/pages/LoginSignUpPage/LoginSignUpPage";
import UserProfilePage from "../src/pages/UserProfilePage/UserProfilePage"
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/adpost" component={AdPostPage} />
        <Route exact path="/loginsignup" component={LoginSignUpPage} />
        <Route exact path="/userprofile" component={UserProfilePage} />

      </Switch>
    );
  }
}
export default App;