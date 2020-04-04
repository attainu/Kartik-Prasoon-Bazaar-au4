import React from "react";

import Login from "../../components/auth/Login.component";
import Register from "../../components/auth/register.component";

class LoginSignUpPage extends React.Component {
  render() {
    return (
      <div>
        <hi>LoginSignUpPage</hi>
        <Login />
        <Register />
      </div>
    );
  }
}

export default LoginSignUpPage;
