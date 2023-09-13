import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  isAdmin: false,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.SET_ADMIN:
      return { ...state, isAdmin: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;