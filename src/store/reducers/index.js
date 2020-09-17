import { SET_USER } from "../constants/action-types";

const initialState = {
    user: {}
  };
  
function rootReducer(state = initialState, action) {
if (action.type === SET_USER) {
    state.user = action.payload;
}
return state;
};

export default rootReducer;
