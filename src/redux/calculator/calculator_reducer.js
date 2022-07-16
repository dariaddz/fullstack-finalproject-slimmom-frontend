import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { calcRequest, calcSuccess, calcError } from './calculator_action';
// import { onLogoutSuccess, onLogoutRequest } from '../registration/UserSlice';

const initialState = { kcal: null, productsNotRecommended: null };

const calcData = createReducer(initialState, {
  [calcSuccess]: (_, { payload }) => payload,
  // [onLogoutSuccess]: () => initialState,
});

const error = createReducer(null, {
  [calcError]: (_, { payload }) => payload,
  // [onLogoutRequest]: () => null,
});

const loading = createReducer(false, {
  [calcRequest]: () => true,
  [calcSuccess]: () => false,
  [calcError]: () => false,
});
export default combineReducers({ calcData, error, loading });
