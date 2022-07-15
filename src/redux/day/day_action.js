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

const deleteProductIdRequest = createAction('products/deleteProductIdRequest');
const deleteProductIdSuccess = createAction('products/deleteProductIdSuccess');
const deleteProductIdError = createAction('products/deleteProductIdError');

const productActions = {
  addProductRequest,
  addProductSuccess,
  addProductError,
  dateEatenProductsRequest,
  dateEatenProductsSuccess,
  dateEatenProductsError,
  deleteProductIdRequest,
  deleteProductIdSuccess,
  deleteProductIdError,
};
export default productActions;
