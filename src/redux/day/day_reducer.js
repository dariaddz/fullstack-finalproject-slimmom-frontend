import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productActions from './day_action';

const currentDate = new Date().toLocaleDateString('fr-CA');

const diaryInfoState = {
  email: '',
  date: currentDate,
  products: [],
  dayNorm: 0,
  totalKcalPerDay: 0,
  kcalRemain: 0,
  percentage: null,
  productsNotRecommended: [],
};

const diaryInfo = createReducer(diaryInfoState, {
  [productActions.addProductSuccess]: (state, { payload }) => {
    return {
      ...state,
      products: [payload, ...state.products],
    };
  },
  [productActions.dateEatenProductsSuccess]: (_, { payload }) => payload,
  [productActions.deleteProductIdSuccess]: (state, { payload }) => {
    const oldProducts = state.products;
    const newProducts = oldProducts.filter(product => product.id !== payload);
    const newState = {
      ...state,
      products: newProducts,
    };
    return newState;
  },
});

const loading = createReducer(false, {
  [productActions.addProductRequest]: (state, action) => true,
  [productActions.addProductSuccess]: (state, action) => false,
  [productActions.addProductError]: (state, action) => false,
});

const error = createReducer(null, {
  [productActions.addProductRequest]: () => null,
  [productActions.dateEatenProductsRequest]: () => null,
  [productActions.deleteProductIdError]: (_, { payload }) => payload,
});

export default combineReducers({
  diaryInfo,
  loading,
  error,
});
