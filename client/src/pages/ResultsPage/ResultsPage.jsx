import React, { Fragment } from "react";
import MainHeader from "../../components/MainHeader/MainHeader.component";
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component";
import AsideNav from "../../components/AsideNav/AsideNav.component";
import ProductCard from "../../components/ProductCard/ProductCard.component"
class ResultsPage extends React.Component {
    render() {
        return (
            <Fragment>
                <MainHeader />
                <SecondaryHeader />
                <div id="aside-product">
                    <AsideNav id="aside" />
                    <ProductCard id="product" />
                </div>
            </Fragment>
        );
    }
}

export default ResultsPage;