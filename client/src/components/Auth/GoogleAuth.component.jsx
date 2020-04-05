import React, { Component } from "react";
import GoogleLogin from "react-google-login";

class GoogleAuth extends Component {
  responseGoogle = (response) => {
    console.log(response.tokenObj.access_token);
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
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default GoogleAuth;
