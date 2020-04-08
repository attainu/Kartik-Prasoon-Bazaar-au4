import React from "react";

import MainHeader from "../../components/MainHeader/MainHeader.component";
import Register from "../../components/Auth/Register.component";
//import GoogleAuth from "../../components/Auth/GoogleAuth.component";

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        {/* <GoogleAuth /> */}
        <Register />
      </div>
    );
  }
}

export default SignUpPage;
