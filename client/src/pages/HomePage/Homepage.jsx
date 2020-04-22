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
  };

  async componentDidMount() {
    const value = queryString.parse(this.props.history.location.search);
    try {
      let res = await axios.get(
        `/api/products/allproducts/${value.page ? value.page : "1"}`
      );
      this.setState({
        productsHomePage: res.data,
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
      });
    } catch (error) {
      console.log(error);
    }
  }

  onClick = (event) => {
    this.props.history.push(`/product/?id=${event.target.id}`);
  };

  onWishlist = (event) => {
    if (this.props.auth.isAuthenticated) {
      axios
        .post("/api/users/addtowishlist", {
          id: this.props.auth.user.id,
          proId: event.target.id,
        })
        .then((res) => this.props.history.push("/wishlist"))
        .catch((err) => console.log(err));
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div>
        <SecondaryHeader />
        <Carousel />
        <br />
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
        <Pagination />
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
