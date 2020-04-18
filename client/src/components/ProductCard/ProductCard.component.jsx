import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3 mb-3">
        <div
          className="card border-dark"
          style={{ boxShadow: "4px 4px 4px 4px #c5c5c5" }}
        >
          <img
            className="card-img-top"
            src={this.props.product.photos[0]}
            style={{ height: "20rem" }}
            alt="product"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="d-inline-block">
                <h4 className="card-title">₹ {this.props.product.price}</h4>
              </div>
              <div className="d-inline-block">
                <h5 className="card-subtitle text-muted pt-2">Category</h5>
              </div>
            </div>
            <div className="mb-3">
              <h6 className="card-text">{this.props.product.title}</h6>
              <div className="d-flex justify-content-between">
                <span className="card-text">{this.props.product.city}</span>
                <span className="card-text">12/12/12</span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-info col-5">edit</button>
              <button className="btn btn-outline-danger col-5">delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductCard;
