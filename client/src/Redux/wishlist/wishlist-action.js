import axios from "axios";

import { GET_WISHLIST } from "./wishlist-types";

export const getWishlist = (data) => (dispatch) => {
  let products = [];
  data.map((val) => {
    axios
      .get(`/api/products/singleproduct/${val}`)
      .then((res) => {
        products.push(res.data);
        if (data.length === products.length) {
          dispatch({
            type: GET_WISHLIST,
            payload: products,
          });
        }
      })
      .catch((err) => console.log(err));
  });
};
