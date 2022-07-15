import axios from 'axios';
import {
  calculatorRequest,
  calculatorSuccess,
  calculatorError,
} from './calculatorulator_action';
import { dateEatenProduct } from '../day/day_operations';

const currentDate = new Date().toLocaleDateString('fr-CA');

const apiPublic = axios.create({
  baseURL: 'https://slim-mom-project.herokuapp.com/api/users/public',
});

const apiPrivate = axios.create({
  baseURL: 'https://slim-mom-project.herokuapp.com/api/users/private',
});

export const calculatorDataPublic = calculatorFormParams => async dispatch => {
  try {
    dispatch(calculatorRequest());
    const { data } = await axios.post(apiPublic, calculatorFormParams);
    localStorage.setItem(
      'calculatorFormParams',
      JSON.stringify(calculatorFormParams)
    );
    dispatch(calculatorSuccess(data));
  } catch (error) {
    dispatch(calculatorError(error.message));
  }
};

export const calculatorDataPrivate =
  (calculatorFormParams, token) => async dispatch => {
    try {
      const { data } = await axios.post(apiPrivate, calculatorFormParams, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(calculatorSuccess(data));
      dispatch(dateEatenProduct(currentDate));
    } catch (error) {
      dispatch(calculatorError(error.message));
    }
  };
