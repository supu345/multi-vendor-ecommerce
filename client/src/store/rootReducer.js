import authReducer from "./reducers/authReducer";
import cardReducer from "./reducers/cardReducer";
import chatReducer from "./reducers/chatReducer";
import homeReducer from "./reducers/homeReducer";

const rootReducers = {
  home: homeReducer,
  auth: authReducer,
  chat: chatReducer,
  card: cardReducer,
};
export default rootReducers;
