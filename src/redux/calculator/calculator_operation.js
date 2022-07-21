import axios from 'axios';
import { calcSuccess, calcError } from './calculator_action';


export const calcDataPrivate = (calcFormParams, token) => async dispatch => {
  try {
    const { data } = await axios.post(
      'https://slim-mom-project.herokuapp.com/api/users/private',
      calcFormParams,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    dispatch(calcSuccess(data));
  } catch (error) {
    dispatch(calcError(error.message));
  }
};
//--Eugen
export const clearKcal = () => async dispatch => {
  dispatch(clearKcal())
};
//--Eugen


