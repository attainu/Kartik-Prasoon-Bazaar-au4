import React from "react";

import MainHeader from "../../components/MainHeader/MainHeader.component";
import Login from "../../components/Auth/Login.component";
import GoogleAuth from "../../components/Auth/GoogleAuth.component";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <GoogleAuth />
        <Login />
      </div>
    );
  }
}

export default LoginPage;
