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
      <div className="navbar-nav  ml-auto">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              href=""
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
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/userprofile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
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
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top display">
          <Link className="navbar-brand" to="/">
            <img src={Logo} style={{ width: "9rem" }} />
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                data-toggle="dropdown"
                href="#"
              >
                Select City
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Delhi
                </a>
                <a className="dropdown-item" href="#">
                  Mumbai
                </a>
                <a className="dropdown-item" href="#">
                  Kolkata
                </a>
                <a className="dropdown-item" href="#">
                  Bengaluru
                </a>
                <a className="dropdown-item" href="#">
                  Chennai
                </a>
              </div>
            </div>
            <form className="form-inline ml-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
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
      </div>
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
