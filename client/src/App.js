import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import RequireAuth from "./protectedRoutes";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./Redux/auth/auth-actions";

import MainHeader from "./components/MainHeader/MainHeader.component";
import HomePage from "./pages/HomePage/Homepage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import PostAdPage from "./pages/PostAdPage/PostAdPage";
import SignUpPage from "./pages/LoginSignUpPage/SignUpPage";
import LoginPage from "./pages/LoginSignUpPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";

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
        <Route exact path="/postad" component={PostAdPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={RequireAuth(DashboardPage)} />
        <Route
          exact
          path="/editprofile"
          component={RequireAuth(EditProfilePage)}
        />
        <footer className="bg-dark text-white mt-5 p-4 text-center">
          Copyright &copy; 2020 Bazaar
        </footer>
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
