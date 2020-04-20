import { combineReducers } from "redux";

import authReducer from "./auth/auth-reducer";
import productReducer from "./product/product-reducer";
import wishlistReducer from "./wishlist/wishlist-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
