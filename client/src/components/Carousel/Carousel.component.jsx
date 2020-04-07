import React, { Component } from "react";
//import DummyImage1 from "../../assets/dummyimages/1.jpg";
import DummyImage2 from "../../assets/dummyimages/img-2.jpg";
class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ height: "60vh" }}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ height: "60vh" }}>
          <div className="carousel-item active">
            <img src={DummyImage2} className="tales img-fluid" alt="..." />
          </div>
          <div className="carousel-item" style={{ height: "60vh" }}>
            <img src={DummyImage2} className="tales img-fluid" alt="..." />
          </div>
          <div className="carousel-item" style={{ height: "60vh" }}>
            <img src={DummyImage2} className="tales img-fluid" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          style={{ height: "60vh" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          style={{ height: "60vh" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Carousel;
