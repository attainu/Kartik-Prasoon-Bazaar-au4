import React, { Component } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react";

class ProductView extends Component {
  state = {
    productData: {},
    user: {},
  };

  componentDidMount() {
    console.log(this.props);
    const value = queryString.parse(this.props.history.location.search);
    console.log(value);
    axios
      .get(`/api/products/singleproduct/${value.id}`)
      .then((product) => this.setState({ productData: product.data }));
  }
  render() {
    console.log(this.state);
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
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={
                          !this.state.productData.photos
                            ? ""
                            : this.state.productData.photos[0]
                        }
                        alt="First slide"
                      />
                    </div>
                    {!this.state.productData.photos ? (
                      ""
                    ) : !this.state.productData.photos[1] ? (
                      ""
                    ) : (
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={this.state.productData.photos[1]}
                          alt="Second slide"
                        />
                      </div>
                    )}
                    {!this.state.productData.photos ? (
                      ""
                    ) : !this.state.productData.photos[2] ? (
                      ""
                    ) : (
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={this.state.productData.photos[2]}
                          alt="third slide"
                        />
                      </div>
                    )}
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
                    ₹ {this.state.productData.price}
                  </h1>
                  <h2 className="font-weight-bold mb-5">
                    {this.state.productData.title}
                  </h2>

                  <table className="table md-5">
                    <tbody>
                      <tr>
                        <th scope="row">
                          <i className="fas fa-map-marker-alt"></i>
                        </th>
                        <td>Location</td>
                        <td>{this.state.productData.city}</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <i className="far fa-calendar-alt"></i>
                        </th>
                        <td>Date</td>
                        <td>12/12/12</td>
                      </tr>
                    </tbody>
                  </table>

                  <button className="btn btn-info mt-3" type="submit">
                    <i
                      className="fas fa-heart"
                      style={{ color: "#ffffff" }}
                    ></i>
                    Add to Wishlist
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

                <p>{this.state.productData.description}</p>
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
                      <h4 className="text-center">My Name</h4>
                      <p className="text-center">My@email.com</p>
                      <p className="text-center">+91 1234567890</p>
                      <p className="text-center">
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-youtube fa-2x"></i>
                        </a>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-instagram fa-2x"></i>
                        </a>
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
export default withRouter(ProductView);
