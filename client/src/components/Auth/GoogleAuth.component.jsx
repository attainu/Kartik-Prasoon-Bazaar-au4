import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { googleLogin } from "../../Redux/auth/auth-actions";

class GoogleAuth extends Component {
  responseGoogle = (response) => {
    const data = {
      id: response.profileObj.googleId,
      name: response.profileObj.name,
      email: response.profileObj.email,
      image: response.profileObj.imageUrl,
    };
    console.log(data);
    this.props.googleLogin(data);
  };

  render() {
    return (
      <div>
        <h2>Google Auth</h2>
        <GoogleLogin
          clientId="774983211870-m6j8ocp25dmndcdk2a643v5vmfad8e4s.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

GoogleAuth.protoTypes = {
  googleLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  googleLogin: (userData) => dispatch(googleLogin(userData)),
});

export default connect(null, mapDispatchToProps)(GoogleAuth);
