import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard.component";

class ResultsPage extends React.Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    let value = queryString.parse(this.props.history.location.search);
    try {
      let res = await axios.get(
        `/api/products/results/?city=${value.city}&category=${
          value.category
        }&title=${value.search}&page=${value.page ? value.page : "1"}`
      );
      this.setState({ products: res.data });
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
      this.setState({ products: res.data });
    } catch (error) {
      console.log(error);
    }
  }

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

  render() {
    return (
      <Fragment>
        <div className="bg-light">
          <nav className="row col-11 navbar ml-1">
            <div className="btn-group col-2">
              <button type="button" className="btn btn-light" disabled>
                <h5 className="font-weight-bolder">SORT BY:</h5>
              </button>
            </div>
            <div className="btn-group col-4">
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
                  id="Real Estate"
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
                  id="Pet"
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
            <div className="btn-group col-4">
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
            <div className="btn-group col-2">
              <button
                type="button"
                onClick={this.clear}
                className="btn btn-outline-danger"
              >
                Reset
              </button>
            </div>
          </nav>
        </div>
        <div className="row col-11 container-fluid justify-content-start mx-auto">
          {this.state.products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              // onClick={this.onClick}
              //  onWishlist={this.onWishlist}
              //  userId={this.props.auth.user.id}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default withRouter(ResultsPage);
