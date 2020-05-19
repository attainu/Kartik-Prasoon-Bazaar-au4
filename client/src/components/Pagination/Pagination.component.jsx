import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

class Pagination extends Component {
  state = {
    value: "",
  };
  async componentWillReceiveProps() {
    const val = queryString.parse(this.props.history.location.search);
    if (val.page) {
      this.setState({
        value: queryString.parse(this.props.history.location.search),
      });
    } else {
      this.setState({
        value: { page: "1" },
      });
    }
  }

  scroll = () => {
    this.props.queryPram !== undefined
      ? window.scrollTo(0, 0)
      : window.scrollTo(0, 550);
  };

  render() {
    let url = this.props.queryPram
      ? this.props.url + this.props.queryPram
      : this.props.url + "?";
    return (
      <div className="mt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item" onClick={this.scroll}>
              <Link
                className="page-link"
                to={`${url}page=${
                  this.state.value.page > 1 ? this.state.value.page - 1 : "1"
                }`}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </Link>
            </li>
            {this.state.value.page > 1 ? (
              <li className="page-item" onClick={this.scroll}>
                <Link
                  className="page-link"
                  to={`${url}page=${this.state.value.page - 1}`}
                >
                  {this.state.value.page - 1}
                </Link>
              </li>
            ) : (
              ""
            )}

            <li className="page-item active" onClick={this.scroll}>
              <p className="page-link">
                <span className="sr-only">(current)</span>{" "}
                {this.state.value.page}
              </p>
            </li>
            <li className="page-item" onClick={this.scroll}>
              <Link
                className="page-link"
                to={`${url}page=${parseInt(this.state.value.page) + 1}`}
              >
                {parseInt(this.state.value.page) + 1}
              </Link>
            </li>
            <li className="page-item" onClick={this.scroll}>
              <Link
                className="page-link"
                to={`${url}page=${parseInt(this.state.value.page) + 1}`}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Pagination);
