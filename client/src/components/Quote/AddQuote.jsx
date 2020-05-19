import React, { Component } from "react";
import axios from "axios";

class AddQuote extends Component {
  state = {
    formOpen: false,
    buyerId: "",
    buyerContactNo: "",
    buyerName: "",
    buyerEmail: "",
    quote: "",
    productId: "",
    myQuotes: [],
  };

  componentDidMount() {
    let myQuotes = this.props.productData.quotes.filter((quote) => {
      if (quote.buyerId === this.props.user.id) {
        return quote;
      }
    });
    this.setState({
      productId: this.props.productData._id,
      buyerId: this.props.user.id,
      buyerName: this.props.user.name,
      buyerEmail: this.props.user.email,
      buyerContactNo: this.props.user.contactNo
        ? this.props.user.contactNo
        : "",
      myQuotes,
    });
  }

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false,
      quote: "",
    });
  };

  handleSubmit = (event) => {
    document.getElementById("saveButton").innerHTML = `<span
   class="spinner-border spinner-border-sm"
   role="status"
   aria-hidden="true"
 ></span>${" "}Loading...`;
    event.preventDefault();

    let data = {
      buyerId: this.state.buyerId,
      buyerContactNo: this.state.buyerContactNo,
      buyerName: this.state.buyerName,
      buyerEmail: this.state.buyerEmail,
      quote: this.state.quote,
      productId: this.state.productId,
    };
    axios
      .post("/api/products/addquote", data)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };

  handleRemove = (event) => {
    document.getElementById(event.target.id).innerHTML = `<span
   class="spinner-border spinner-border-sm"
   role="status"
   aria-hidden="true"
 ></span>${" "}Loading...`;
    event.preventDefault();
    let data = {
      productId: this.state.productId,
      quoteDate: event.target.id,
    };
    axios
      .post("/api/products/deletequote", data)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  renderMyQuotes = () => {
    if (this.state.myQuotes.length > 0) {
      return (
        <div>
          <h4 className="mt-4">My Quotations</h4>
          <table className="table md-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Quotation</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.state.myQuotes
                .slice(0)
                .reverse()
                .map((quote, ind) => (
                  <tr key={ind}>
                    <th scope="row">{ind + 1}</th>
                    <td>{quote.date.slice(0, 10)}</td>
                    <td>{`₹ ${quote.quote}`}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={this.handleRemove}
                        id={quote.date}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return "";
    }
  };

  renderButton = () => (
    <div>
      {this.renderMyQuotes()}
      <button className="btn btn-info mt-2" onClick={this.openForm}>
        <i className="fas fa-money-check-alt" style={{ color: "#ffffff" }}></i>
        {this.state.myQuotes.length > 0
          ? ` Send another Quotation`
          : ` Send Quotation`}
      </button>
    </div>
  );

  renderForm = () => (
    <div>
      {this.renderMyQuotes()}
      <form onSubmit={this.handleSubmit} className="mt-3">
        <div className="input-group mb-0">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <h5>+91</h5>
            </span>
          </div>
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Contact Number"
            name="buyerContactNo"
            value={this.state.buyerContactNo}
            onChange={this.handleChange}
            required
          />
        </div>
        <small className="form-text text-muted mb-4">
          Enter Your Contact Number
        </small>{" "}
        <div className="input-group mb-0">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <h5>₹</h5>
            </span>
          </div>
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter You Quote"
            name="quote"
            value={this.state.quote}
            onChange={this.handleChange}
            required
          />
        </div>
        <small className="form-text text-muted mb-4">Enter Your Amount</small>
        <div className="d-flex justify-content-around">
          <button id="saveButton" type="submit" className="btn btn-info col-5">
            Send
          </button>
          <button className="btn btn-secondary col-5" onClick={this.closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderButton();
  }
}

export default AddQuote;
