import React from "react";

import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component";
import Carousel from "../../components/Carousel/Carousel.component";
import ProductCard from "../../components/ProductCard/ProductCard.component";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SecondaryHeader />
        <Carousel />
        <br />
        <div className="row col-11 container-fluid justify-content-start mx-auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    );
  }
}

export default HomePage;
