import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productActions from './day_action';

const diaryInfoState = {
  email: '',
  date: '',
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
});

const loading = createReducer(false, {
  [productActions.addProductRequest]: (state, action) => true,
  [productActions.addProductSuccess]: (state, action) => false,
  [productActions.addProductError]: (state, action) => false,
});

const error = createReducer(null, {
  [productActions.addProductRequest]: () => null,
  [productActions.dateEatenProductsRequest]: () => null,
});

export default combineReducers({
  diaryInfo,
  loading,
  error,
});
