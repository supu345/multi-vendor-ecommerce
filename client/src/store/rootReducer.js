import authReducer from "./reducers/authReducer";
import cardReducer from "./reducers/cardReducer";
import chatReducer from "./reducers/chatReducer";
import homeReducer from "./reducers/homeReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducers = {
  home: homeReducer,
  auth: authReducer,
  chat: chatReducer,
  card: cardReducer,
  order: orderReducer,
};
export default rootReducers;
