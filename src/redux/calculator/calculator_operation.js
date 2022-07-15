import axios from 'axios';
import { calcRequest, calcSuccess, calcError } from './calculator-action';
import { dateEatenProduct } from '../product/product-operations';
const currentDate = new Date().toLocaleDateString('fr-CA');

export const calcData = calcFormParams => async dispatch => {
  try {
    dispatch(calcRequest());
    const { data } = await axios.post(
      'https://slim-mom-project.herokuapp.com/api/users/public',
      calcFormParams
    );
    localStorage.setItem('calcFormParams', JSON.stringify(calcFormParams));
    dispatch(calcSuccess(data));
  } catch (error) {
    dispatch(calcError(error.message));
  }
};

export const calcDataPrivate = (calcFormParams, token) => async dispatch => {
  try {
    const { data } = await axios.post(
      'https://slim-mom-project.herokuapp.com/api/users/private',
      calcFormParams,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(calcSuccess(data));
    dispatch(dateEatenProduct(currentDate));
  } catch (error) {
    dispatch(calcError(error.message));
  }
};
