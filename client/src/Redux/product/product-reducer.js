import { GET_ERRORS } from "./product-types";
import { GET_MY_PRODUCTS } from "./product-types";

const INITIAL_STATE = {
  myProducts: [],
  errors: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_MY_PRODUCTS:
      return {
        ...state,
        myProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
