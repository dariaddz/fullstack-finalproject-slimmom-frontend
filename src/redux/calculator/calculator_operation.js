import axios from "axios";
import { calcRequest, calcSuccess, calcError } from "./calculator_action";
import { dateEatenProduct } from "../day/day_operation";
import { useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const calcDataPrivate = (calcFormParams, token) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://slim-mom-project.herokuapp.com/api/users/private",
      calcFormParams,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    dispatch(calcSuccess(data));
  } catch (error) {
    dispatch(calcError(error.message));
  }
};
