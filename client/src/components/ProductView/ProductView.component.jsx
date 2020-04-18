import React, { Component } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { registerUser } from "../../Redux/auth/auth-actions";
import { selectAuthInfo } from "../../Redux/auth/auth.selector";

class ProductView extends Component {
  state = {
    productData: {},
    user: {},
  };

  componentDidMount() {
    console.log(this.props);
    const value = queryString.parse(this.props.history.location.search);
    console.log(value);
    axios.get(`/api/products/singleproduct/${value.id}`).then((product) => {
      axios
        .get(`/api/users/current/${product.data.user}`)
        .then((user) => this.setState({ user: user.data }));
      this.setState({ productData: product.data });
    });
  }
  render() {
    let product = this.state.productData;
    let user = this.state.user;
    let wishlist = "";
    let wishlistclass = "";
    let wishlistbuttonclass = "";
    console.log(this.props.auth.user.id);
    if (this.props.auth.user.id === this.state.productData.user) {
      wishlist = "delete";
      wishlistbuttonclass = "btn btn-danger mt-3";
      wishlistclass = "fas fas-trash-alt";
    } else {
      wishlist = "add this to wishlist";
      wishlistbuttonclass = "btn btn-info mt-3";
      wishlistclass = "fas fa - heart";
    }
    return (
      <Fragment>
        {/* main component */}
        <main className="mt-5 pt-4">
          <div className="container dark-grey-text mt-5">
            {/* <!--Grid row--> */}
            <div className="row wow fadeIn">
              {/* <!--Grid column--> */}
              <div className="col-md-8 mb-4 text-center my-auto">
                {/* <!-- carousel --> */}
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    {!product.photos
                      ? ""
                      : product.photos.map((photo, index) => (
                          <div
                            className={
                              index === 0
                                ? "carousel-item active"
                                : "carousel-item "
                            }
                          >
                            <img
                              className="d-block w-100"
                              src={photo}
                              alt={index}
                            />
                          </div>
                        ))}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                {/* <!-- carousel --> */}
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-4 mb-4">
                {/* <!--Content--> */}
                <div className="p-4 mt-5">
                  <h1 className="font-weight-bold mb-4 display-4">
                    ₹ {product.price}
                  </h1>
                  <h2 className="font-weight-bold mb-5">{product.title}</h2>

                  <table className="table md-5">
                    <tbody>
                      <tr>
                        <th scope="row">
                          <i className="fas fa-map-marker-alt"></i>
                        </th>
                        <td>Location</td>
                        <td>{product.city}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <i className="far fa-calendar-alt"></i>
                        </th>
                        <td>Date</td>
                        <td>{Date(product.date).slice(0, 15)}</td>
                      </tr>
                    </tbody>
                  </table>

                  <button className={wishlistbuttonclass} type="submit">
                    <i
                      className={wishlistclass}
                      style={{ color: "#ffffff" }}
                    ></i>
                    {wishlist}
                  </button>
                </div>
                {/* <!--Content--> */}
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}

            <hr />

            {/* <!--Grid row--> */}
            <div className="row d-flex justify-content-center wow fadeIn">
              {/* <!--Grid column--> */}
              <div className="col-md-6 text-center">
                <h4 className="my-4 h4">Description</h4>

                <p>{product.description}</p>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}

            {/* <!--Grid row--> */}
            <div className="d-flex justify-content-center mt-5">
              <div className="card card-body bg-info text-white mb-3 col-md-6">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <img
                        className="rounded-circle"
                        src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <h2 className="text-center">Seller Info</h2>
                      <h4 className="text-center">{user.name}</h4>
                      <p className="text-center">{user.email}</p>
                      <p className="text-center">
                        {!user.contactNo ? `` : `+91 ${user.contactNo}`}
                      </p>
                      <p className="text-center">
                        {!user.city ? `` : `${user.city}`}
                      </p>
                      <p className="text-center">
                        {user.facebook ? (
                          <Link to={user.facebook} className="text-white p-2">
                            <i className="fab fa-facebook fa-2x"></i>
                          </Link>
                        ) : (
                          <i
                            className="fab fa-facebook fa-2x p-2"
                            style={{ color: "#bbbbbb" }}
                          ></i>
                        )}
                        {user.youtube ? (
                          <Link to={user.youtube} className="text-white p-2">
                            <i className="fab fa-youtube fa-2x"></i>
                          </Link>
                        ) : (
                          <i
                            className="fab fa-youtube fa-2x p-2"
                            style={{ color: "#bbbbbb" }}
                          ></i>
                        )}
                        {user.instagram ? (
                          <Link to={user.instagram} className="text-white p-2">
                            <i className="fab fa-instagram fa-2x"></i>
                          </Link>
                        ) : (
                          <i
                            className="fab fa-instagram fa-2x p-2"
                            style={{ color: "#bbbbbb" }}
                          ></i>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Grid row--> */}
        </main>
        {/* <!--Main layout--> */}
      </Fragment>
    );
  }
}

ProductView.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: selectAuthInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (userData) => dispatch(registerUser(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductView));
