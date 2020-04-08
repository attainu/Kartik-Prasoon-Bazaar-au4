import React, { Fragment } from "react";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component";
import AsideNav from "../../components/AsideNav/AsideNav.component";
import ProductCard from "../../components/ProductCard/ProductCard.component";
class ResultsPage extends React.Component {
  render() {
    return (
      <Fragment>
        <SecondaryHeader />
        <div className="d-flex flex-row justify-content-center">
          <AsideNav id="aside" />
          <ProductCard id="product" />
        </div>
      </Fragment>
    );
  }
}

export default ResultsPage;
