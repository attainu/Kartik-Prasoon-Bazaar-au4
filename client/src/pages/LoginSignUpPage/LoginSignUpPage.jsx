import React from "react";

import Login from "../../components/auth/Login.component";
import Register from "../../components/auth/register.component";

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
