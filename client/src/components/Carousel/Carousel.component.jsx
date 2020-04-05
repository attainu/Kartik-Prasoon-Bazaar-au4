import React, { Component } from 'react'
import DummyImage1 from "../../assets/dummyimages/1.jpg"
import DummyImage2 from "../../assets/dummyimages/img-2.jpg"
class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ height: "60vh" }}>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" style={{ height: "60vh" }}>
                    <div class="carousel-item active">
                        <img src={DummyImage2} class="tales img-fluid" alt="..." />
                    </div>
                    <div class="carousel-item" style={{ height: "60vh" }}>
                        <img src={DummyImage2} class="tales img-fluid" alt="..." />
                    </div>
                    <div class="carousel-item" style={{ height: "60vh" }}>
                        <img src={DummyImage2} class="tales img-fluid" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{ height: "60vh" }}>
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{ height: "60vh" }}>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
export default Carousel;