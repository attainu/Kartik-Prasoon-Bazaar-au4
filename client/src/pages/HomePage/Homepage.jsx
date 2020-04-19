import React from "react";
import axios from "axios";

import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component";
import Carousel from "../../components/Carousel/Carousel.component";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import Pagination from "../../components/Pagination/Pagination.component";

class HomePage extends React.Component {
  state = {
    productsHomePage: [],
  };

  async componentDidMount() {
    try {
      let res = await axios.get("/api/products/allproducts");
      console.log(res);
      this.setState({
        productsHomePage: res.data,
      });
      console.log(this.state.productsHomePage);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <SecondaryHeader />
        <Carousel />
        <br />
        <div className="row col-11 container-fluid justify-content-start mx-auto">
          {this.state.productsHomePage.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default HomePage;
