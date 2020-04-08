import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./Redux/auth/auth-actions";

import MainHeader from "./components/MainHeader/MainHeader.component";
import HomePage from "../src/pages/HomePage/Homepage";
import ResultsPage from "../src/pages/ResultsPage/ResultsPage";
import AdPostPage from "../src/pages/AdPostPage/AdPostPage";
import SignUpPage from "../src/pages/LoginSignUpPage/SignUpPage";
import LoginPage from "../src/pages/LoginSignUpPage/LoginPage";
import UserProfilePage from "../src/pages/UserProfilePage/UserProfilePage";

class App extends React.Component {
  componentDidMount() {
    // Check for token
    if (localStorage.jwtToken) {
      // Set token to Auth header
      setAuthToken(localStorage.jwtToken);
      // Decode jwt token
      const decode = jwt_decode(localStorage.jwtToken);
      // Set user and isAuthenticated
      this.props.setCurrentUser(decode);
    }
  }

  render() {
    return (
      <Router>
        <MainHeader />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/adpost" component={AdPostPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/userprofile" component={UserProfilePage} />
      </Router>
    );
  }
}

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(null, mapDispatchToProps)(App);
