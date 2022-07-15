import axios from 'axios';
import productActions from './day_action';

const axiosInstance = axios.create({
  baseURL: 'https://slim-mom-project.herokuapp.com',
});

export const getProducts = query => {
  return axiosInstance
    .get(`api/products/search?product=${query}`)
    .then(({ data }) => {
      return data;
    })
    .catch(error => error);
};

export const addProduct =
  ({ title, weight, kcal }) =>
  dispatch => {
    const newProduct = {
      kcal,
      title,
      weight,
    };
    dispatch(productActions.addProductRequest());

    axiosInstance
      .post('/products', newProduct)
      .then(({ data }) => {
        dispatch(productActions.addProductSuccess(data));
      })
      .catch(error => dispatch(productActions.addProductError(error)));
  };

export const dateEatenProduct = date => dispatch => {
  dispatch(productActions.dateEatenProductsRequest());

  axiosInstance
    .get(`/products/${date}`)
    .then(responce => {
      dispatch(productActions.dateEatenProductsSuccess(responce.data));
    })
    .catch(error => dispatch(productActions.dateEatenProductsError(error)));
};
