import axios from "axios";

import { GET_ERRORS } from "./product-types";

export const addProduct = (data) => (dispatch) => {
  console.log(data);
  axios
    .post("/api/products/addproduct", data.newProduct)
    .then((res) => data.history.push("/dashboard"))
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
