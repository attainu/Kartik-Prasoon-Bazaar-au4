import React from "react";
import axios from "axios";

import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component";
import Carousel from "../../components/Carousel/Carousel.component";
import ProductCard from "../../components/ProductCard/ProductCard.component";

class HomePage extends React.Component {
  state = {
    productsHomePage: [],
  };

  async componentDidMount() {
    try {
      let res = await axios.get("/api/products/allproducts");
      this.setState({
        productsHomePage: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  onClick = (event) => {
    console.log("asdgvsdfgsdf");
    this.props.history.push(`/product/?id=${event.target.id}`);
  };

  render() {
    return (
      <div>
        <SecondaryHeader />
        <Carousel />
        <br />
        <div className="row col-11 container-fluid justify-content-start mx-auto">
          {this.state.productsHomePage.map((product, index) => (
            <ProductCard key={index} product={product} onClick={this.onClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
