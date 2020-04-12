import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.component";
class ResultsPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="bg-light">
          <nav className="row col-11 navbar ml-1">
            <div className="btn-group col-2">
              <button type="button" className="btn btn-light" disabled>
                <h5 className="font-weight-bolder">SORT BY:</h5>
              </button>
            </div>
            <div className="btn-group col-4">
              <button
                type="button"
                className="btn btn-outline-info dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </button>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item" href="#">
                  Automobile
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Real Estate
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Electronic
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Fashion
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Pet
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Furniture
                </Link>
              </div>
            </div>
            <div className="btn-group col-4">
              <button
                type="button"
                className="btn btn-outline-info dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Location
              </button>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item" href="#">
                  Delhi
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Mumbai
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Bangalore
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Kolkata
                </Link>
                <Link to="#" className="dropdown-item" href="#">
                  Chennai
                </Link>
              </div>
            </div>
            <div className="btn-group col-2">
              <button type="button" className="btn btn-outline-danger">
                Reset
              </button>
            </div>
          </nav>
        </div>
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
      </Fragment>
    );
  }
}

export default ResultsPage;
