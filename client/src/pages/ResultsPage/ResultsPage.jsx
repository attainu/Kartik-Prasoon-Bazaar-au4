import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

import { selectAuthInfo } from "../../Redux/auth/auth.selector";

import ProductCard from "../../components/ProductCard/ProductCard.component";
import Pagination from "../../components/Pagination/Pagination.component";

class ResultsPage extends React.Component {
  state = {
    products: [],
    loader: true,
  };
  async componentDidMount() {
    let value = queryString.parse(this.props.history.location.search);
    try {
      let res = await axios.get(
        `/api/products/results/?city=${value.city}&category=${
          value.category
        }&title=${value.search}&page=${value.page ? value.page : "1"}`
      );
      this.setState({ products: res.data, loader: false });
    } catch (error) {
      console.log(error);
    }
  }

  async componentWillReceiveProps() {
    let value = queryString.parse(this.props.history.location.search);
    try {
      let res = await axios.get(
        `/api/products/results/?city=${value.city}&category=${
          value.category
        }&title=${value.search}&page=${value.page ? value.page : "1"}`
      );
      this.setState({ products: res.data, loader: false });
    } catch (error) {
      console.log(error);
    }
  }

  onClick = (event) => {
    this.toTop();
    this.props.history.push(`/product/?id=${event.target.id}`);
  };

  onWishlist = (event) => {
    if (this.props.auth.isAuthenticated) {
      axios
        .post("/api/users/addtowishlist", {
          id: this.props.auth.user.id,
          proId: event.target.id,
        })
        .then((res) => {
          this.toTop();
          this.props.history.push("/wishlist");
        })
        .catch((err) => console.log(err));
    } else {
      this.props.history.push("/login");
    }
  };

  onSort = (event) => {
    let searchCriteria = event.target.getAttribute("criteria");
    let searchTerm = event.target.id;
    let value = queryString.parse(this.props.history.location.search);
    value[searchCriteria] = searchTerm;
    value = queryString.stringify(value);
    this.props.history.push({
      pathname: "/results",
      search: "?" + value,
    });
  };

  clear = () => {
    this.props.history.push("/results");
  };

  toTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    let value = queryString.parse(this.props.history.location.search);
    let { city, category } = value;
    let queryPram =
      city && category
        ? `?category=${category}&city=${city}&`
        : city
        ? `?city=${city}&`
        : category
        ? `?category=${category}&`
        : null;
    return (
      <Fragment>
        <div className="bg-light">
          <nav className="row col-11 navbar ml-1">
            <div className="btn-group col-2">
              <button type="button" className="btn btn-light" disabled>
                <h5 className="font-weight-bolder">SORT BY :</h5>
              </button>
            </div>
            <div className="btn-group col-3">
              <button
                type="button"
                className="btn btn-outline-info dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </button>
              <div className="dropdown-menu">
                <button
                  onClick={this.onSort}
                  className="dropdown-item"
                  criteria="category"
                  id="Automobile"
                >
                  Automobile
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="category"
                  id="Real-Estate"
                >
                  Real Estate
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="category"
                  id="Electronics"
                >
                  Electronic
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="category"
                  id="Fashion"
                >
                  Fashion
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="category"
                  id="Pet"
                >
                  Pet
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="category"
                  id="Furniture"
                >
                  Furniture
                </button>
              </div>
            </div>
            <div className="btn-group col-3">
              <button
                type="button"
                className="btn btn-outline-info dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Location
              </button>
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="city"
                  id="Delhi"
                >
                  Delhi
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="city"
                  id="Mumbai"
                >
                  Mumbai
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="city"
                  id="Bangalore"
                >
                  Bangalore
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="city"
                  id="Kolkata"
                >
                  Kolkata
                </button>
                <button
                  className="dropdown-item"
                  onClick={this.onSort}
                  criteria="city"
                  id="Chennai"
                >
                  Chennai
                </button>
              </div>
            </div>
            <div className="btn-group col-3">
              <button
                type="button"
                onClick={this.clear}
                className="btn btn-outline-danger"
              >
                Reset
              </button>
            </div>
          </nav>
          <nav className="row col-11 navbar ml-1">
            <div className="btn-group col-2">
              <button type="button" className="btn btn-light" disabled>
                <h5 className="font-weight-bolder">RESULTS FOR :</h5>
              </button>
            </div>
            <div className="btn-group col-3">
              <button type="button" className="btn btn-outline-info" disabled>
                {!queryString.parse(this.props.history.location.search).category
                  ? "-"
                  : queryString.parse(this.props.history.location.search)
                      .category}
              </button>
            </div>
            <div className="btn-group col-3">
              <button type="button" className="btn btn-outline-info" disabled>
                {!queryString.parse(this.props.history.location.search).city
                  ? "-"
                  : queryString.parse(this.props.history.location.search).city}
              </button>
            </div>
            <div className="btn-group col-3">
              <button type="button" className="btn btn-outline-info" disabled>
                {!queryString.parse(this.props.history.location.search).search
                  ? "-"
                  : queryString.parse(this.props.history.location.search)
                      .search}
              </button>
            </div>
          </nav>
        </div>
        {this.state.loader ? (
          <div className="d-flex justify-content-center my-3" id="loader">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
              id="loaderChild"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : this.state.products.length === 0 ? (
          <h1 class="display-4 text-center">No more products</h1>
        ) : (
          ""
        )}
        <div className="row col-11 container-fluid justify-content-start mx-auto">
          {this.state.products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={this.onClick}
              onWishlist={this.onWishlist}
              //  userId={this.props.auth.user.id}
            />
          ))}
        </div>
        <Pagination url="/results/" queryPram={queryPram} />
      </Fragment>
    );
  }
}

ResultsPage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: selectAuthInfo(state),
});

export default connect(mapStateToProps)(withRouter(ResultsPage));
