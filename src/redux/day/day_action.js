import { createAction } from '@reduxjs/toolkit';
const addProductRequest = createAction('products/addProductRequest');
const addProductSuccess = createAction('products/addProductSuccess');
const addProductError = createAction('products/addProductError');

const dateEatenProductsRequest = createAction(
  'products/dateEatenProductsRequest'
);
const dateEatenProductsSuccess = createAction(
  'products/dateEatenProductsSuccess'
);
const dateEatenProductsError = createAction('products/dateEatenProductsError');

const productActions = {
  addProductRequest,
  addProductSuccess,
  addProductError,
  dateEatenProductsRequest,
  dateEatenProductsSuccess,
  dateEatenProductsError,
};
export default productActions;
