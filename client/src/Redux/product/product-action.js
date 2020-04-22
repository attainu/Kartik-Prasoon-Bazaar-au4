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

export const getMyProducts = (data) => async (dispatch) => {
  let products = [];
  let i = 0;
  while (i < data.length) {
    let wait = await axios.get(`/api/products/singleproduct/${data[i]}`);
    products.push(wait.data);
    if (data.length === products.length) {
      dispatch({
        type: GET_MY_PRODUCTS,
        payload: products,
      });
    }
    i++;
  }
};
