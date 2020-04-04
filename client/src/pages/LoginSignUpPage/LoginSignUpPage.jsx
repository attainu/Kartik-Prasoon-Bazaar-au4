import React from "react";

import Login from "../../components/Auth/Login.component";
import Register from "../../components/Auth/Register.component";

class LoginSignUpPage extends React.Component {
  render() {
    return (
      <div>
        <h1>LoginSignUpPage</h1>
        <Login />
        <Register />
      </div>
    );
  }
}

export default LoginSignUpPage;
