import { GET_ERRORS } from "./product-types";

const INITIAL_STATE = {
  errors: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
