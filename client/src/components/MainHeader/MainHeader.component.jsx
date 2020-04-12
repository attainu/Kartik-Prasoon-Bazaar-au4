import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../Redux/auth/auth-actions";
import Logo from "../../assets/logo/logo-white.png";

class MainHeader extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            to="#"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.image}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            Logout
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addproduct">
            Add Product
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top display">
        <div className="col-2">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" style={{ width: "9rem" }} />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle text-white"
              data-toggle="dropdown"
            >
              Select City
            </Link>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item">
                Delhi
              </Link>
              <Link to="#" className="dropdown-item">
                Mumbai
              </Link>
              <Link to="#" className="dropdown-item">
                Kolkata
              </Link>
              <Link to="#" className="dropdown-item">
                Bengaluru
              </Link>
              <Link to="#" className="dropdown-item">
                Chennai
              </Link>
            </div>
          </div>
          <form className="form-inline mx-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              size="50"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

MainHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
