import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component";
import Carousel from "../../components/Carousel/Carousel.component";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import Pagination from "../../components/Pagination/Pagination.component";

import { selectAuthInfo } from "../../Redux/auth/auth.selector";

class HomePage extends React.Component {
  state = {
    productsHomePage: [],
    value: "",
    loader: true,
  };

  async componentDidMount() {
    const value = queryString.parse(this.props.history.location.search);
    try {
      let res = await axios.get(
        `/api/products/allproducts/${value.page ? value.page : "1"}`
      );
      this.setState({
        productsHomePage: res.data,
        loader: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentWillReceiveProps() {
    const value = queryString.parse(this.props.history.location.search);
    try {
      let res = await axios.get(
        `/api/products/allproducts/${value.page ? value.page : "1"}`
      );
      this.setState({
        productsHomePage: res.data,
        loader: false,
      });
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
      this.toTop();
      this.props.history.push("/login");
    }
  };

  toTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <SecondaryHeader />
        <Carousel />
        {console.log}
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
        ) : this.state.productsHomePage.length === 0 ? (
          <h1 class="display-4 text-center">No more products</h1>
        ) : (
          ""
        )}
        <div className="row col-11 container-fluid justify-content-start mx-auto">
          {this.state.productsHomePage.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={this.onClick}
              onWishlist={this.onWishlist}
              userId={this.props.auth.user.id}
            />
          ))}
        </div>
        <Pagination url="/" />
      </div>
    );
  }
}

HomePage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: selectAuthInfo(state),
});

export default connect(mapStateToProps)(withRouter(HomePage));
