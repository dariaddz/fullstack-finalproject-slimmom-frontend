import axios from 'axios';
import { calcSuccess, calcError } from './calculator_action';
// import { useSelector } from 'react-redux';

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

// export const getCalcData = date => async dispatch => {
//   const token = useSelector(state => state.auth.token);
//   try {
//     const { data } = await axios.get(
//       `https://slim-mom-project.herokuapp.com/api/products/${date}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const response = {
//       kcal: data.dayNorm,
//       productsNotRecommended: data.productsNotRecommended,
//     };

//     dispatch(calcSuccess(response));
//   } catch (error) {
//     dispatch(calcError(error.message));
//   }
// };
