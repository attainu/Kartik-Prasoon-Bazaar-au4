import React, { Component } from "react";
import { connect } from "react-redux";

export default (ComposedComponent) => {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.auth.isAuthenticated) {
        this.props.history.replace("/login");
      }
    }
    componentWillUpdate() {
      if (!this.props.auth.isAuthenticated)
        this.props.history.replace("/login");
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
  }
  return connect(mapStateToProps)(RequireAuth);
};
