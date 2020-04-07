import React from "react";

import Login from "../../components/Auth/Login.component";
//import GoogleAuth from "../../components/Auth/GoogleAuth.component";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        {/* <GoogleAuth /> */}
        <Login />
      </div>
    );
  }
}

export default LoginPage;
