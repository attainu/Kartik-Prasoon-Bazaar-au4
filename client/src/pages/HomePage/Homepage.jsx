import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader.component";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component";
import Carousel from "../../components/Carousel/Carousel.component";
import ProductCard from "../../components/ProductCard/ProductCard.component";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <SecondaryHeader />
        <Carousel />
        <ProductCard />
      </div>
    );
  }
}

export default HomePage;
