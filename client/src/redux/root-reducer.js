import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import productReducer from "./product/product-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export default rootReducer;
