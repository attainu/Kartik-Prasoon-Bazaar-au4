import React, { Component } from "react";
import axios from "axios";

class QuotesView extends Component {
  handleRemove = (event) => {
    document.getElementById(event.target.id).innerHTML = `<span
     class="spinner-border spinner-border-sm"
     role="status"
     aria-hidden="true"
   ></span>${" "}Loading...`;
    event.preventDefault();
    let data = {
      productId: this.props.productData._id,
      quoteDate: event.target.id,
    };
    axios
      .post("/api/products/deletequote", data)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };

  render() {
    let quotes = this.props.productData.quotes
      ? this.props.productData.quotes
      : [];
    return (
      <div>
        {quotes.length > 0 ? (
          <div>
            <h3 className="mt-3 text-center display-4">All Quotations</h3>
            <table className="table md-5">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact No.</th>
                  <th scope="col">Quotation</th>
                  <th scope="col">Reject / Remove</th>
                </tr>
              </thead>
              <tbody>
                {quotes
                  .slice(0)
                  .reverse()
                  .map((quote, ind) => (
                    <tr>
                      <th scope="row">{ind + 1}</th>
                      <td>{quote.date}</td>
                      <td>{quote.buyerName}</td>
                      <td>{quote.buyerEmail}</td>
                      <td>{`+91 ${quote.buyerContactNo}`}</td>
                      <td>{`₹ ${quote.quote}`}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={this.handleRemove}
                          id={quote.date}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="mt-3 text-center display-4">No Quotations Yet</h3>
        )}
      </div>
    );
  }
}

export default QuotesView;
