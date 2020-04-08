import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

class GoogleAuth extends Component {
  responseGoogle = (response) => {
    console.log(response.tokenObj.access_token);
    const data = {
      access_token: response.tokenObj.access_token,
    };
    axios
      .post("/api/users/oauth", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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

export default GoogleAuth;
