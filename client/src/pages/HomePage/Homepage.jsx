import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader.component"
import SecondaryHeader from "../../components/SecondaryHeader/SecondaryHeader.component"
class HomePage extends React.Component {
    render() {
        return (
            <div>
                <MainHeader />
                <SecondaryHeader />
            </div>
        );
    }
}

export default HomePage;