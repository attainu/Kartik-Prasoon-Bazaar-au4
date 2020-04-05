import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader.component"
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component"
import Carousel from "../../components/Carousel/Carousel.component"

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainHeader />
                <SecondaryHeader />
                <Carousel />
            </div>
        );
    }
}

export default HomePage;