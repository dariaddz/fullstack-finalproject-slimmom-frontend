import axios from 'axios';
import productActions from './day_action';

const axiosInstance = axios.create({
  baseURL: 'https://slim-mom-project.herokuapp.com',
});
axiosInstance.interceptors.request.use(config => {
  const LS = localStorage.getItem('persist:auth');
  const token = JSON.parse(LS).token.slice(1, -1);
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
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
        .post('api/products', newProduct)
        .then(({ data }) => {
          dispatch(productActions.addProductSuccess(data));
        })
        .catch(error => dispatch(productActions.addProductError(error)));
    };

export const dateEatenProduct = date => dispatch => {
  dispatch(productActions.dateEatenProductsRequest());

  axiosInstance
    .get(`api/products/${date}`)
    .then(responce => {
      dispatch(productActions.dateEatenProductsSuccess(responce.data));
    })
    .catch(error => dispatch(productActions.dateEatenProductsError(error)));
};

export const deleteProduct = id => dispatch => {
  dispatch(productActions.deleteProductIdRequest());

  axiosInstance
    .delete(`api/products/${id}`)
    .then(() => dispatch(productActions.deleteProductIdSuccess(id)))
    .catch(error =>
      dispatch(productActions.deleteProductIdError(error.messages))
    );
};
//--Eugen
export const clearProducts = () => dispatch => {
  dispatch(productActions.clearProductsSuccess());
}
//--Eugen