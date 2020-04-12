import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-3">Dashboard</h1>
              <p className="lead text-muted">
                Welcome {this.props.auth.user.name}
              </p>

              {/* Dashboard Actions  */}
              <div className="btn-group mb-4" role="group">
                <Link to="/edit-profile" className="btn btn-light">
                  <i className="fas fa-user-circle text-info mr-1"></i> Edit
                  Profile
                </Link>
                <Link to="/my-ads" className="btn btn-light">
                  <i className="fab fa-buysellads text-info mr-1"></i>
                  My Ads
                </Link>
                <Link to="/wishlist" className="btn btn-light">
                  <i className="fas fa-heart text-info mr-1"></i>
                  Wishlist
                </Link>
              </div>
              {/* Dashboard Actions  */}

              {/* profile view  */}
              <ProfileCard />

              <div style={{ marginBottom: "60px" }}>
                <button className="btn btn-danger">Delete My Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(DashboardPage));
