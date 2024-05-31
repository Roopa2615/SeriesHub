import { combineReducers } from "redux";

const initialState = {
  counter: 1,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
    counter: CounterReducer,
    //add other reducers here
})

export default rootReducers;
