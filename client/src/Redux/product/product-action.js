import axios from "axios";

import { GET_ERRORS } from "./product-types";
import { GET_MY_PRODUCTS } from "./product-types";

export const addProduct = (data) => (dispatch) => {
  axios
    .post("/api/products/addproduct", data.newProduct)
    .then((res) => data.history.push("/myads"))
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getMyProducts = (data) => (dispatch) => {
  let products = [];
  data.map((val) => {
    axios
      .get(`/api/products/singleproduct/${val}`)
      .then((res) => {
        products.push(res.data);
        if (data.length === products.length) {
          dispatch({
            type: GET_MY_PRODUCTS,
            payload: products,
          });
        }
      })
      .catch((err) => console.log(err));
  });
};
