import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProfileCard extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-12">
          <div class="card card-body bg-info text-white mb-3">
            <div class="row">
              <div class="m-auto">
                <img
                  class="rounded-circle"
                  src={this.props.auth.user.image}
                  alt=""
                  style={{ width: "200px" }}
                />
              </div>
            </div>
            <div class="text-center">
              <h1 class="display-4 text-center">{this.props.auth.user.name}</h1>
              <p class="lead text-center">{this.props.auth.user.email}</p>
              <p>
                {this.props.auth.user.contactNo
                  ? this.props.auth.user.contactNo
                  : "Add Contact Number"}
              </p>
              <p>
                <Link to="#" class="text-white p-2">
                  <i class="fab fa-facebook fa-2x"></i>
                </Link>
                <Link to="#" class="text-white p-2">
                  <i class="fab fa-youtube fa-2x"></i>
                </Link>
                <Link to="#" class="text-white p-2">
                  <i class="fab fa-instagram fa-2x"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(ProfileCard));
