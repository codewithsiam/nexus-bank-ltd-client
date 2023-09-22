import axios from "axios";
import * as actionTypes from "./actionTypes";
import { baseUrl } from "../../config/server";
import { useDispatch } from "react-redux";

// Action creators
export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const setAdmin = (isAdmin) => ({
  type: actionTypes.SET_ADMIN,
  payload: isAdmin,
});

export const setLoading = (loading) => ({
  type: actionTypes.SET_LOADING,
  payload: loading,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

// Thunk action to fetch user data
export const fetchUserData = (storedToken) => {
  return (dispatch) => {
    if (!storedToken) {
      dispatch(setUser(null));
      dispatch(setLoading(false));
      return;
    }

    axios
      .get(`${baseUrl}/profileMonitor`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((res) => {
        if (res.data) {
          dispatch(setUser(res.data.result));
          dispatch(setAdmin(res.data.isAdmin));
        } else {
          localStorage.removeItem("authToken");
          dispatch(setUser(null));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};
